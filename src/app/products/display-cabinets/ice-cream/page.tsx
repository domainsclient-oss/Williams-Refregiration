'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function IceCreamGelatoPage() {
  const products = [
    { title: "Shea", image: "/products/Display Cabinets/Ice Cream/shea.png", href: "/products/display-cabinets/ice-cream/shea" },
    { title: "Shiloh", image: "/products/Display Cabinets/Ice Cream/shiloh.png", href: "/products/display-cabinets/ice-cream/shiloh" },
    { title: "Scenic Prima", image: "/products/Display Cabinets/Ice Cream/Scenic-Prima.png", href: "/products/display-cabinets/ice-cream/scenic-prima" },
    { title: "Smart", image: "/products/Display Cabinets/Ice Cream/Smart.png", href: "/products/display-cabinets/ice-cream/smart" },
    { title: "Snowgel", image: "/products/Display Cabinets/Ice Cream/Snowgel.png", href: "/products/display-cabinets/ice-cream/snowgel" },
    { title: "Stella", image: "/products/Display Cabinets/Ice Cream/Stella.png", href: "/products/display-cabinets/ice-cream/stella" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Header Section */}
        <section className="py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8 -ml-4">
              <Link href="/products/display-cabinets"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Display Cabinets</Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tight">Ice Cream / Gelato</h1>
            <div className="max-w-4xl space-y-6 text-xl font-light leading-relaxed opacity-90">
              <p>
                Williams Refrigeration’s ice cream display cabinets are designed to showcase frozen treats with style and efficiency. Featuring ultra-clear heated glass, LED lighting, and precise temperature control, they ensure optimal freshness and visibility. Ideal for gelato parlours and dessert shops, these cabinets combine Italian craftsmanship with advanced refrigeration technology to enhance product presentation.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group overflow-hidden rounded-[2rem] bg-white shadow-soft border border-border transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden bg-white flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardContent className="p-8 text-center border-t border-border/50">
                    <h3 className="text-lg font-bold mb-6 text-foreground min-h-[3.5rem] flex items-center justify-center">
                      {product.title}
                    </h3>
                    <Button asChild variant="outline" className="rounded-full px-8 h-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      <Link href={product.href}>Product Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold mb-6 uppercase">Elevate Your Gelato Presentation</h2>
            <p className="text-lg opacity-90 mb-10 font-light">
              Our experts are ready to help you find the perfect display solution for your frozen dessert business.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14">
              <Link href="/contact">Inquire Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
