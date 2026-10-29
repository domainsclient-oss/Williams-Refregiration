'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProfessionalKitchenEquipmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Header Section */}
        <section className="py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8 -ml-4">
              <Link href="/products"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Products</Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tight">Professional Kitchen Equipment</h1>
            <div className="max-w-4xl space-y-6 text-xl font-light leading-relaxed opacity-90">
              <p>
                Professional kitchen equipment is essential for efficient, high-volume food preparation in commercial settings. This includes ovens, ranges, refrigerators, prep tables, and dishwashers, all designed for durability and performance. Advanced features like programmable controls and energy efficiency enhance productivity and reduce operational costs, making them indispensable in modern culinary environments.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl md:text-9xl font-headline font-bold text-muted-foreground/10 uppercase tracking-tighter select-none mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto">
              We are currently curating our latest range of professional culinary solutions. Check back shortly for our full catalog.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/10 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6 uppercase">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
              If you have specific requirements for your commercial kitchen project, our experts are available for a consultation.
            </p>
            <Button asChild className="rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
