
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Settings2, 
  CheckCircle2, 
  Snowflake, 
  Award, 
  ShieldCheck, 
  Zap, 
  Layout,
  Mail,
  Maximize,
  Layers,
  ThermometerSun,
  Flame,
  CloudFog,
  Box
} from 'lucide-react';

export default function DropInPage() {
  const sections = [
    { id: 'standard', label: 'Standard Features', icon: <Settings2 className="h-4 w-4" /> },
    { id: 'key', label: 'Key Features', icon: <CheckCircle2 className="h-4 w-4" /> },
    { id: 'performance', label: 'Performance & Quality', icon: <Award className="h-4 w-4" /> },
    { id: 'energy', label: 'Sustainability', icon: <Zap className="h-4 w-4" /> },
  ];

  const commonFeatures = [
    { text: "23℃ Ambient", icon: <ThermometerSun className="h-6 w-6 text-primary mb-3" /> },
    { text: "Hermetic Compressor", icon: <Settings2 className="h-6 w-6 text-primary mb-3" /> },
    { text: "Static Cooling System", icon: <Snowflake className="h-6 w-6 text-primary mb-3" /> },
    { text: "Defrosting by Heating Element", icon: <Flame className="h-6 w-6 text-primary mb-3" /> },
    { text: "Evaportated by Hot Gas", icon: <CloudFog className="h-6 w-6 text-primary mb-3" /> },
    { text: "R134a / R404a", icon: <Snowflake className="h-6 w-6 text-primary mb-3" /> },
  ];

  const featureCards = [
    { 
      image: "/products/Commerical Refrigeration/Drop in/Dropin-Features-4.jpg", 
      title: "Mounting Provision", 
      desc: "Designed to mount on the counter top tables" 
    },
    { 
      image: "/products/Commerical Refrigeration/Drop in/Dropin-Features-5.jpg", 
      title: "Rotatable Condensing Unit", 
      desc: "Condensing unit is rotatable which helps in positioiivning of the equipment according to the available space" 
    },
    { 
      image: "/products/Commerical Refrigeration/Drop in/Dropin-Features-6.jpg", 
      title: "Drain Valve", 
      desc: "Drain valve is provided for effective cleaning of the equipment." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Product Hero Banner */}
        <section className="relative min-h-[450px] md:h-auto md:min-h-[450px] bg-primary text-background overflow-hidden flex flex-col items-center justify-center py-12 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8">
              <Link href="/products/commercial-refrigeration"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection</Link>
            </Button>
            <h1 className="product-hero-title">Drop in</h1>
            
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

        {/* Standard Features */}
        <section id="standard" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-headline font-bold mb-12 text-center">Standard Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Easy to use microprocessor control with digital display for easy visual reference.",
                "Stainless steel interior & exterior finish.",
                "Static cooling performs noiseless operation.",
                "Efficient, durable and energy efficient compressor.",
                "Designed and engineered to operate up to 23°C ambient."
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-background rounded-2xl border border-border">
                  <Settings2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key & Common Features */}
        <section id="key" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-8">Key Features</h2>
                <div className="space-y-4">
                  {[
                    "AISI 304 food grade stainless steel is used.",
                    "Static cooling refrigeration system enables noiseless operation.",
                    "60mm thick low density Polyurethane foam is used for thermal insulation.",
                    "Environmental friendly CFC free refrigerant (R134a or R404A)"
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-headline font-bold mb-8">Common Features</h2>
                <div className="grid grid-cols-2 gap-4">
                  {commonFeatures.map((item, idx) => (
                    <div key={idx} className="p-6 bg-white rounded-xl border border-border text-center flex flex-col items-center justify-center hover:shadow-soft transition-all duration-300 group">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-foreground leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance, Reliability and Quality */}
        <section id="performance" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold mb-12">Performance, Reliability and Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 bg-background rounded-3xl border border-border group hover:shadow-hover transition-all">
                <Maximize className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">Fibre optic laser is used in manufacturing, which provides more accurate and precise joints for improved product quality, performance and safety.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border group hover:shadow-hover transition-all">
                <Layers className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">The doors are held using reinforced 3 mm stainless hinges at the top and bottom for added durability and to eliminate the risk of door sag (tested to standard ISO/FDIS 22041).</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border group hover:shadow-hover transition-all">
                <Settings2 className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">Self closing doors help to reduce the cooling loss due to infiltration.</p>
              </div>
              <div className="p-10 bg-background rounded-3xl border border-border group hover:shadow-hover transition-all">
                <Layout className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">Anti tilt heavy duty racking system is provided, with each shelf capable of holding 40kg.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency and Sustainability */}
        <section id="energy" className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center text-white">Energy Efficiency and Sustainability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <Zap className="h-10 w-10 text-white" />
                <p className="text-white/80 leading-relaxed font-light">High thermal resistive Polyurethane foam is used which has high resistance to heat transfer increasing the energy efficiency, also lasts for longer period of time.</p>
              </div>
              <div className="space-y-4">
                <CheckCircle2 className="h-10 w-10 text-white" />
                <p className="text-white/80 leading-relaxed font-light">The self closing door in-turn increases the energy efficiency, low cooling loss equals to low power.</p>
              </div>
              <div className="space-y-4">
                <Snowflake className="h-10 w-10 text-white" />
                <p className="text-white/80 leading-relaxed font-light">The system is sustainable that natural, low GWP and zero ODP refrigerant is used.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section id="value" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-headline font-bold mb-8">Value</h2>
            <div className="max-w-3xl mx-auto p-10 bg-secondary/10 rounded-[2.5rem] border border-border">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Food grade high quality AISI 304 Stainless Steel is used with the finish suitable for handling food and beverages.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards.map((card, idx) => (
                <Card key={idx} className="overflow-hidden rounded-[2rem] bg-white shadow-soft border border-border">
                  <div className="relative h-64 w-full bg-secondary/10 flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
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
