
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

export default function SkylerProductPage() {
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
            <h1 className="product-hero-title">Skyler</h1>
            
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
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Continuous Display Mastery</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Experience the pinnacle of display excellence with our premium product. Indulge in the finest flavors, carefully crafted for those who appreciate the art of exceptional taste. Our premium product showcases a blend of quality, innovation, and tradition, offering a true experience.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Confectionery/skyler.png"
                  alt="Skyler Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design & Glass Section */}
        <section id="design" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
                    <Settings2 className="text-primary" /> Design
                  </h3>
                  <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                    <p className="text-muted-foreground">
                      Anti-Skid legs are provided.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
                    <Box className="text-primary" /> Glass structure
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-xl border border-border">
                        <span className="text-sm text-muted-foreground">The quality display relies on the perfect transparency and minimalist design of the showcase.</span>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-border">
                        <span className="text-sm text-muted-foreground">Mechanically operated sliding doors provided for easy loading of the food items.</span>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-border">
                        <span className="text-sm text-muted-foreground">Single pane glass used in the top and front gives clear visibility of the product.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 rounded-[3rem] p-1 border border-border">
                 <div className="h-full w-full flex items-center justify-center p-12">
                    <Image
                      src="/products/Display Cabinets/Confectionery/skyler.png"
                      alt="Skyler Design"
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
                <Layout className="h-10 w-10 text-primary mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The material is fundamental for every planner or designer.
                </p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <Layers className="h-10 w-10 text-primary mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AISI 304 food grade stainless steel with with matte finish.
                </p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <Settings2 className="h-10 w-10 text-primary mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Front Decorative panel and the top display material is Corian / Marble customizable on request.
                </p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border hover:shadow-hover transition-all">
                <Layout className="h-10 w-10 text-primary mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Easy opening handles are provided for the rear sliding door.
                </p>
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
                      <Settings2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Electronic digital controller of William make is used for precise control and display of the temperature of the food items.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Exclusive ON/OFF power switch is provided in the system. Also, ON/OFF switch for LED is given.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Novel design of extrusion where LED strips are located at the top with optional white/neutral white colours.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Lighting is crucial for effectively showcasing products, which is why Williams opted to incorporate an innovative indirect lighting system featuring no-spot LED strips seamlessly integrated into the display.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Confectionery/skyler.png"
                    alt="Skyler Lighting"
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
                  <p className="text-sm text-muted-foreground leading-relaxed">The cabinet’s thermodynamics maintain a uniform temperature, while its electronic fans offer adjustable speeds and operate quietly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Auto defrost system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Auto drain removal system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">The product presentation features high contrast for enhanced visibility. The refrigeration system includes easily removable air grills for compatibility.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">The system is sustainable that zero ODP refrigerants are used.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Ideal humidity levels contribute to the optimal preservation of the product.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Settings2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Efficient, durable and energy efficient European make compressor.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">The refrigeration system is designed in such a way that the equipment can be used to display for both Pastry and Chocolate products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 uppercase">Need Help?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 font-light">Write to us now</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
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
