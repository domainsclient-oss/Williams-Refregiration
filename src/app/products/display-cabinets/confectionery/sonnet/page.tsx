
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
  Snowflake, 
  Settings2,
  CheckCircle2,
  Mail,
  Box,
  Maximize,
  Thermometer,
  Zap
} from 'lucide-react';

export default function SonnetProductPage() {
  const sections = [
    { id: 'overview', label: 'Overview', icon: <Layout className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Settings2 className="h-4 w-4" /> },
    { id: 'refrigeration', label: 'Refrigeration Fetaures', icon: <Snowflake className="h-4 w-4" /> },
    { id: 'style', label: 'Style', icon: <Layers className="h-4 w-4" /> },
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
            <h1 className="product-hero-title">Sonnet</h1>
            
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
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">Innovative design and technology</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                  <p>
                    The Jewellery refrigerated displays have coplanar display area and they can be open on operator side through a pull-out drawer with soft closing.
                  </p>
                  <p>
                    The Jewellery display cases have been redesigned by introducing new stylistic and technologic concepts: the pullout drawer occupies all the length of the display case (from side to side) and it can be customized in different finishes.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full bg-secondary/20 rounded-[3rem] p-12 overflow-hidden border border-border">
                <Image
                  src="/products/Display Cabinets/Confectionery/sonnet.png"
                  alt="Sonnet Overview"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
                    <Settings2 className="text-primary" /> Features
                  </h3>
                  <div className="space-y-4">
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">Soft - Closing drawers.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">Dimensions can be customized on request.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
                      <p className="text-muted-foreground">Possibility to have two or more showcases joined together with the same aesthetics.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 rounded-[3rem] p-1 border border-border">
                 <div className="h-full w-full flex items-center justify-center p-12">
                    <Image
                      src="/products/Display Cabinets/Confectionery/sonnet.png"
                      alt="Sonnet Features"
                      width={600}
                      height={400}
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
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Refrigeration Fetaures</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">High efficiency ventilated refrigeration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Automatic defrost.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Evaporator condensate water evaporation by heating. Automatic defrost.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Thermometer className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Humidity control for chocolate. (Optional)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Style Section */}
        <section id="style" className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-headline font-bold mb-8 text-white">Style</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Box className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">The profiles and the hardware were designed with a unique and minimalist style, the majority of these showcases are made of steel, the standard finish is polished stainless steel.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Snowflake className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Refrigeration is equalized on all display levels where the air flow doesnot affect the product. This refrigeration system has a high humidity level which favours correct conservation of the displayed products.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Refrigerated showcases for pastry (+4°C) with built-in compressor have zero ODP gas with automatic defrost and heated pan for water condensation evaporation.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Maximize className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">Chocolate display cases are designed to control the humidity, ensuring the best chocolate conservation conditions. Refrigeration is ventilated with air supply and return is flush with the display area.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white/10 rounded-[3rem] p-8 md:p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-auto lg:aspect-video rounded-2xl overflow-hidden">
                   <Image
                    src="/products/Display Cabinets/Confectionery/sonnet.png"
                    alt="Sonnet Style"
                    fill
                    className="object-contain"
                  />
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
