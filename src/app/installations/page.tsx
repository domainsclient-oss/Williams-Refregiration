"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ZoomIn } from 'lucide-react';

export default function InstallationsPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  const prefix1Images = [
    "williams-installations-10-1536x1024.jpg",
    "williams-installations-11-1536x1024.jpg",
    "williams-installations-12-1536x1024.jpg",
    "williams-installations-13-1536x1536.jpg",
    "williams-installations-14-1536x1024.jpg",
    "williams-installations-15-1536x1152.jpg",
    "williams-installations-18-1536x1152.jpg",
    "williams-installations-19-1229x1536.jpg",
    "williams-installations-21-1536x1024.jpg",
    "williams-installations-23-1536x1024.jpg",
    "williams-installations-32-1536x747.jpg",
    "williams-installations-33-1536x747.jpg",
    "williams-installations-34-1536x747.jpg",
    "williams-installations-38-1536x1024.jpg",
    "williams-installations-39-1536x1024.jpg"
  ];

  const prefix2Images = Array.from({ length: 41 }, (_, i) => `williams-refrigeration-installations-${i + 1}.jpg`);

  const galleryImages = [...prefix1Images, ...prefix2Images].map((filename, index) => ({
    id: index,
    url: `/Installations/${filename}`,
    alt: `Williams Refrigeration Installation ${index + 1}`
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 bg-primary text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8">Our Installations</h1>
            <div className="max-w-3xl mx-auto space-y-6 text-xl font-light leading-relaxed opacity-90">
              <p>
                We have established ourselves as a leading brand in the furnishing industry for bars, gelato shops, bakeries, and the broader food sector.
              </p>
              <p>
                Our display cases and preservation technology embody Italian craftsmanship, and with each venue we design, we aim to convey a unique narrative.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative aspect-square overflow-hidden rounded-[2rem] bg-muted shadow-soft border border-border transition-all duration-500 hover:shadow-hover hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage({ url: image.url, alt: image.alt })}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Narrative Section */}
        <section className="py-20 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Creating Unique Narratives</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Every project is a collaboration between our technical expertise and your creative vision. We don't just install equipment; we furnish excellence and craft spaces that inspire.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-black/95 border-none">
          <DialogHeader className="absolute top-4 right-4 z-50">
             <DialogTitle className="sr-only">Installation Gallery View</DialogTitle>
             <button 
              onClick={() => setSelectedImage(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </DialogHeader>
          <div className="relative w-full h-[90vh] flex items-center justify-center p-4 md:p-12">
            {selectedImage && (
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
