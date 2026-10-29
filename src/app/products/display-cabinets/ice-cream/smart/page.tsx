
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Layout, 
  Layers, 
  Lightbulb, 
  Snowflake, 
  Settings2,
  CheckCircle2,
  Mail,
  Box,
  Maximize,
  Thermometer,
  Zap,
  Truck
} from 'lucide-react';

export default function SmartProductPage() {
  const sections = [
    { id: 'overview', label: 'Overview', icon: <Layout className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Settings2 className="h-4 w-4" /> },
    { id: 'key-features', label: 'Key Features', icon: <Snowflake className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Product Hero Banner */}
        <section className="relative min-h-[450px] md:h-auto md:min-h-[450px] bg-primary text-background overflow-hidden flex flex-col items-center justify-center py-12 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8">
              <Link href="/products/display-cabinets/ice-cream"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection</Link>
            </Button>
            <h1 className="product-hero-title">Smart</h1>
            
            {/* Anchor Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {sections.map((section) => (
                <Button 
                  key={section.id} 
                  variant="outline" 
                  className="rounded-full bg-white/5 border-white/20 text-background hover:bg-white hover:text-foreground transition-all px-6"
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Essential design</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>
                    Professional ice-cream display cases with unique design and high-level technical features, offering a wide range of products to suit your needs. Multifunctional, adaptable and elegant ice-cream display cases, a perfect balance between aesthetics and functionality.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Ice Cream/Smart.png"
                  alt="Smart Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-headline font-bold mb-12 flex items-center gap-3 text-foreground justify-center">
              <Settings2 className="text-primary" /> Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Layout />, text: "Slots are provided where flavour tags can be placed infront of the product." },
                { icon: <Box />, text: "Polycarbonate sliding door. Possess brass/steel nobs and the doors slide very smoothly." },
                { icon: <Thermometer />, text: "The front glass is associated with heater wires which avoids creation of fog." },
                { icon: <Lightbulb />, text: "Novel design of extrusion where dual LED strips are located at the top with optional white/neutral white colours." },
                { icon: <CheckCircle2 />, text: "Scoop washer is provided as an optional feature." },
                { icon: <Maximize />, text: "Work top is made of corian material." },
                { icon: <Maximize />, text: "Front decorative panel material is customizable on request." },
                { icon: <Maximize />, text: "The display is available in various sizes of 4' (9 flavours) and 4' (12 flavours) and 4’ (10 flavours)." },
                { icon: <Layers />, text: "The side glass is provided with ceramic paint." },
                { icon: <Settings2 />, text: "Electronic digital controller of Italian make is used for precise control and display of the temperature of the food items." },
                { icon: <Zap />, text: "Exclusive ON/OFF power switch is provided in the system. Also, ON/OFF switch for LED is given." },
                { icon: <Truck />, text: "Heavy duty wheels are provided for easy movement of the system." },
                { icon: <CheckCircle2 />, text: "Specially designed scoop washer is an optional feature which helps in washing ice cream scoops instantly." },
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white rounded-3xl border border-border hover:shadow-hover transition-all group">
                  <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lighting Section (Fixing image visibility) */}
        <section id="lighting" className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-headline font-bold mb-8 text-white">Lighting</h2>
                <p className="text-white/80 text-sm font-light leading-relaxed">Integrated LED lighting highlights your gelato flavors with natural, brilliant light that makes every scoop irresistible.</p>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Ice Cream/Smart.png"
                    alt="Smart Lighting"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="key-features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Key Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { icon: <Snowflake />, text: "The system is sustainable, that zero ODP refrigerants are used." },
                { icon: <Maximize />, text: "Wide range: 9 pans, 10 pans and 12 pans." },
                { icon: <Snowflake />, text: "High humidity enhances the perfect preservation of the ice cream." },
                { icon: <CheckCircle2 />, text: "Durable and energy efficient European make compressor." },
                { icon: <Layers />, text: "AISI 304 food grade stainless steel with with matte finish." },
                { icon: <Snowflake />, text: "Balanced, forced air refrigeration system enables rapid product pull down and even temperature throughout." },
                { icon: <Settings2 />, text: "Pull out refrigeration system for easy maintenance." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase">Need Help?</h2>
            <p className="text-xl opacity-90 mb-10 font-light">Write to us now</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <a href="mailto:info@williamsrefrigeration.in" className="flex items-center gap-3 text-lg hover:underline transition-all">
                <Mail className="h-5 w-5" /> info@williamsrefrigeration.in
              </a>
              <a href="mailto:sales@williamsrefrigeration.in" className="flex items-center gap-3 text-lg hover:underline transition-all">
                <Mail className="h-5 w-5" /> sales@williamsrefrigeration.in
              </a>
            </div>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
