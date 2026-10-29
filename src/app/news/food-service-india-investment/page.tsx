import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2, Tag, TrendingUp, Landmark } from 'lucide-react';

export default function FoodServiceIndiaArticlePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-white">
        {/* Article Header */}
        <header className="py-16 md:py-24 bg-primary text-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="text-background/60 hover:text-background hover:bg-white/10 mb-8 -ml-4">
              <Link href="/news"><ArrowLeft className="mr-2 h-4 w-4" /> Back to News</Link>
            </Button>
            <div className="flex items-center gap-4 text-accent text-sm font-bold uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> February 28, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-8">
              Food Service India to invest up to ₹100 crore to cater to hotel/restaurant sector demand
            </h1>
            <p className="text-xl text-background/80 font-light leading-relaxed">
              Targeting significant growth by 2028 to meet surging demand in the HORECA segment and streamline hospitality operations.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 mb-16">
          <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image
              src="/expo-3.jpeg"
              alt="Food Service India Investment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="prose prose-lg max-w-none text-foreground font-light leading-relaxed space-y-8">
            <p>
              Food Service India Pvt Ltd. (FSIPL), which caters to the ready-to-cook and processed food sourcing requirements of the HORECA (Hotel, Restaurant, Catering) industry, has announced to invest upto ₹100 crore by 2028 to meet growing demand from this segment to deal with food price inflation and labour shortage, its Chairman & Managing Director Ajay Mariwala said in an interview.
            </p>

            <blockquote className="text-2xl font-headline font-bold text-primary border-l-4 border-primary pl-8 py-4 my-12 italic">
              "FSIPL has been at the forefront of providing innovative and ready-to-cook solutions to the HORECA industry, driving growth for our customers."
              <footer className="text-sm font-body font-bold text-muted-foreground mt-4 non-italic">— Ajay Mariwala, Chairman & Managing Director</footer>
            </blockquote>

            <p>
              “We are helping them to manage inflation and to address the issue the less availability of labour. Also post Covid all institutions (institutional buyers) have decided to simplify their operations by sourcing processed and ready-to-cook products,” he said.
            </p>

            <p>
              “The ready-to-cook segment is witnessing a surge in demand as restaurants, cloud kitchens, and food chains are seeking solutions to streamline operations while enhancing menu creativity,” he added.
            </p>

            <div className="bg-secondary/10 p-10 rounded-[2rem] border border-border my-12">
              <h3 className="text-2xl font-headline font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="text-primary h-6 w-6" /> Market Projections
              </h3>
              <p className="mb-0">
                The National Restaurant Association of India (NRAI) recently projected India’s food service market to reach ₹7.7 lakh crore by 2028, growing at a CAGR of 8.1%. However, FSIPL is growing at a much higher rate of 33% CAGR, eyeing a growth of 35% as the sector continues to thrive.
              </p>
            </div>

            <p>
              In line with this, FSIPL is targeting a revenue of ₹310 crore in FY25 as compared with ₹240 crore in FY24. From now till 2028, the company plans to increase its production by adding more lines at existing facilities and to set up new lines.
            </p>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Strategic Expansion</h2>
            <p>
              It has decided to increase its premium offerings as people are expected to consume more high-end food in line with their rise in income. “With our expansion plans, we aim to lead India’s food service transformation and help businesses to grow,” he said.
            </p>

            <p>
              The company’s product portfolio spans six categories: seasonings, spices, gravies and sauces, beverage mixes, sweet goods, and single-ingredient products under the FX label. The FX products include canned fruits, vegetables, pasta, and breadcrumbs, sourced from a network of over 30 factories across India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-foreground text-background p-8 rounded-3xl">
                <h4 className="font-bold text-xl mb-4 text-accent">Customer Reach</h4>
                <p className="text-sm opacity-80">
                  Meeting the unique culinary needs of over 40,000 customers, ranging from leading hotel chains and cloud kitchens to top 300 hospitality brands across India.
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-3xl">
                <h4 className="font-bold text-xl mb-4">Scale by 2028</h4>
                <p className="text-sm opacity-90">
                  Aiming to scale from 550 cities to about 3,500 cities and towns by 2028, targeting a milestone revenue of ₹1,000 crore.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Beyond Ingredients</h2>
            <p>
              Besides supplying ingredients, the company helps its customers in development of menu, streamlining processes, staff training and backend operations.
            </p>

            <p>
              “Our main focus will be to continue to expand our product range. The food industry that caters to the institutional segment is growing significantly because of travel, and work from home has stopped. So people are eating out more and ordering more,” Mr Mariwala said.
            </p>

            <p>
              “There is a massive opportunity now in tier 2, 3 and 4 towns, where the aspirations are growing for people to taste newer foods,” he added.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-border flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-primary" />
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">HORECA</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Investment</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Food Service</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share Article
            </Button>
          </div>
        </article>

        {/* CTA */}
        <section className="py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Equip Your Business for Growth</h2>
            <p className="text-lg text-muted-foreground mb-10 font-light">
              As the industry invests in ready-to-cook solutions, ensure your refrigeration is up to the task of preserving quality at scale.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Inquire for Large Scale Projects</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
