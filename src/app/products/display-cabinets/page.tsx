'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function DisplayCabinetsPage() {
  const categories = [
    {
      title: "Confectionery/Patisserie",
      image: "/products/Display Cabinets/Confectionery.png",
      href: "/products/display-cabinets/confectionery"
    },
    {
      title: "Ice Cream/Gelato",
      image: "/products/Display Cabinets/Ice-cream.png",
      href: "/products/display-cabinets/ice-cream"
    },
    {
      title: "Delicatessen/Serve Over",
      image: "/products/Display Cabinets/Delicatessen.png",
      href: "/products/display-cabinets/delicatessen"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Header Section */}
        <section className="py-12 md:py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm" className="text-background/60 hover:text-background hover:bg-white/10 mb-6 md:mb-8 -ml-2">
              <Link href="/products"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Products</Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-6 md:mb-8 uppercase tracking-tight leading-tight">Display Cabinets</h1>
            <div className="max-w-4xl space-y-6 text-base md:text-xl font-light leading-relaxed opacity-90">
              <p>
                Williams Refrigeration’s display cabinets combine style and performance, ideal for showcasing bakery, deli, or gelato items. With clear glass, LED lighting, and energy-efficient cooling, they ensure freshness and visibility. Perfect for retail environments, these cabinets enhance presentation while maintaining consistent temperature control and durability.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {categories.map((cat, index) => (
                <Card key={index} className="group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-soft border border-border transition-all duration-500 hover:shadow-hover hover:-translate-y-1 flex flex-col">
                  <div className="relative h-64 md:h-72 w-full overflow-hidden bg-secondary/10 flex items-center justify-center p-8 shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 text-center flex-1 flex flex-col justify-between">
                    <h3 className="text-lg md:text-xl font-headline font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <Button asChild variant="outline" className="rounded-full w-full px-8 h-11 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-bold">
                      <Link href={cat.href}>View Range</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 md:py-20 bg-white border-t border-border px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 uppercase">Need a custom layout?</h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10">
              Our engineering team can tailor display dimensions and finishes to match your specific retail branding and spatial requirements.
            </p>
            <Button asChild className="rounded-full px-10 h-14 text-lg w-full sm:w-auto shadow-lg">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
