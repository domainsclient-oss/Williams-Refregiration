
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
  Maximize
} from 'lucide-react';

export default function SidneyProductPage() {
  const sections = [
    { id: 'overview', label: 'Overview', icon: <Layout className="h-4 w-4" /> },
    { id: 'design', label: 'Design', icon: <Settings2 className="h-4 w-4" /> },
    { id: 'material', label: 'Material', icon: <Layers className="h-4 w-4" /> },
    { id: 'lighting', label: 'Lighting', icon: <Lightbulb className="h-4 w-4" /> },
    { id: 'refrigeration', label: 'Refrigeration', icon: <Snowflake className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Product Hero Banner */}
        <section className="relative min-h-[450px] md:h-auto md:min-h-[450px] bg-primary text-background overflow-hidden flex flex-col items-center justify-center py-12 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8">
              <Link href="/products/display-cabinets/delicatessen"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection</Link>
            </Button>
            <h1 className="product-hero-title">Sidney</h1>
            
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
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Destination for Freshness and Flavour</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>
                    Offering an appealing presentation, unparalleled transparency, and the option to merge two vertical cabinets into one, it's the ideal solution for stores seeking to blend top performance and innovative design while enjoying the flexibility to craft custom layouts.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Delicatessen/Sidney.png"
                  alt="Sidney Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section id="design" className="py-24 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3 text-foreground">
                    <Settings2 className="text-primary" /> Design
                  </h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">The quality display relies on the perfect transparency and minimalist design of the showcase.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">Custom modular design to suit any food and beverage display requirements.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3 text-foreground">
                    <Box className="text-primary" /> Glass structure
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">Side glasses are double glazed.</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">Anti-Skid legs are provided.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 rounded-[3rem] p-1 border border-border">
                 <div className="h-full w-full flex items-center justify-center p-12">
                    <Image
                      src="/products/Display Cabinets/Delicatessen/Sidney.png"
                      alt="Sidney Design"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Section */}
        <section id="material" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">Material</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Planning", text: "The material is fundamental for every planner or designer.", icon: <Layout /> },
                { title: "Stainless Steel", text: "AISI 304 food grade stainless steel with with matte finish.", icon: <CheckCircle2 /> },
                { title: "Design", text: "Front decorative panel is elegantly designed.", icon: <Maximize /> },
                { title: "Customization", text: "Racks are provided with customizable colour options.", icon: <Settings2 /> },
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all group">
                  <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lighting Section */}
        <section id="lighting" className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-headline font-bold mb-8 text-white">Lighting</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Lightbulb />, text: "Lighting is crucial for effectively showcasing products, which is why Williams opted to incorporate an innovative indirect lighting system featuring LEDs seamlessly integrated into the display." },
                    { icon: <Settings2 />, text: "Electronic digital controller of Italian make is used for precise control and display of the temperature of the food items." },
                    { icon: <CheckCircle2 />, text: "Novel design of extrusion where LEDs are located at the top with optional white/neutral white colours." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <div className="h-6 w-6 text-white">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Delicatessen/Sidney.png"
                    alt="Sidney Lighting"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refrigeration Section */}
        <section id="refrigeration" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Refrigeration</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { icon: <Snowflake />, text: "Remote / Self-contained refrigeration system." },
                { icon: <Settings2 />, text: "The cabinet's thermodynamics maintain a uniform temperature across all shelves, while its electronic fans offer adjustable speeds and operate quietly." },
                { icon: <Maximize />, text: "The product presentation features high contrast for enhanced visibility. The refrigeration system includes easily removable air grills for compatibility." },
                { icon: <Lightbulb />, text: "Ideal humidity levels contribute to the optimal preservation of the product." },
                { icon: <Settings2 />, text: "Auto drain removal system." },
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
