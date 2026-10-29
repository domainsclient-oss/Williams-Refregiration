
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

export default function ScenicPrimaProductPage() {
  const sections = [
    { id: 'overview', label: 'Overview', icon: <Layout className="h-4 w-4" /> },
    { id: 'design', label: 'Design & Glass', icon: <Settings2 className="h-4 w-4" /> },
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
              <Link href="/products/display-cabinets/ice-cream"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection</Link>
            </Button>
            <h1 className="product-hero-title">Scenic Prima</h1>
            
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
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Where innovation meets</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>
                    Vertical design inspired by contemporary architecture in terms of aesthetics and functionality. The Scenic Prima refrigerated display in glass is not only optimized the space but also enhances the food and beverages (F&B) venue.
                  </p>
                  <p>
                    Williams refrigerated cabinets undergo extensive testing in environmental laboratories to ensure consistent core product temperatures. Our products are engineered to reduce operational costs.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Ice Cream/Scenic-Prima.png"
                  alt="Scenic Prima Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design & Glass Structure Combined Section */}
        <section id="design" className="py-24 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Design Column */}
              <div className="space-y-12">
                <h3 className="text-3xl font-headline font-bold flex items-center gap-3 text-foreground">
                  <Settings2 className="text-primary" /> Design
                </h3>
                <div className="space-y-6">
                  <div className="p-8 bg-white rounded-3xl border border-border shadow-soft hover:shadow-hover transition-all">
                    <p className="text-muted-foreground leading-relaxed font-light">A drain aperture has been incorporated to facilitate the expeditions cleansing of the system, thereby enhancing its maintenance accessibility.</p>
                  </div>
                  <div className="p-8 bg-white rounded-3xl border border-border shadow-soft hover:shadow-hover transition-all">
                    <p className="text-muted-foreground leading-relaxed font-light">Heaters have been strategically installed surrounding the glass to prevent the formation of condensation.</p>
                  </div>
                </div>
              </div>

              {/* Glass Structure Column */}
              <div className="space-y-12">
                <h3 className="text-3xl font-headline font-bold flex items-center gap-3 text-foreground">
                  <Box className="text-primary" /> Glass structure
                </h3>
                <div className="p-10 bg-white rounded-3xl border border-border flex items-center gap-6 group hover:shadow-hover transition-all h-fit">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Truck className="h-8 w-8" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light">Sturdy wheels have been furnished to facilitate the smooth relocation of the system, thereby optimizing its mobility.</p>
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
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all group">
                <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform"><Layout /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">The material is fundamental for every planner or designer.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all group">
                <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform"><Maximize /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">Rack glasses are supported by SS304 standoff screws.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all group">
                <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform"><Thermometer /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">Vacuumized three pane glasses are used which preserves the cooling in the system. Anti-condensation glass on all sides.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all group">
                <div className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform"><CheckCircle2 /></div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">AISI 304 food grade stainless steel with with matte finish.</p>
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
                      <p className="text-white/80 text-sm font-light leading-relaxed">Light is essential for a proper display of products, this is why Williams chose to install an innovative indirect lighting system with LEDs, perfectly integrated with the display.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Settings2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">An Italian made electronic digital controller ensures precise temperature control and display for food items.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Ice Cream/Scenic-Prima.png"
                    alt="Scenic Prima Lighting"
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
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Automatic defrost ensures the evaporator working to its optimum performance.</p>
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
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">AISI 304 food grade stainless steel with with matte finish.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Balanced, forced air refrigeration system enables rapid product pull down and even temperature throughout. (for cold model only)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase">Need Help?</h2>
            <p className="text-xl opacity-90 mb-10 font-light">Write to us now</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <a href="mailto:info@williamsrefrigeration.in" className="flex items-center gap-3 text-base md:text-lg hover:underline transition-all">
                <Mail className="h-5 w-5" /> info@williamsrefrigeration.in
              </a>
              <a href="mailto:sales@williamsrefrigeration.in" className="flex items-center gap-3 text-base md:text-lg hover:underline transition-all">
                <Mail className="h-5 w-5" /> sales@williamsrefrigeration.in
              </a>
            </div>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 md:px-12 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
