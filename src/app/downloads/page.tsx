'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, IceCream, Utensils, Store, Snowflake, Loader2, User, Mail, Phone } from 'lucide-react';
import { submitToSheets, type SheetSubmissionData } from '@/app/actions/sheets';

interface DownloadItem {
  name: string;
  file: string;
  category: string;
}

export default function DownloadsPage() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DownloadItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    {
      title: "Ice Cream / Gelato",
      icon: <IceCream className="h-6 w-6 text-primary" />,
      items: [
        { name: "Smart", file: "/Downloads/Ice-cream/Smart.pdf" },
        { name: "Stella", file: "/Downloads/Ice-cream/Stella.pdf" },
        { name: "Scenic Prima", file: "/Downloads/Ice-cream/Scenic-Prima.pdf" },
        { name: "Snowgel", file: "/Downloads/Ice-cream/Snowgel.pdf" },
        { name: "shiloh", file: "/Downloads/Ice-cream/shiloh.pdf" },
        { name: "Shea", file: "/Downloads/Ice-cream/Shea.pdf" }
      ]
    },
    {
      title: "Confectionery / Patisserie",
      icon: <Utensils className="h-6 w-6 text-primary" />,
      items: [
        { name: "Shannon", file: "/Downloads/confectionery/Shannon.pdf" },
        { name: "Sibyl", file: "/Downloads/confectionery/Sibyl.pdf" },
        { name: "Silya", file: "/Downloads/confectionery/silya.pdf" },
        { name: "Skyler", file: "/Downloads/confectionery/Skyler.pdf" },
        { name: "Slavia", file: "/Downloads/confectionery/Slavia.pdf" },
        { name: "Sonnet", file: "/Downloads/confectionery/Sonnet.pdf" },
        { name: "Steffania", file: "/Downloads/confectionery/Steffania.pdf" },
        { name: "Stellar Sphire", file: "/Downloads/confectionery/Stellar_Sphire.pdf" },
        { name: "Stellar", file: "/Downloads/confectionery/stellar.pdf" }
      ]
    },
    {
      title: "Delicatessen / Serve Over",
      icon: <Store className="h-6 w-6 text-primary" />,
      items: [
        { name: "Sidney", file: "/Downloads/delicatessen/Sidney.pdf" }
      ]
    },
    {
      title: "Refrigeration",
      icon: <Snowflake className="h-6 w-6 text-primary" />,
      items: [
        { name: "Back Bar Cooler", file: "/Downloads/Refrigeration/Back_Bar_Cooler.pdf" },
        { name: "Banquet Trolley", file: "/Downloads/Refrigeration/Banquet_Trolley.pdf" },
        { name: "Blast Freezer", file: "/Downloads/Refrigeration/Blast_Freezer.pdf" },
        { name: "Drop in", file: "/Downloads/Refrigeration/Dropin.pdf" },
        { name: "Dual Temp", file: "/Downloads/Refrigeration/Dual.pdf" },
        { name: "Pan Cooler", file: "/Downloads/Refrigeration/Pan_Cooler.pdf" },
        { name: "Prep Station", file: "/Downloads/Refrigeration/Prep_Stations.pdf" },
        { name: "R290 Cabinets", file: "/Downloads/Refrigeration/R290_Refrigerated_Cabinets.pdf" },
        { name: "R290 Counter", file: "/Downloads/Refrigeration/R290_Refrigerated_Counter.pdf" },
        { name: "Refrigeration Cabinets", file: "/Downloads/Refrigeration/Refrigerated_Cabinet_Regular.pdf" },
        { name: "Refrigerated Counters", file: "/Downloads/Refrigeration/Refrigerated_Counter_Regular.pdf" },
        { name: "Thawing Cabinets", file: "/Downloads/Refrigeration/Thawing_Cabinets.pdf" },
        { name: "Wine Chiller", file: "/Downloads/Refrigeration/Wine_Chiller.pdf" }
      ]
    }
  ];

  const handleDownloadClick = (item: {name: string, file: string}, category: string) => {
    setSelectedItem({ ...item, category });
    setIsDialogOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedItem) return;

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: SheetSubmissionData = {
      Timestamp: new Date().toLocaleString(),
      Source: 'Catalogue Download',
      Name: formData.get('name') as string,
      Email: formData.get('email') as string,
      Phone: formData.get('phone') as string,
      ProductCategory: selectedItem.category,
      ProductName: selectedItem.name,
      Remarks: `Catalog Download: ${selectedItem.category} - ${selectedItem.name}`
    };

    try {
      const result = await submitToSheets(data);

      if (result.success) {
        const link = document.createElement('a');
        link.href = selectedItem.file;
        link.setAttribute('download', `${selectedItem.name}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Download Started",
          description: `The ${selectedItem.name} catalogue is now downloading. Thank you for your interest.`,
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem processing your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        <section className="py-20 bg-[#152a4d] text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">Resource Center</h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto font-light leading-relaxed">
              Access technical specifications and full product catalogues for our complete range of refrigeration solutions.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {categories.map((category, idx) => (
                <div key={idx} className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-border pb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-headline font-bold">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="group hover:shadow-hover transition-all duration-300 border-border bg-card">
                        <CardContent className="p-6 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                              <FileText className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-foreground">{item.name}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDownloadClick(item, category.title)}
                            className="text-primary hover:text-primary hover:bg-primary/10 rounded-full"
                          >
                            Catalogue <Download className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/20 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-headline font-bold mb-4">Need Technical Assistance?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the specific document you're looking for? Our technical support team is here to help.
            </p>
            <Button asChild className="rounded-full px-8">
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-[2rem]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline font-bold text-primary">Download Catalogue</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Please help us serve you better. Kindly drop your details to access the <strong>{selectedItem?.name}</strong> specifications.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="name" name="name" placeholder="John Doe" className="pl-10 h-12 rounded-xl" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" placeholder="john@company.com" className="pl-10 h-12 rounded-xl" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="10-digit mobile number" 
                    className="pl-10 h-12 rounded-xl" 
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
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-12 rounded-full text-lg shadow-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                ) : (
                  <>Submit & Download <Download className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
