
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin,
  Upload,
  Loader2,
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitCareersToSheets } from '@/app/actions/sheets';
import { cn } from '@/lib/utils';
import { jobs } from './jobs';

const allListings = jobs.map(job => ({
  id: job.id,
  title: job.title,
  location: job.location,
  type: job.department,
  href: `/careers/${job.id}`,
  category: 'Job'
}));

export default function CareersPage() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const filteredListings = allListings.filter(item => {
    const matchesType = typeFilter === 'all' || item.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesLocation = locationFilter === 'all' || item.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesType && matchesLocation;
  });

  const locations = Array.from(new Set(allListings.map(l => l.location.split(',')[0].trim())));
  const types = Array.from(new Set(allListings.map(l => l.type)));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set('source', 'General Careers Page');
    
    if (cvFile) {
      formData.set('cvFile', cvFile);
    }
    
    try {
      const result = await submitCareersToSheets(formData);

      if (result.success) {
        toast({
          title: "Application Submitted",
          description: "Your application has been sent successfully. We will keep you in mind for future opportunities.",
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

  const selectItemClass = "focus:bg-[#5479b6] focus:text-white cursor-pointer transition-colors duration-150";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-[#5479b6] py-16 md:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-white uppercase tracking-tight">
              Careers
            </h1>
            <p className="text-white/80 mt-4 text-lg font-light max-w-2xl mx-auto">
              Explore opportunities to grow with India's leading refrigeration specialists.
            </p>
          </div>
        </section>

        {/* Listing & Filter Section */}
        <section className="py-16 md:py-24 bg-[#f0f2f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="w-full sm:w-64">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="h-12 bg-white border-border rounded-none shadow-none focus:ring-0 text-sm">
                    <SelectValue placeholder="All Job Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="all" className={selectItemClass}>All Job Type</SelectItem>
                    {types.map(t => (
                      <SelectItem key={t} value={t} className={selectItemClass}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full sm:w-64">
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="h-12 bg-white border-border rounded-none shadow-none focus:ring-0 text-sm">
                    <SelectValue placeholder="All Job Location" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="all" className={selectItemClass}>All Job Location</SelectItem>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc} className={selectItemClass}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.length > 0 ? (
                filteredListings.map((item) => (
                  <Card key={item.id} className="rounded-none border border-border shadow-none hover:shadow-soft transition-all duration-300 flex flex-col group bg-white">
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#152a4d] mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-2 mb-8">
                        <MapPin className="h-3.5 w-3.5" /> {item.location}
                      </p>
                      <div className="mt-auto">
                        <Link 
                          href={item.href} 
                          className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          More Details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white border-2 border-dashed border-border">
                  <p className="text-muted-foreground">No listings found matching your filters.</p>
                  <Button variant="link" onClick={() => { setTypeFilter('all'); setLocationFilter('all'); }}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Global CTA Form Section */}
        <section className="py-20 bg-secondary/20 border-t border-border">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-[#152a4d] mb-6">Don't see a role that fits?</h2>
              <p className="text-muted-foreground text-lg font-light">
                We're always looking for talented individuals. Submit your CV below, and we'll keep you in mind for future opportunities.
              </p>
            </div>
            <Card className="max-w-2xl mx-auto border-none shadow-lg rounded-2xl bg-white">
              <CardContent className="p-10 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName-open" className="text-xs font-bold uppercase tracking-wider text-foreground">Full Name *</Label>
                      <Input id="fullName-open" name="fullName" placeholder="Your full name" className="h-12 bg-secondary/30 border-none rounded-xl" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-open" className="text-xs font-bold uppercase tracking-wider text-foreground">Email *</Label>
                      <Input id="email-open" name="email" type="email" placeholder="Your email address" className="h-12 bg-secondary/30 border-none rounded-xl" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-open" className="text-xs font-bold uppercase tracking-wider text-foreground">Phone *</Label>
                    <Input id="phone-open" name="phone" type="tel" placeholder="Your phone number" className="h-12 bg-secondary/30 border-none rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-open" className="text-xs font-bold uppercase tracking-wider text-foreground">Message</Label>
                    <Textarea id="message-open" name="message" placeholder="Tell us about yourself..." className="min-h-[100px] bg-secondary/30 border-none rounded-xl resize-none" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-foreground">Upload CV *</Label>
                    <div className="relative">
                      <input type="file" id="cv-upload-open" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                      <label htmlFor="cv-upload-open" className={cn("flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-xl cursor-pointer", cvFile ? "bg-primary/5 border-primary/20" : "hover:bg-secondary/20")}>
                        <Upload className={cn("h-6 w-6 mb-2", cvFile ? "text-primary" : "text-muted-foreground")} />
                        <span className="text-sm font-semibold">{cvFile ? cvFile.name : "Click to upload"}</span>
                        <span className="text-[10px] text-muted-foreground mt-1">PDF, DOC, DOCX</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" id="consent-open" className="mt-1 rounded border-border" required defaultChecked />
                    <label htmlFor="consent-open" className="text-[10px] leading-tight text-muted-foreground">
                      I agree to the storage and handling of my data by this website. *
                    </label>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                    {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Open Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
