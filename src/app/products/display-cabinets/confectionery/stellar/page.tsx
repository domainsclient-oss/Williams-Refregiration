
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
  Truck
} from 'lucide-react';

export default function StellarProductPage() {
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
              <Link href="/products/display-cabinets/confectionery"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection</Link>
            </Button>
            <h1 className="product-hero-title">Stellar</h1>
            
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
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Prime Performer Par Excellence</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>
                    Premium heavy duty display cabinet enjoys widespread trust among end users, maintaining its status as the preferred choice for numerous clients with guaranteed performance. These display cabinets possess limitless possibilities, functional and are reliable increasing the sales through great efficiency and product impact.
                  </p>
                  <p>
                    Williams cold and heated cabinets undergo rigorous testing in advanced environmental laboratories to ensure consistent core product temperatures. Designed with energy efficiency in mind, Williams products also contribute to significantly lowering your operational costs.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Confectionery/stellar.png"
                  alt="Stellar Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section id="design" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
                    <Settings2 className="text-primary" /> Design
                  </h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">The perfect transparency and the minimalist design of the showcase is fundamental for a quality display.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground flex items-center gap-3"><Truck className="text-primary h-5 w-5" /> Sturdy wheels facilitated for effortless mobility.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground flex items-center gap-3"><Thermometer className="text-primary h-5 w-5" /> Temperature indicator is provided at the front of the display for easy monitoring.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">The side glasses is ceramic printed.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
                    <Box className="text-primary" /> Glass structure
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">The racks are made of glass and stopper is provided for secure placement.</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">Single pane glass used in the top and front gives clear visibility of the product.</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">Sliding glass door installed on aluminium profile holder. The doors slide very smoothly.</span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-border">
                      <span className="text-sm text-muted-foreground font-light">The glass door glides effortlessly on an aluminium profile holder, ensuring smooth operation.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 rounded-[3rem] p-1 border border-border">
                 <div className="h-full w-full flex items-center justify-center p-12">
                    <Image
                      src="/products/Display Cabinets/Confectionery/stellar.png"
                      alt="Stellar Design"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><Layout /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">The material is fundamental for every planner or designer.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><CheckCircle2 /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">AISI 304 food grade stainless steel with with matte finish.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><Settings2 /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">Front decorative panel and the display top material is customisable on request.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><Maximize /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">The unit top features corian.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><Layers /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">The glass beading and rack stopper material is customizable on request.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <div className="h-10 w-10 text-primary mb-6"><CheckCircle2 /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">The glass rack support and work top are constructed from SS304 stainless steel.</p>
              </div>
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
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Light is essential for a proper display of products: which is why Williams integrated an innovative indirect lighting system with LEDs, seamlessly incorperated with the display.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Settings2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Electronic digital controller of Italian make is used for precise temperature control to ensure preservation of food.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">The system is equipped with an exclusive ON/OFF power switch for easy operation and ON/OFF switch for LED.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Confectionery/stellar.png"
                    alt="Stellar Lighting"
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
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">The system is sustainable, by using zero ODP refrigerants.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Layout className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Optimum humidity enhances the perfect preservation of the product.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Durable and energy efficient European make compressor.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">The thermodynamics of the cabinet ensure the uniform temperature on all shelves.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Auto defrost and auto drain removal system for hassle free maintenance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Maximize className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">High-contrast product presentation. Easily removable air grilling compatible refrigeration system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">For heated model, heater runs underneath the racks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase">Need a Help?</h2>
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
