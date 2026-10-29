
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
  Wind,
  Flame,
  CloudFog,
  Thermometer
} from 'lucide-react';

export default function ThawingCabinetsPage() {
  const sections = [
    { id: 'standard', label: 'Standard Features', icon: <Settings2 className="h-4 w-4" /> },
    { id: 'key', label: 'Key Features', icon: <CheckCircle2 className="h-4 w-4" /> },
    { id: 'hygiene', label: 'Hygiene & Safety', icon: <ShieldCheck className="h-4 w-4" /> },
    { id: 'value', label: 'Value', icon: <Award className="h-4 w-4" /> },
  ];

  const commonFeatures = [
    { text: "43℃ Ambient", icon: <ThermometerSun className="h-6 w-6 text-primary mb-3" /> },
    { text: "Hermetic Compressor", icon: <Settings2 className="h-6 w-6 text-primary mb-3" /> },
    { text: "Forced Air Circulation", icon: <Wind className="h-6 w-6 text-primary mb-3" /> },
    { text: "Defrosting by Heating Element", icon: <Flame className="h-6 w-6 text-primary mb-3" /> },
    { text: "Evaportated by Hot Gas", icon: <CloudFog className="h-6 w-6 text-primary mb-3" /> },
    { text: "R134a", icon: <Snowflake className="h-6 w-6 text-primary mb-3" /> },
  ];

  const featureCards = [
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-1.jpg", 
      title: "Product sensor probe", 
      desc: "Used temperature to sense the product" 
    },
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-2.jpg", 
      title: "Adjustable Racks", 
      desc: "The racks are adjustable as per the requirement." 
    },
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-3.jpg", 
      title: "Digital Controller", 
      desc: "Digital controller of Italian make is used for precise control and display of the temperature of the food items." 
    },
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-4.jpg", 
      title: "Removable gaskets", 
      desc: "Removable and washable gasket in the" 
    },
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-5.jpg", 
      title: "Self-Closing door", 
      desc: "Prevents the loss of cooling from the system, also helps when both the hands are loaded." 
    },
    { 
      image: "/products/Commerical Refrigeration/Thawing Cabinets/thawing-feature-6.jpg", 
      title: "Cylindrical Lock", 
      desc: "The lock facilitates safety and control over the stock." 
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
            <h1 className="product-hero-title">Thawing Cabinets</h1>
            
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
                "Top ventilation provided in this system is suitable for enclosed areas.",
                "Door locks provide added security.",
                "High-quality washable magnetic door gasket.",
                "Easy to use microprocessor control with digital display for easy visual reference.",
                "Stainless steel interior & exterior finish.",
                "The doors are easy to open and are also self-closing.",
                "Air ducting for two sections or above ensures the cool air is spread to everywhere inside the counter.",
                "150 mm adjustable legs to ensure stability on an uneven floor.",
                "Efficient, durable and energy efficient compressor.",
                "Automatic defrost ensures the evaporator working to its optimum performance.",
                "Designed and engineered to operate up to 43°C ambient."
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-background rounded-2xl border border-border">
                  <Settings2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-secondary/10 rounded-3xl border border-border">
              <h3 className="text-xl font-bold mb-6">Optional Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Models with caster wheels are available.
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Adjustable racking system allows flexible storage.
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Accommodates GN 1/1, 1/2.
                </li>
              </ul>
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
                    "Balanced, forced air refrigeration system enables rapid product pull down and even temperature throughout.",
                    "60mm low density Polyurethane foam is used for thermal insulation.",
                    "Anti condensation door mullion heaters.",
                    "Environmental friendly CFC free refrigerant (R134a or R404A)."
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

        {/* Hygiene & Safety */}
        <section id="hygiene" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline font-bold mb-12 text-center">Hygiene & Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
              <div className="flex gap-6 p-8 bg-background rounded-3xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Maximize className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Flush handle</h4>
                  <p className="text-muted-foreground text-sm">Flush handle in the door which is easy for opening and cleaning.</p>
                </div>
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
                <p className="text-white/80 leading-relaxed font-light">The self closing door in-turn increases the energy efficiency, low cooling loss equals to low power consumption.</p>
              </div>
              <div className="space-y-4">
                <Snowflake className="h-10 w-10 text-white" />
                <p className="text-white/80 leading-relaxed font-light">The system is sustainable that zero ODP refrigerants are used.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section id="value" className="py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-headline font-bold mb-8">Value</h2>
            <div className="max-w-3xl mx-auto p-10 bg-white rounded-[2.5rem] border border-border shadow-soft">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Food grade high quality AISI 304 Stainless Steel is used with the finish suitable for handling food and beverages.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards.map((card, idx) => (
                <Card key={idx} className="overflow-hidden rounded-[2rem] bg-background shadow-soft border border-border">
                  <div className="relative h-64 w-full bg-secondary/10 flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
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
