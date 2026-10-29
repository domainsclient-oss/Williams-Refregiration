import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';

export default function ArticlePage() {
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
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> March 15, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-8">
              Expanding F&B establishments and their impact on refrigeration technology
            </h1>
            <p className="text-xl text-background/80 font-light leading-relaxed">
              The food and beverage industry is seeking significant evolution in response to changing consumer preferences and technological advancements.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 mb-16">
          <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image
              src="/expo-1.jpg"
              alt="Expanding F&B establishments"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="prose prose-lg max-w-none text-foreground font-light leading-relaxed space-y-8">
            <p className="text-xl font-normal text-muted-foreground border-l-4 border-primary pl-6 py-2 italic">
              The global food and beverage industry—including cafés, bakeries, patisseries, sweet shops, ice cream parlours, restaurants offering prepared food, food courts, and office cafeterias—is transforming.
            </p>

            <p>
              This shift is driven by evolving consumer behaviour, technological advancements, and changing lifestyle trends, leading to innovative changes across these sectors, including in refrigeration technology.
            </p>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Market insights</h2>
            <p>
              As of 2023, the market for food and beverage establishments, including cafés and similar outlets, is valued at USD 100 billion. With a projected growth at a CAGR of 6.84 percent, it is set to reach USD 174.9 billion by 2030. 
            </p>
            <p>
              This market, which includes businesses that prepare and serve coffee, tea, baked goods, and light snacks for on-site consumption or takeaway, is not just growing, but thriving. Additionally, there’s a rising trend where establishments traditionally focused on one category (e.g., a bakery) are now expanding to offer a wider array of options, like beverages, ice creams, food options to cater to changing customer demands.
            </p>
            <p>
              These establishments often provide a cosy and inviting environment for customers to socialise, work, or relax. The significant growth in this market is driven by urbanisation, increased disposable incomes, and the growing popularity of specialty foods and artisanal beverages. Urban centres, in particular, see an increased demand for comfortable spaces where people can gather and interact.
            </p>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">India’s food and beverage market</h2>
            <p>
              In India, the food and beverage market, including cafés, bakeries, etc., is estimated to grow from USD 17.54 billion in 2024 to USD 26.17 billion by 2029, reflecting a CAGR of 8.33 percent. This growth is fuelled by factors similar to those of the global market, with an added emphasis on urbanisation, rising disposable incomes, and shifting consumer lifestyles.
            </p>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Key trends shaping the industry</h2>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-2xl">•</span>
                <span><strong>Demand for specialty offerings:</strong> The demand for high-quality specialty coffee, tea, pastries, and artisanal goods is growing rapidly. Consumers are more than ever willing to pay a premium for unique flavours, artisanal brewing methods, and ethically sourced ingredients.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-2xl">•</span>
                <span><strong>Sustainability and eco-friendly practices:</strong> Consumers are becoming more environmentally conscious and prefer establishments that follow sustainable practices – using biodegradable packaging, energy-efficient appliances, and sustainably sourced ingredients.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-2xl">•</span>
                <span><strong>Technology integration:</strong> Technology is not just playing an increasingly important role in food and beverage establishments; it is revolutionising them. From digital payment systems to temperature-controlled displays and automated inventory management, businesses are incorporating technology to enhance the customer experience.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-2xl">•</span>
                <span><strong>Health-conscious offerings:</strong> With a growing focus on health and wellness, establishments are expanding their menu offerings to include healthier options, such as plant-based milk, low-sugar beverages, and organic ingredients.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-2xl">•</span>
                <span><strong>Versatile menus:</strong> Evolution in consumer behaviour drives the need for finding a diverse range of food and drink options within a single establishment. This drives the need for versatile and adaptable refrigeration solutions.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Influence on refrigeration technology</h2>
            <p>
              These trends are significantly influencing refrigeration technology. As food and beverage establishments adapt to meet modern consumer demands, their refrigeration systems must evolve to support these changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-secondary/10 p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg mb-2">Energy Efficiency</h4>
                <p className="text-sm text-muted-foreground">Investing in refrigeration solutions that reduce energy consumption and lower operating costs with variable-speed compressors and LED lighting.</p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg mb-2">Versatile Solutions</h4>
                <p className="text-sm text-muted-foreground">Adopting modular refrigeration systems that offer flexibility in temperature control and adjustable shelving systems.</p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg mb-2">Food Safety & Hygiene</h4>
                <p className="text-sm text-muted-foreground">Advanced systems with precise temperature control and self-cleaning mechanisms to ensure optimal storage conditions.</p>
              </div>
              <div className="bg-secondary/10 p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg mb-2">Customization</h4>
                <p className="text-sm text-muted-foreground">Sleek designs and transparent doors that blend seamlessly with the establishment’s interior décor and brand identity.</p>
              </div>
            </div>

            <h2 className="text-3xl font-headline font-bold text-foreground pt-4">Conclusion</h2>
            <p>
              The food and beverage industry is seeking significant evolution in response to changing consumer preferences and technological advancements. These shifts profoundly impact refrigeration technology, highlighting the need for energy efficiency, versatility, smart technology integration, and customization.
            </p>
            <p>
              Companies like ours are leading this change, offering versatile refrigeration solutions through partnerships with the world’s best. These solutions are designed to adapt to the industry’s evolving needs.
            </p>
            <p>
              Additionally, the growing focus on sustainability within the industry is influencing the transition of displays to eco-friendly refrigerants like <span className="text-primary font-bold">R290</span>, implementing energy-efficient lighting, and extending the lifespan of displays through comprehensive maintenance.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-border flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-primary" />
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Refrigeration</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">F&B Industry</span>
                <span className="text-xs font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-full">Sustainability</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share Article
            </Button>
          </div>
        </article>

        {/* Related / CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Partner with Williams Refrigeration</h2>
            <p className="text-lg opacity-90 mb-10 font-light">
              We provide the cutting-edge technology your F&B establishment needs to thrive in a changing market.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
              <Link href="/contact">Get a Tailored Solution</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
