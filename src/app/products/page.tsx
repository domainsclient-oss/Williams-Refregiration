'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const featuredProducts = [
    {
      title: "Display Cabinets",
      image: "/products/display-cabinets.png",
      description: "Elegant and efficient solutions for showcasing your finest products.",
      href: "/products/display-cabinets"
    },
    {
      title: "Commerical Refrigeration",
      image: "/products/commerical-refrigeration.png",
      description: "Robust cooling technology designed for the most demanding commercial environments.",
      href: "/products/commercial-refrigeration"
    },
    {
      title: "Professional Kitchen Equipment",
      image: "/products/professional-kitchen-equipment.png",
      description: "High-performance fabrication and refrigeration for culinary excellence.",
      href: "/products/professional-kitchen-equipment"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Header Section */}
        <section className="py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tight">Our Products</h1>
            <div className="max-w-4xl mx-auto space-y-6 text-xl font-light leading-relaxed opacity-90">
              <p>
                We have established ourselves as a leading brand in the furnishing industry for bars, gelato shops, bakeries, and the broader food sector.
              </p>
              <p>
                Our display cases and preservation technology embody Italian craftsmanship, and with each venue we design, we aim to convey a unique narrative.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="group overflow-hidden rounded-[2.5rem] bg-white shadow-soft border border-border transition-all duration-500 hover:shadow-hover hover:-translate-y-1">
                  <div className="relative h-64 w-full overflow-hidden bg-secondary/10 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-headline font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8 text-sm h-12 line-clamp-2">
                      {product.description}
                    </p>
                    <Button asChild variant="outline" className="rounded-full px-8 h-11 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-bold">
                      <Link href={product.href}>View All</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative CTA Section */}
        <section className="py-24 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 uppercase">Italian Craftsmanship, Global Expertise</h2>
            <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
              Every unit we manufacture is a testament to our commitment to excellence. From the selection of materials to the final quality check, we ensure that Williams technology enhances your venue's narrative.
            </p>
            <Button asChild className="rounded-full px-10 h-14 text-lg shadow-lg">
              <Link href="/contact">Inquire for Custom Solutions <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
