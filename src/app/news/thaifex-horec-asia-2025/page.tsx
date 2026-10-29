'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2, Tag, Cpu, Pizza, Globe } from 'lucide-react';

export default function ThaifexArticlePage() {
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> February 10, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-8">
              THAIFEX – HOREC Asia 2025 unveils AI-powered automation and culinary innovations
            </h1>
            <p className="text-xl text-background/80 font-light leading-relaxed">
              Redefining the hospitality sector with the Tech Lounge and the Asian Pizza Show Academy.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 mb-16">
          <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image
              src="/expo-4.jpeg"
              alt="THAIFEX – HOREC Asia 2025"
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
              THAIFEX – HOREC Asia 2025 is set to redefine the hospitality sector once again with the introduction of groundbreaking features such as the Tech Lounge, where AI-powered automation meets hospitality, and the Asian Pizza Show Academy, which spotlights the region’s growing pizza market. Returning this March, the event will offer industry professionals a front-row seat to the innovations that bridge the gap with real-world applications that shape the future of hotels, restaurants, and catering (HoReCa).
            </p>

            <p>
              Southeast Asia’s premier HoReCa trade event, THAIFEX – HOREC Asia 2025, returns from 5–7 March 2025 at IMPACT Muang Thong Thani, Bangkok, Thailand. Featuring 400+ exhibitors from 23 countries/regions, over 20,000 professionals, and the region’s largest buyer programme with over 500 top-tier HoReCa buyers, THAIFEX – HOREC Asia 2025 is a key strategic platform for business-driven innovation, market expansion, and deal-making opportunities.
            </p>

            <p>
              Building on the success of its inaugural 2024 edition, this year’s event expands to meet the growing industry demand for AI-driven automation, digital procurement, and cost-effective food service solutions. The 50 percent increase in pre-scheduled business meetings compared to the previous year underscores its role as a leading platform for partnerships and industry advancement.
            </p>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">New for 2025: Must-attend industry features</h2>
            <p>This year’s edition introduces two major highlights:</p>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Cpu className="h-4 w-4" />
                </div>
                <span><strong>Tech Lounge at THAIFEX – HOREC Academy:</strong> A dedicated space showcasing AI-powered automation, contactless service, and data-driven solutions to enhance business operations.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Pizza className="h-4 w-4" />
                </div>
                <span><strong>Asian Pizza Show Academy:</strong> An interactive highlight featuring expert demonstrations, advanced pizza-making equipment, and premium ingredients, tapping into Southeast Asia’s booming pizza market.</span>
              </li>
            </ul>

            <blockquote className="text-2xl font-headline font-bold text-primary border-l-4 border-primary pl-8 py-4 my-12 italic">
              "AI automation, digital procurement, and sustainability are no longer trends; they are essential strategies for future growth."
              <footer className="text-sm font-body font-bold text-muted-foreground mt-4 non-italic">— Mathias Kuepper, Managing Director, Koelnmesse</footer>
            </blockquote>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Top event highlights for 2025</h2>
            
            <h3 className="text-2xl font-headline font-bold">1. THAIFEX – HOREC Academy & Tech Lounge</h3>
            <p>
              Featuring 50+ industry leaders across 20+ curated talks and panel sessions, THAIFEX – HOREC Academy tackles key industry topics, from Women in Hospitality Leadership to Sustainability with Profitability. Experts from leading hospitality brands will lead discussions on pressing industry shifts.
            </p>
            <p>
              New for 2025, the Tech Lounge is a hub dedicated to AI-powered automation, digital procurement, and financial solutions reshaping hospitality. Attendees will explore hands-on demos and expert-led discussions on Smart Hospitality Tech and Digital-First Procurement.
            </p>

            <h3 className="text-2xl font-headline font-bold">2. THAIFEX – HOREC Xperiential Zone</h3>
            <p>
              This must-visit interactive space presents next-generation hospitality and food service innovations through live demonstrations and guided tours. Attendees can test, evaluate, and discover how they can integrate new solutions into their businesses.
            </p>

            <h3 className="text-2xl font-headline font-bold">3. Asian Pizza Show Academy [NEW for 2025!]</h3>
            <p>
              As Asia’s pizza scene continues to expand, this newly added side event co-organised by Bellavita will bring together a carefully curated selection of suppliers, master pizzaiolos, and the latest pizza-making equipment to Bangkok.
            </p>

            <div className="bg-secondary/10 p-10 rounded-[2rem] border border-border my-12">
              <h4 className="text-xl font-headline font-bold mb-4 flex items-center gap-3">
                <Globe className="text-primary h-6 w-6" /> Strategic Impact
              </h4>
              <p className="mb-0 text-muted-foreground">
                With a 50 percent increase in pre-scheduled business meetings, THAIFEX – HOREC Asia 2025 solidifies its role as the ultimate platform for industry transformation in the Asia-Pacific region.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-primary" />
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Hospitality</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">AI Tech</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Automation</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share Article
            </Button>
          </div>
        </article>

        {/* Related / CTA */}
        <section className="py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Stay Ahead of Industry Trends</h2>
            <p className="text-lg text-muted-foreground mb-10 font-light">
              We integrate the latest innovations showcased at global events into our refrigeration solutions.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Consult an Expert</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
