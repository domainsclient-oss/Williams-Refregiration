"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Store, 
  Star,
  Upload,
  Loader2,
  Check
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { submitCareersToSheets } from '@/app/actions/sheets';
import { cn } from '@/lib/utils';

export default function ExpoDetailPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Add metadata for the spreadsheet
    formData.set('source', 'HORECA & BAKERS EXPO 2026 Page');
    
    // Append the file manually
    if (cvFile) {
      formData.set('cvFile', cvFile);
    }
    
    try {
      const result = await submitCareersToSheets(formData);

      if (result.success) {
        toast({
          title: "Inquiry Submitted",
          description: "Your details have been sent successfully. Thank you for your interest!",
        });
        (e.target as HTMLFormElement).reset();
        setCvFile(null);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "We couldn't process your application right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-primary py-12 md:py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <Button asChild variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 mb-8">
              <Link href="/careers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers</Link>
            </Button>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              <Star className="h-3 w-3 fill-current" /> Featured Event 2026
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight mb-6 max-w-4xl mx-auto text-[#f0f2f4]">
              Experience Food Display & Refrigeration Excellence at HORECA & BAKERS EXPO 2026
            </h1>
          </div>
        </section>

        {/* Content & Form Grid */}
        <section className="py-16 md:py-24 bg-[#f0f2f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-12">
                <div>
                  <div className="bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block mb-4">
                    Williams Refrigeration
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6 leading-tight">
                    Trusted Cooling Solutions for Hospitality, Bakery, Indian Sweets & Food Service Businesses
                  </h2>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Join us at South India's premier hospitality and bakery exhibition and discover innovative refrigeration solutions designed to enhance food preservation, operational efficiency, and business growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-2xl border border-border shadow-sm space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Store className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Visit Our Stall</span>
                    </div>
                    <p className="text-primary font-headline font-bold text-2xl">Stall No: D 05</p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl border border-border shadow-sm space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Expo Dates</span>
                    </div>
                    <p className="text-foreground font-headline font-bold text-2xl">July 01 – 03, 2026</p>
                  </div>

                  <div className="md:col-span-2 p-8 bg-[#152a4d] text-white rounded-2xl space-y-4 shadow-lg">
                    <div className="flex items-center gap-3 text-[#5479b6]">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Venue</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold">CODISSIA Trade Fair Complex</p>
                      <p className="text-white/60">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-8">Why Visit Williams Refrigeration?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      "Energy Efficient Commercial Refrigeration Solutions",
                      "Bakery & Pastry Display",
                      "Food Service Refrigeration Equipment",
                      "Energy-Efficiency Cooling Technology",
                      "Exclusive Expo Offers & Product Demonstrations"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-primary shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-white rounded-[2rem] shadow-sm border border-border space-y-4">
                   <h4 className="text-xl font-bold text-foreground">Discover. Connect. Grow.</h4>
                   <p className="text-muted-foreground leading-relaxed">
                     Explore our latest range of refrigeration innovations and meet our experts to find the perfect solution for your business requirements.
                   </p>
                </div>

                <div className="pt-12 text-center space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold text-foreground">We Look Forward to Meeting You</h3>
                    <p className="text-muted-foreground italic text-sm">"Cooling Innovation for Growing Food Businesses"</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Stall D 05</span>
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> July 01 – 03, 2026</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Join Our Team Form */}
              <div className="lg:col-span-5">
                <Card className="sticky top-32 border-none shadow-hover rounded-[2.5rem] bg-white overflow-hidden">
                  <CardContent className="p-10 md:p-12 space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-headline font-bold text-foreground">Join Our Team</h3>
                      <p className="text-muted-foreground text-sm font-light">
                        Submit your details for future opportunities or expo meetups.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-foreground">Full Name *</Label>
                        <Input 
                          id="fullName" 
                          name="fullName" 
                          placeholder="Enter your full name" 
                          className="h-12 bg-secondary/30 border-none rounded-xl focus-visible:ring-primary/20" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground">Email *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="h-12 bg-secondary/30 border-none rounded-xl focus-visible:ring-primary/20" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground">Phone *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="h-12 bg-secondary/30 border-none rounded-xl focus-visible:ring-primary/20" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="How can we help you or what role are you looking for?" 
                          className="min-h-[120px] bg-secondary/30 border-none rounded-xl focus-visible:ring-primary/20 resize-none" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-foreground">Upload CV (Optional)</Label>
                        <div className="relative">
                          <input 
                            type="file" 
                            id="cv-upload" 
                            className="hidden" 
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="cv-upload" 
                            className={cn(
                              "flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:bg-secondary/20 transition-all group",
                              cvFile ? "bg-primary/5 border-primary/20" : ""
                            )}
                          >
                            <Upload className={cn("h-8 w-8 mb-3 transition-colors", cvFile ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                            <span className="text-sm font-semibold">
                              {cvFile ? cvFile.name : "Click to upload"}
                            </span>
                            <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">PDF, DOC, DOCX</span>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 py-2">
                        <input type="checkbox" id="consent" className="mt-1 rounded border-border" required />
                        <label htmlFor="consent" className="text-[10px] leading-tight text-muted-foreground">
                          I agree to the storage and handling of my data by this website. *
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
