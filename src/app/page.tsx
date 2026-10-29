'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  Award, 
  ShieldCheck, 
  Lightbulb, 
  Headset, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe, 
  Camera,
  CheckCircle2
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const growthMapImage = PlaceHolderImages.find(img => img.id === 'growth-map');
  const expoBanner = PlaceHolderImages.find(img => img.id === 'expo-banner');
  
  const slides = [
    {
      id: 'hero-slide-1',
      heading: 'Where Innovation Meets Quality Preservation',
      subHeading: 'Sustainable, High-Performance Cooling Solutions',
      image: { imageUrl: '/slide1.jpeg', imageHint: 'industrial refrigeration' },
    },
    {
      id: 'hero-slide-2',
      heading: 'Efficient Cooling, Sustainable Future',
      subHeading: 'Custom-built Refrigeration & Display Solutions',
      image: { imageUrl: '/slide2.jpeg', imageHint: 'cooling solutions' },
    }
  ];

  const stats = [
    { value: '1000+', label: 'Trusted Clients' },
    { value: '3', label: 'Manufacturing Facilities' },
    { value: '27', label: 'Years of Experience' },
    { value: 'ISO', label: 'Certified Quality' },
  ];

  const features = [
    {
      title: 'Unmatched Quality',
      desc: 'Built with premium materials and rigorous testing to endure the toughest commercial environments.',
      icon: <Award className="h-7 w-7" />,
    },
    {
      title: 'Absolute Reliability',
      desc: 'Consistent temperature control ensuring your products remain safe and perfectly preserved.',
      icon: <ShieldCheck className="h-7 w-7" />,
    },
    {
      title: 'Continuous Innovation',
      desc: 'Integrating smart technology and energy-efficient designs to lower running costs.',
      icon: <Lightbulb className="h-7 w-7" />,
    },
    {
      title: 'Dedicated Service',
      desc: 'Global support network providing rapid response maintenance and expert technical advice.',
      icon: <Headset className="h-7 w-7" />,
    },
  ];

  const sectors = [
    { id: 'sector-pastry', title: 'Pastry & Praline', desc: 'Precision humidity and temperature control for delicate creations.' },
    { id: 'sector-gelato', title: 'Gelato', desc: 'Perfect consistency maintenance for artisanal ice creams.' },
    { id: 'sector-foodservice', title: 'Food Service', desc: 'Heavy-duty performance for bustling commercial kitchens.' },
    { id: 'sector-bar', title: 'Bar & Beverage', desc: 'Chilling and stylish display for front-of-house.' },
  ];

  const products = [
    { id: 'product-cabinet', title: 'Upright Cabinets' },
    { id: 'product-counter', title: 'Counters' },
    { id: 'product-chiller', title: 'Blast Chillers' },
    { id: 'product-display', title: 'Display Cases' },
  ];

  const newLaunches = [
    { title: 'Banquet Trolley', image: '/products/new-launches/open-door.png' },
    { title: 'Senneca', image: '/products/new-launches/scennca.png' },
    { title: 'Sherin', image: '/products/new-launches/Sherin.webp' },
    { title: 'Sheryl', image: '/products/new-launches/sheryl.png' },
    { title: 'Sieara', image: '/products/new-launches/sieara.png' },
    { title: 'Sheryl Tower', image: '/products/new-launches/tower.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section Carousel */}
        <section id="hero" className="relative h-[70vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
          <Carousel 
            opts={{ loop: true, align: "start" }} 
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {slides.map((slide) => (
                <CarouselItem key={slide.id} className="relative h-[70vh] md:h-[85vh] min-h-[500px] md:min-h-[600px]">
                  <div className="absolute inset-0 z-0">
                    {slide.image && (
                      <Image
                        src={slide.image.imageUrl}
                        alt={slide.heading}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="max-w-3xl">
                      <h1 className="text-4xl md:text-7xl font-semibold text-background leading-tight mb-6 font-headline animate-in fade-in slide-in-from-bottom-6 duration-1000 uppercase">
                        {slide.heading}
                      </h1>
                      <p className="text-base md:text-xl text-background/80 mb-8 font-light max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {slide.subHeading}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <Link href="/products">
                          <Button size="lg" className="rounded-full px-10 h-12 md:h-14 text-base md:text-lg shadow-lg hover:shadow-xl bg-primary text-primary-foreground w-full sm:w-auto">
                            View Products <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" size="lg" className="rounded-full px-10 h-12 md:h-14 text-base md:text-lg border-2 text-background border-background bg-transparent hover:bg-background hover:text-foreground w-full sm:w-auto">
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-auto bottom-8 md:bottom-12 left-auto right-20 md:right-28 translate-y-0 z-[60] h-10 w-10 md:h-12 md:w-12 text-background hover:text-foreground border-background/20 hover:bg-background/20 bg-foreground/20" />
            <CarouselNext className="top-auto bottom-8 md:bottom-12 left-auto right-8 md:right-12 translate-y-0 z-[60] h-10 w-10 md:h-12 md:w-12 text-background hover:text-foreground border-background/20 hover:bg-background/20 bg-foreground/20" />
          </Carousel>
        </section>

        {/* Stats Bar */}
        <section className="relative z-20 -mt-8 md:-mt-10 mx-4 sm:mx-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-soft border border-border py-6 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center divide-x divide-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="px-2 md:px-4">
                  <p className="text-2xl md:text-4xl font-headline font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-[10px] md:text-sm text-muted-foreground font-medium uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[550px] w-full group">
                  <Image
                    src="/Home-About.jpg"
                    alt="About Williams"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-6 md:bottom-4 md:left-8 bg-card p-4 md:p-6 rounded-2xl shadow-lg max-w-[200px] md:max-w-xs border border-border">
                    <p className="text-primary font-bold text-xl md:text-2xl mb-1">Pioneering</p>
                    <p className="text-muted-foreground text-[10px] md:text-sm">Cold chain technology since 1997</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">About Williams</span>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6 leading-tight">Setting the Standard in Commercial Refrigeration</h2>
                <div className="space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Williams Refrigeration is India's premier manufacturer of professional refrigeration solutions. Combining global engineering standards with deep local expertise, we deliver innovative products tailored to the unique demands of the Indian food service, bakery, Indian sweets and retail sectors.
                  </p>
                  <p>
                    Our commitment to high-quality manufacturing and energy efficiency drives our design process, ensuring our products perform flawlessly in the most demanding Indian climates while significantly reducing operational costs for your business.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/about" className="text-primary font-semibold text-base md:text-lg group flex items-center hover:no-underline">
                    Discover Our Heritage 
                    <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Launches Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Upcoming</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">New Launches</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {newLaunches.map((product, idx) => (
                <div key={idx} className="bg-card rounded-3xl p-6 md:p-8 text-center hover:shadow-soft transition-all group cursor-default border border-border">
                  <div className="h-56 md:h-80 mb-6 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground transition-colors">{product.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expo Banner Section */}
        <section className="w-full bg-background pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="https://events.williamsrefrigeration.co.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl bg-white border border-border group"
            >
              <Image
                src="/Event_Expo.webp"
                alt="HORECA & BAKERS EXPO 2026 Banner"
                width={1920}
                height={600}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.01]"
                priority
                unoptimized={true}
              />
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Our Advantage</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Why Choose Williams</h2>
              <p className="text-muted-foreground text-base md:text-lg">We engineer excellence into every unit, providing peace of mind for your critical operations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-background/50 p-6 md:p-8 rounded-3xl hover:shadow-hover transition-all duration-300 group border border-transparent hover:border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey of Growth Map Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Our Journey of Growth</h2>
            </div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border bg-white p-2 md:p-4">
              {growthMapImage && (
                <div className="relative w-full h-[200px] md:h-[400px]">
                  <Image
                    src={growthMapImage.imageUrl}
                    alt={growthMapImage.description}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Event Participation Highlights Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                <Camera className="h-3 w-3" /> Event Highlights
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6 leading-tight">
                We participated in HoReCa and Bakers Expo in Coimbatore
              </h2>
              
              <div className="max-w-4xl mx-auto mt-8">
                <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                  We were proud to participate in the HoReCa & Bakers Expo, Coimbatore, one of the leading trade exhibitions for the hospitality, food service, bakery, and café industries. The event provided an excellent platform to showcase our products and solutions, connect with industry professionals, and engage with potential customers and business partners. We thank everyone who visited our stall and look forward to building lasting relationships while continuing to support the growth and innovation of the HoReCa and bakery sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Showcase */}
        <section id="sectors" className="py-16 md:py-24 bg-[#5378B3] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-white font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Industries We Empower</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-white">Specialized Solutions</h2>
                <p className="text-white text-base md:text-lg opacity-90">Cooling technology tailored for unique industrial demands.</p>
              </div>
              <Link href="/products">
                <Button variant="outline" className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-primary h-12 px-8">
                  View All Sectors
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector) => {
                const sectorImg = PlaceHolderImages.find(img => img.id === sector.id);
                return (
                  <div key={sector.id} className="group relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] cursor-pointer shadow-xl">
                    {sectorImg && (
                      <Image
                        src={sectorImg.imageUrl}
                        alt={sectorImg.description}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                      <h3 className="text-xl md:text-2xl font-headline font-bold mb-2 text-white group-hover:text-white transition-colors">{sector.title}</h3>
                      <p className="text-white/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">{sector.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section id="products" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Our Catalog</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Featured Products</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => {
                const prodImg = PlaceHolderImages.find(img => img.id === product.id);
                return (
                  <div key={product.id} className="bg-card rounded-3xl p-6 md:p-8 text-center hover:shadow-soft transition-all group cursor-default border border-border">
                    <div className="h-40 md:h-56 mb-6 flex items-center justify-center overflow-hidden">
                      {prodImg && (
                        <Image
                          src={prodImg.imageUrl}
                          alt={prodImg.description}
                          width={300}
                          height={300}
                          className="max-h-full max-w-full object-contain transition-transform duration-500"
                        />
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground transition-colors">{product.title}</h3>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 md:mt-16 text-center">
              <Link href="/downloads">
                <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 md:h-14 px-8 md:px-10">
                  <span className="flex items-center text-sm md:text-base">Download Full Catalog <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" /></span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ISO & Trust Section */}
        <section className="py-16 md:py-24 bg-secondary/10 border-y border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Quality Assurance</span>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">Certified Excellence</h2>
                  <div className="prose prose-base md:prose-lg text-muted-foreground font-light leading-relaxed">
                    <p>
                      We are a certified manufacturer. At Williams Refrigeration, quality is of utmost importance. Our products are tested for quality and performance through stringent checks to guarantee product and operational consistency, durability, and energy efficiency. We bring international benchmarks into play and position ourselves as a reliable player in refrigeration solutions.
                    </p>
                    <p>
                      It is ISO-certified; an evidence of excellence, safety, and environmental responsibility. Compliance with ISO standards manifests our continuous improvement, customer satisfaction, and innovation in refrigeration technology.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="relative h-24 md:h-32 w-full max-w-[500px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image 
                      src="/certification.png" 
                      alt="Certifications" 
                      fill 
                      className="object-contain object-left" 
                      priority
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-6 md:-inset-10 bg-primary/5 rounded-full blur-3xl"></div>
                <Card className="relative bg-white shadow-hover border-none p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 md:group-hover:w-40 group-hover:h-32 md:group-hover:h-40"></div>
                  <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-primary mb-6" />
                  <h3 className="text-xl md:text-2xl font-headline font-bold mb-4">Our Quality Promise</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                    Every Williams product undergoes comprehensive testing in our state-of-the-art facilities. From component selection to final assembly, we ensure that every unit exceeds industry standards for performance and longevity.
                  </p>
                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Award className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm md:text-base">ISO Certified</p>
                        <p className="text-[10px] md:text-sm text-muted-foreground">Global Quality Standards</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">Connect With Us</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">Ready to Optimize Your Cooling?</h2>
                <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg font-light">Whether you need a custom quote or have technical questions, our global experts are ready to assist you.</p>
                
                <div className="space-y-8 md:space-y-10">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base md:text-lg">Headquarters</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        #111 ‘C’, KIADB Industrial Area, 1st Phase,<br />
                        Bommasandra, Hosur Main Road,<br />
                        Bangalore - 560099, INDIA.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base md:text-lg">Email Inquiries</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        <a href="mailto:sales@williamsrefrigeration.in" className="hover:text-primary transition-colors">sales@williamsrefrigeration.in</a><br/>
                        <a href="mailto:info@williamsrefrigeration.in" className="hover:text-primary transition-colors">info@williamsrefrigeration.in</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base md:text-lg">Direct Line</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        <a href="tel:+919844013768" className="hover:text-primary transition-colors">+91 9844013768</a> (Sales Office)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-2xl border-none p-8 md:p-12">
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-muted-foreground">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl h-10 md:h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-medium text-muted-foreground">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-xl h-10 md:h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-muted-foreground">Industry/Sector</label>
                    <Input placeholder="e.g. Food Service, Bakery, Medical" className="rounded-xl h-10 md:h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-muted-foreground">Message</label>
                    <Textarea placeholder="How can we assist you with your project?" className="min-h-[120px] md:min-h-[160px] rounded-xl" />
                  </div>
                  <Button className="w-full h-12 md:h-14 text-base md:text-lg rounded-full shadow-lg bg-primary text-primary-foreground">
                    Send Inquiry <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Help CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-2">Need Help?</h2>
              <p className="text-lg md:text-xl opacity-90 font-light">Reach out to our expert team today for tailored cooling solutions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/products">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-12 md:h-14 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all w-full">
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 h-12 md:h-14 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
