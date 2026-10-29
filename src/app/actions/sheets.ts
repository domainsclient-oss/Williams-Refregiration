'use server';

import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

export type SheetSubmissionData = {
  Timestamp: string;
  Source: string;
  Name: string;
  Email: string;
  Phone: string;
  InquiryType?: string;
  Subject?: string;
  Address?: string;
  Message?: string;
  ProductCategory?: string;
  ProductName?: string;
  Remarks: string;
};

/**
 * Shared Google Auth configuration for both Sheets and Drive
 */
async function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (privateKey) {
    // Handle newline characters in private key string
    privateKey = privateKey.replace(/^\"|\"$/g, '');
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google credentials (GOOGLE_SHEETS_CLIENT_EMAIL or GOOGLE_SHEETS_PRIVATE_KEY)');
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/drive'
    ],
  });
}

async function getSheetsClient() {
  const auth = await getGoogleAuth();
  return google.sheets({ version: 'v4', auth });
}

async function getDriveClient() {
  const auth = await getGoogleAuth();
  return google.drive({ version: 'v3', auth });
}

async function sendNotificationEmail(subject: string, html: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('Email notification skipped: SMTP configuration missing.');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO_NOTIFICATIONS || process.env.SMTP_USER,
      subject: `[Website Alert] ${subject}`,
      html: `
        <div style=\"font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;\">
          <h2 style=\"color: #152a4d; border-bottom: 2px solid #5479b6; padding-bottom: 10px;\">${subject}</h2>
          ${html}
          <div style=\"margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #888;\">
            Sent from Williams Refrigeration Website
          </div>
        </div>
      `,
    });
  } catch (error: any) {
    console.error('EMAIL_NOTIFICATION_ERROR:', error?.message);
  }
}

/**
 * Standard Lead Submission
 */
export async function submitToSheets(data: SheetSubmissionData) {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    let tabName = process.env.GOOGLE_SHEET_TAB_NAME || 'Leads';
    tabName = tabName.replace(/^\"|\"$/g, '');

    if (!spreadsheetId) {
      return { success: false, error: 'Configuration Error: Missing Sheet ID' };
    }

    const finalRemarks = data.Message 
      ? `${data.Remarks} | Message: ${data.Message}` 
      : data.Remarks;

    const formattedPhone = `'${data.Phone}`;

    const values = [
      [
        data.Timestamp,
        data.Name,
        data.Email,
        formattedPhone,
        data.InquiryType || '',
        data.Subject || '',
        data.Address || '',
        data.ProductCategory || '',
        data.ProductName || '',
        finalRemarks,
        data.Source,
      ],
    ];

    const range = `'${tabName}'!A:K`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    // Send Email Notification
    await sendNotificationEmail(
      `New Lead: ${data.Source}`,
      `
        <p><strong>Name:</strong> ${data.Name}</p>
        <p><strong>Email:</strong> ${data.Email}</p>
        <p><strong>Phone:</strong> ${data.Phone}</p>
        <p><strong>Type:</strong> ${data.InquiryType || 'N/A'}</p>
        <p><strong>Product:</strong> ${data.ProductName || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.Message || 'N/A'}</p>
        <p><strong>Remarks:</strong> ${data.Remarks}</p>
      `
    );

    return { success: true };
  } catch (error: any) {
    console.error('GOOGLE_SHEETS_ERROR:', error?.message);
    return { success: false, error: 'Submission failed' };
  }
}

/**
 * Career Submission with File Upload to Google Drive
 */
export async function submitCareersToSheets(formData: FormData) {
  try {
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const source = formData.get('source') as string || 'General Careers';
    const cvFile = formData.get('cvFile') as any;

    let cvUrl = 'No file provided';
    let folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
        throw new Error('Configuration Error: Missing GOOGLE_DRIVE_FOLDER_ID in environment variables. Please set it in your .env file.');
    }
    
    // Clean the folder ID strictly
    folderId = folderId.replace(/^\"|\"$/g, '').trim();

    // 1. Handle File Upload to Google Drive
    if (cvFile && cvFile.size > 0) {
      try {
        const drive = await getDriveClient();
        const buffer = Buffer.from(await cvFile.arrayBuffer());
        
        // Sanitize filename
        const sanitizedFileName = `${fullName.replace(/[^a-z0-9]/gi, '_')}_CV_${cvFile.name.replace(/[^a-z0-9.]/gi, '_')}`;
        
        // Verify folder access and permissions
        try {
          const folderInfo = await drive.files.get({
            fileId: folderId,
            fields: 'id, name, capabilities',
            supportsAllDrives: true,
          });

          if (!folderInfo.data.capabilities?.canAddChildren) {
            throw new Error(`Service account has read-only access to the folder. Please grant 'Editor' (for regular folders) or 'Content Manager' (for Shared Drives) role to the service account: ${process.env.GOOGLE_SHEETS_CLIENT_EMAIL}`);
          }
        } catch (folderErr: any) {
          // This will catch both the drive.files.get failure and the explicit error thrown above
          throw new Error(`Could not verify target folder permissions. Ensure folder ID is correct and shared with the service account. Details: ${folderErr.message}`);
        }
        
        const driveResponse = await drive.files.create({
          requestBody: {
            name: sanitizedFileName,
            parents: [folderId],
          },
          media: {
            mimeType: cvFile.type || 'application/pdf',
            body: Readable.from(buffer),
          },
          fields: 'id, webViewLink',
          supportsAllDrives: true,
        });

        if (driveResponse.data.id) {
          cvUrl = driveResponse.data.webViewLink || `https://drive.google.com/open?id=${driveResponse.data.id}`;
          
          // Attempt to make the file readable by anyone with the link
          try {
            await drive.permissions.create({
              fileId: driveResponse.data.id,
              requestBody: {
                role: 'reader',
                type: 'anyone',
              },
              supportsAllDrives: true,
            });
          } catch (permErr: any) {
            console.warn('PERMISSIONS_NOTICE: File uploaded but sharing failed. Error:', permErr.message);
          }
        }
      } catch (driveErr: any) {
        console.error('DRIVE_UPLOAD_ERROR:', driveErr.message);
        cvUrl = `Upload Error: ${driveErr.message || 'Unknown Error'}`;
        // Add more context if it's the quota error
        if (driveErr.message?.includes('storage quota')) {
          cvUrl = `Upload Error: Service Accounts do not have storage quota. This is a configuration issue with Google Drive. Please ensure the target folder is in a Shared Drive and the service account (${process.env.GOOGLE_SHEETS_CLIENT_EMAIL}) is a member with 'Content Manager' role.`;
        }
      }
    }

    // 2. Save to Google Sheets
    const sheets = await getSheetsClient();
    let spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (spreadsheetId) {
      spreadsheetId = spreadsheetId.replace(/^\"|\"$/g, '').trim();
    }
    
    const tabName = 'Careers';

    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEET_ID in environment variables');
    }

    const timestamp = new Date().toLocaleString();
    const values = [
      [
        fullName,      // Column A
        email,         // Column B
        `'${phone}`,   // Column C
        message,       // Column D
        cvUrl,         // Column E
        timestamp,     // Column F
        source         // Column G
      ],
    ];

    const range = `'${tabName}'!A:G`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    // 3. Send Email Notification
    await sendNotificationEmail(
      `New Career Application: ${fullName}`,
      `
        <p><strong>Applicant Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Applied On:</strong> ${timestamp}</p>
        <p><strong>Message:</strong><br />${message || 'No message provided'}</p>
        <p><strong>Resume/CV:</strong> <a href=\"${cvUrl}\">${cvUrl.startsWith('http') ? 'View Application File' : cvUrl}</a></p>
      `
    );

    return { success: true };
  } catch (error: any) {
    console.error('CAREER_SUBMISSION_ERROR:', error?.message);
    return { success: false, error: error?.message || 'Submission failed' };
  }
}