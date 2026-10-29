'use client';

import React from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Users, Trophy } from 'lucide-react';

export default function AwardsPage() {
  const carouselImages = [
    { url: "/awards/hall-of-frame-1-700x467.JPG", alt: "Hall of Fame Event 1" },
    { url: "/awards/awardshospisource-2-700x467.jpg.jpeg", alt: "Hospisource Event 2" },
    { url: "/awards/hospisource-1-700x467.jpg", alt: "Hospisource Event 1" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-[#5378B3] text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="h-4 w-4 fill-white" /> Industry Excellence <Star className="h-4 w-4 fill-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-headline font-bold mb-8 leading-tight max-w-5xl mx-auto uppercase text-background">
              Pioneer Kitchen Refrigeration Manufacturer of the Century (1950-2019)
            </h1>
          </div>
        </section>

        {/* Award Detail Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="relative aspect-square w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white min-h-[300px] flex items-center justify-center">
                  <Image
                    src="/hall-of -frame-award.png"
                    alt="Hall of Fame Award"
                    width={500}
                    height={500}
                    className="object-contain p-8 w-full h-auto"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">About Hall of Fame Award</h2>
                  <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                    <p>
                      The Pioneer Kitchen Refrigeration Manufacturer of the Century (1950-2019) is a prestigious recognition within the Hall of Fame Awards, created to honor the unsung heroes of the Food Service Equipment Industry. This award acknowledges the extraordinary contributions of individuals and organizations that have played a vital role in shaping the industry over the past 70 years.
                    </p>
                    <p>
                      Leading up to the Awards Evening on December 7, 2019, this event will highlight the fascinating growth of the Food Service Equipment Industry in India, shining a light on the industry's independence and recognizing the stalwarts and unsung heroes who have helped it flourish.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-secondary/20 border-none shadow-soft">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Trophy className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">Unique Legacy</h4>
                        <p className="text-sm text-muted-foreground">A one-time event celebrating 70 years of innovation.</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/20 border-none shadow-soft">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Users className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">Expert Panel</h4>
                        <p className="text-sm text-muted-foreground">Voted by 1,000+ hospitality veterans.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Narrative Section */}
        <section className="py-24 bg-white border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-8">
              <p>
                Awardees, along with their families, will be honored and brought into the spotlight, ensuring that their contributions are celebrated and remembered. The awards ceremony will be a unique, one-time event with no future repetitions.
              </p>
              <p>
                There will be 33 award categories, and the awardees will be selected through the votes of over 1,000 independent hospitality veterans, who will nominate and vote for their chosen Hall of Fame inductees. The categories will cover a broad range of industry professionals, including Kitchen Consultants, Kitchen Equipment Manufacturers, F&B Project Managers, Equipment Aggregators, F&B Professionals, Hoteliers, Restaurateurs, and more.
              </p>
              <div className="p-10 bg-[#5378B3] text-background rounded-[2.5rem] shadow-xl text-center">
                <p className="text-xl italic font-normal mb-0">
                  "Curated by a team of over 100 hospitality stalwarts, the event aims to bring together leaders from the hospitality industry to contribute to its success. This will be a significant celebration of the Food Service Equipment industry's legacy, its growth, and the pioneers who have made it all possible."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-headline font-bold text-foreground">Event Highlights</h2>
              <p className="text-muted-foreground mt-4">Capturing moments of recognition and celebration.</p>
            </div>

            <div className="relative px-12">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-full lg:basis-full">
                      <div className="p-1">
                        <Card className="overflow-hidden border-none rounded-[2.5rem] shadow-2xl aspect-[16/9]">
                          <CardContent className="p-0 relative w-full h-full">
                            <Image
                              src={image.url}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 lg:-left-12 h-12 w-12 hover:bg-primary hover:text-white transition-all duration-300" />
                <CarouselNext className="-right-4 lg:-right-12 h-12 w-12 hover:bg-primary hover:text-white transition-all duration-300" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
