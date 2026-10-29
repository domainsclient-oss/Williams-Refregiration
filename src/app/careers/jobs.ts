export type JobListing = {
  id: string;
  title: string;
  count: string | number;
  department: string;
  location: string;
  type: string;
  description: string;
  experience: string;
};

export const jobs: JobListing[] = [
  {
    id: 'field-executive-chennai',
    title: 'Field Executive',
    count: 1,
    department: 'Sales TN',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Responsible for field sales and business development in the Chennai region. Manage client acquisition, relationship building, lead generation, and coordination with internal teams. Utilize CRM/ERP systems for sales tracking and reporting. Fluency in Tamil is mandatory.'
  },
  {
    id: 'field-executive-coimbatore',
    title: 'Field Executive',
    count: 1,
    department: 'Sales TN',
    location: 'Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Drive field sales activities and expand business opportunities in the Coimbatore region. Handle customer engagement, lead conversion, and cross-functional coordination. Maintain accurate sales records through CRM/ERP platforms. Fluency in Tamil is mandatory.'
  },
  {
    id: 'field-executive-karnataka',
    title: 'Field Executive',
    count: 1,
    department: 'Sales KA/AP/ROI',
    location: 'Karnataka',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Develop and manage business opportunities across Karnataka through field sales activities. Build strong client relationships, coordinate with internal teams, and ensure effective sales pipeline management using CRM/ERP tools. Fluency in Kannada is required.'
  },
  {
    id: 'field-executive-hyderabad',
    title: 'Field Executive',
    count: 1,
    department: 'Sales KA/AP/ROI',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Responsible for business development and customer acquisition in the Hyderabad region. Manage client relationships, generate leads, coordinate with internal stakeholders, and maintain CRM/ERP records. Fluency in Telugu and/or Hindi is preferred.'
  },
  {
    id: 'design-manager-unit-1',
    title: 'Design Manager',
    count: 4,
    department: 'Design',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Design and develop sheet metal products using SolidWorks and AutoCAD. Prepare 2D/3D models, drawings, and manufacturing documentation. Coordinate with production and cross functional teams to ensure design feasibility and project execution.'
  },
  {
    id: 'nesting-engineer-unit-1',
    title: 'Nesting Engineer',
    count: 1,
    department: 'Design',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '0–1 Year',
    description: 'Prepare and optimize nesting layouts for sheet metal fabrication to maximize material utilization. Work with AutoCAD, Bodor, Radan, and related software. Possess knowledge of GD&T, sheet metal processes, and material specifications.'
  },
  {
    id: 'jr-data-analyst',
    title: 'Jr. Data Analyst',
    count: 1,
    department: 'Data Analysis',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '0–1 Year',
    description: 'Collect, analyze, and interpret data to support business decision-making. Prepare reports, dashboards, and performance metrics using Excel and analytical tools. Strong analytical thinking, attention to detail, and communication skills are essential.'
  },
  {
    id: 'sales-coordinator-tn',
    title: 'Sales Coordinator',
    count: 1,
    department: 'Sales TN',
    location: 'Chennai/Coimbatore, Tamil Nadu',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Support the sales team by managing order processing, customer coordination, sales documentation, and CRM/ERP updates. Ensure smooth communication between customers and internal departments. Fluency in Tamil is required.'
  },
  {
    id: 'sales-coordinator-ka',
    title: 'Sales Coordinator',
    count: 1,
    department: 'Sales KA/AP/ROI',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Coordinate sales operations, process customer orders, maintain CRM/ERP records, and support regional sales teams. Facilitate effective communication with customers and internal stakeholders. Fluency in Kannada is required.'
  },
  {
    id: 'tele-callers',
    title: 'Tele-callers',
    count: 3,
    department: 'Sales KA/AP/ROI',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '0–1 Year',
    description: 'Conduct outbound and inbound customer calls for lead generation, follow-ups, and appointment scheduling. Maintain customer records, provide product information, and support sales conversion activities. Strong communication and interpersonal skills are required.'
  },
  {
    id: 'hr-executive',
    title: 'HR Executive',
    count: 2,
    department: 'HR & Admin',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '2 Years',
    description: 'Manage end-to-end recruitment activities, including sourcing, screening, interviewing, and onboarding. Support employee engagement initiatives, HR documentation, and compliance activities. Manufacturing industry recruitment experience is preferred.'
  },
  {
    id: 'asst-hr-admin',
    title: 'Asst. – HR & Admin',
    count: 1,
    department: 'HR & Admin',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: 'Fresh Graduate',
    description: 'Assist in HR operations, employee records management, onboarding activities, attendance tracking, and administrative support. Fresh graduates with strong communication and organizational skills are encouraged to apply.'
  }
];