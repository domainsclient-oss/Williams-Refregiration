
'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin,
  Send,
  Loader2
} from 'lucide-react';
import { submitToSheets, type SheetSubmissionData } from '@/app/actions/sheets';

const countryCodes = [
  { code: '+91', label: 'India' },
  { code: '+44', label: 'UK' },
  { code: '+1', label: 'USA' },
  { code: '+971', label: 'UAE' },
  { code: '+61', label: 'Australia' },
  { code: '+65', label: 'Singapore' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+81', label: 'Japan' },
  { code: '+86', label: 'China' },
  { code: '+39', label: 'Italy' },
  { code: '+34', label: 'Spain' },
  { code: '+1-CA', codeLabel: '+1', label: 'Canada' },
  { code: '+7', label: 'Russia' },
  { code: '+27', label: 'South Africa' },
  { code: '+55', label: 'Brazil' },
  { code: '+52', label: 'Mexico' },
  { code: '+82', label: 'South Korea' },
  { code: '+60', label: 'Malaysia' },
  { code: '+62', label: 'Indonesia' },
  { code: '+66', label: 'Thailand' },
  { code: '+84', label: 'Vietnam' },
  { code: '+90', label: 'Turkey' },
  { code: '+966', label: 'Saudi Arabia' },
  { code: '+974', label: 'Qatar' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: SheetSubmissionData = {
      Timestamp: new Date().toLocaleString(),
      Source: 'Contact Form',
      Name: formData.get('name') as string,
      Email: formData.get('email') as string,
      Phone: `${countryCode} ${formData.get('tel')}`,
      InquiryType: inquiryType,
      Address: formData.get('address') as string,
      Message: formData.get('message') as string,
      Remarks: `General Inquiry from Contact Page`
    };

    try {
      const result = await submitToSheets(data);

      if (result.success) {
        toast({
          title: "Inquiry Sent",
          description: "Thank you for reaching out. Our team will get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
        setInquiryType('');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem sending your inquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Contact Hero */}
        <section className="py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto font-light leading-relaxed">
              We're here to help you with your refrigeration needs. Reach out to our team of experts today.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              
              {/* Left Column: Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-headline font-bold mb-8 text-foreground">Get in Touch</h2>
                  <div className="space-y-8">
                    {/* Unit I */}
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">UNIT-I</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          #111 ‘C’, KIADB Industrial Area, 1st Phase,<br />
                          Bommasandra, Hosur Main Road,<br />
                          Bangalore - 560099, INDIA.
                        </p>
                      </div>
                    </div>

                    {/* Unit II */}
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">UNIT-II</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Plot No. 127&128, Bommasandra IV Phase,<br />
                          Yarandahally, Bangalore - 560099,<br />
                          Karnataka, India.
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Call Us</h4>
                        <p className="text-muted-foreground text-lg hover:text-primary transition-colors">
                          <a href="tel:+919844013768">+91 9844013768</a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Email Us</h4>
                        <p className="text-muted-foreground hover:text-primary transition-colors">
                          <a href="mailto:sales@williamsrefrigeration.in">sales@williamsrefrigeration.in</a>
                        </p>
                        <p className="text-muted-foreground hover:text-primary transition-colors">
                          <a href="mailto:info@williamsrefrigeration.in">info@williamsrefrigeration.in</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-bold text-lg mb-6">Follow Our Socials</h4>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/williamsrefrigerations/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="https://www.youtube.com/@WilliamsRefrigeration" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/williamsrefrigeration/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/williams-refrigerations/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <Card className="border-none shadow-soft overflow-hidden">
                <CardContent className="p-10 md:p-12">
                  <h3 className="text-2xl font-headline font-bold mb-8">Send an Inquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Inquiry Type</Label>
                      <Select value={inquiryType} onValueChange={setInquiryType} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">I need technical assistance or spares</SelectItem>
                          <SelectItem value="supplier">I want to offer my services as a new supplier</SelectItem>
                          <SelectItem value="sales">I want to be contacted by a sales person</SelectItem>
                          <SelectItem value="product">I need product information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" className="h-12" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" className="h-12" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tel">Telephone</Label>
                      <div className="flex gap-2">
                        <Select defaultValue="+91" onValueChange={setCountryCode}>
                          <SelectTrigger className="h-12 w-[80px] shrink-0">
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((country) => (
                              <SelectItem key={`${country.code}-${country.label}`} value={country.code}>
                                {country.code.includes('-') ? country.code.split('-')[0] : country.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input 
                          id="tel" 
                          name="tel" 
                          type="tel" 
                          placeholder="10-digit mobile number" 
                          className="h-12 flex-1" 
                          required 
                          pattern="[6-9][0-9]{9}"
                          maxLength={10}
                          title="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"
                          onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address (Optional)</Label>
                      <Input id="address" name="address" placeholder="Full Business Address" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us more about your request..." 
                        className="min-h-[150px] resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section className="py-24 bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-headline font-bold mb-4">Our Locations</h2>
              <p className="text-muted-foreground">Visit our manufacturing hubs in Bangalore.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="text-primary h-5 w-5" /> UNIT-I
                </h3>
                <div className="rounded-3xl overflow-hidden shadow-soft h-[450px] border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8703478418!2d77.6834466!3d12.823485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ce5c68f2f27%3A0x8979a95724564c7!2sWilliams%20Refrigeration%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="text-primary h-5 w-5" /> UNIT-II
                </h3>
                <div className="rounded-3xl overflow-hidden shadow-soft h-[450px] border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9205!2d77.7001!3d12.8202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d9a1f2c2f2f%3A0x1f2c2f2f2f2f2f2f!2sBommasandra%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
