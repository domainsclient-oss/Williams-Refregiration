import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function NewsPage() {
  const newsArticles = [
    {
      slug: "expanding-fb-establishments",
      title: "Expanding F&B establishments and their impact on refrigeration technology",
      image: "/expo-1.jpg",
      date: "March 15, 2026",
      excerpt: "The global food and beverage industry is transforming, driven by evolving consumer behaviour and technological advancements."
    },
    {
      slug: "food-service-india-investment",
      title: "Food Service India to invest up to ₹100 crore to cater to hotel/restaurant sector demand",
      image: "/expo-3.jpeg",
      date: "February 28, 2026",
      excerpt: "FSIPL targets revenue of ₹1,000 crore by 2028 as it expands production to meet surging HORECA segment demand."
    },
    {
      slug: "thaifex-horec-asia-2025",
      title: "THAIFEX – HOREC Asia 2025 unveils AI-powered automation and culinary innovations",
      image: "/expo-4.jpeg",
      date: "February 10, 2026",
      excerpt: "Artificial intelligence is entering the kitchen. Explore the latest automation trends from THAIFEX."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* News Hero */}
        <section className="py-16 md:py-24 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8">Latest News</h1>
            <div className="max-w-4xl mx-auto space-y-6 text-xl font-light leading-relaxed opacity-90">
              <p>
                Insights, updates, and the latest trends from the heart of the refrigeration and hospitality industry.
              </p>
            </div>
          </div>
        </section>

        {/* News Feed */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsArticles.map((article, index) => (
                <div key={index} className="flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-soft border border-border group hover:shadow-hover transition-all duration-500">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Industry News
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 6 min read</span>
                    </div>
                    
                    <h3 className="text-xl font-headline font-bold mb-4 line-clamp-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Button asChild variant="link" className="px-0 text-primary font-bold group/btn hover:no-underline">
                        <Link href={`/news/${article.slug}`}>
                          Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-secondary/20 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Stay Informed</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest industry insights and product launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 h-14 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-base"
              />
              <Button className="h-16 sm:h-14 px-10 rounded-full shadow-lg font-bold">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
