'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function CommercialRefrigerationPage() {
  const products = [
    { title: "Refrigeration Cabinets", image: "/products/Commerical Refrigeration/Refrigeration-Cabinets.png", href: "/products/commercial-refrigeration/refrigeration-cabinets" },
    { title: "R290 Cabinets", image: "/products/Commerical Refrigeration/R290-cabinets.png", href: "/products/commercial-refrigeration/r290-cabinets" },
    { title: "Dual Temp", image: "/products/Commerical Refrigeration/Dual-Temp.png", href: "/products/commercial-refrigeration/dual-temp" },
    { title: "Thawing Cabinets", image: "/products/Commerical Refrigeration/Thawing-Cabinets.png", href: "/products/commercial-refrigeration/thawing-cabinets" },
    { title: "R290 Refrigerated Counters", image: "/products/Commerical Refrigeration/R290-Refrigerated-Counters.png", href: "/products/commercial-refrigeration/r290-refrigerated-counters" },
    { title: "Back Bar Coolers", image: "/products/Commerical Refrigeration/back-bar-cooler.png", href: "/products/commercial-refrigeration/back-bar-coolers" },
    { title: "Drop in", image: "/products/Commerical Refrigeration/Dropin.png", href: "/products/commercial-refrigeration/drop-in" },
    { title: "Wine Chiller", image: "/products/Commerical Refrigeration/wine-chiller.png", href: "/products/commercial-refrigeration/wine-chiller" },
    { title: "Prep Station", image: "/products/Commerical Refrigeration/Prep-Station.png", href: "/products/commercial-refrigeration/prep-station" },
    { title: "Blast Freezer", image: "/products/Commerical Refrigeration/Blast_Freezer.png", href: "/products/commercial-refrigeration/blast-freezer" },
    { title: "Banquet Trolley", image: "/products/Commerical Refrigeration/banquet-trolley.png", href: "/products/commercial-refrigeration/banquet-trolley" },
    { title: "Pan Cooler", image: "/products/Commerical Refrigeration/pan-cooler.png", href: "/products/commercial-refrigeration/pan-cooler" },
    { title: "Under Counter", image: "/products/Commerical Refrigeration/Under-Counter.png", href: "/products/commercial-refrigeration/under-counter" },
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-6 md:mb-8 uppercase tracking-tight leading-tight">Commercial Refrigeration</h1>
            <div className="max-w-4xl space-y-6 text-base md:text-xl font-light leading-relaxed opacity-90">
              <p>
                Williams Refrigeration offers a comprehensive range of commercial refrigeration solutions designed for optimal food preservation and energy efficiency. From under-counter units and blast freezers to wine chillers and prep stations, each product combines Italian craftsmanship with advanced technology. Ideal for restaurants, cafés, and supermarkets, these systems ensure consistent performance and durability.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-soft border border-border transition-all duration-500 flex flex-col">
                  <div className="relative h-56 md:h-64 w-full overflow-hidden bg-white flex items-center justify-center p-6 shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 text-center border-t border-border/50 flex-1 flex flex-col justify-between">
                    <h3 className="text-base md:text-lg font-bold mb-6 text-foreground min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center leading-snug">
                      {product.title}
                    </h3>
                    <Button asChild variant="outline" className="rounded-full w-full sm:w-auto px-8 h-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      <Link href={product.href}>Product Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 uppercase">Optimize Your Cold Chain</h2>
            <p className="text-base md:text-lg opacity-90 mb-10 font-light">
              Explore our full range of professional refrigeration solutions tailored for your business needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 w-full sm:w-auto">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
