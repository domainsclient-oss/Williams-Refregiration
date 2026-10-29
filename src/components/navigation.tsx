"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Facebook, Youtube, Instagram, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Installations', href: '/installations' },
    { name: 'Careers', href: '/careers' },
  ];

  const productStructure = [
    {
      name: 'Display Cabinets',
      href: '/products/display-cabinets',
      items: [
        { name: 'Confectionery / Patisserie', href: '/products/display-cabinets/confectionery' },
        { name: 'Ice Cream / Gelato', href: '/products/display-cabinets/ice-cream' },
        { name: 'Delicatessen / Serve Over', href: '/products/display-cabinets/delicatessen' },
      ]
    },
    {
      name: 'Commercial Refrigeration',
      href: '/products/commercial-refrigeration',
      items: [
        { name: 'Refrigeration Cabinets', href: '/products/commercial-refrigeration/refrigeration-cabinets' },
        { name: 'R290 Cabinets', href: '/products/commercial-refrigeration/r290-cabinets' },
        { name: 'Dual Temp', href: '/products/commercial-refrigeration/dual-temp' },
        { name: 'Thawing Cabinets', href: '/products/commercial-refrigeration/thawing-cabinets' },
        { name: 'R290 Refrigerated Counters', href: '/products/commercial-refrigeration/r290-refrigerated-counters' },
        { name: 'Back Bar Coolers', href: '/products/commercial-refrigeration/back-bar-coolers' },
        { name: 'Drop in', href: '/products/commercial-refrigeration/drop-in' },
        { name: 'Wine Chiller', href: '/products/commercial-refrigeration/wine-chiller' },
        { name: 'Prep Station', href: '/products/commercial-refrigeration/prep-station' },
        { name: 'Blast Freezer', href: '/products/commercial-refrigeration/blast-freezer' },
        { name: 'Banquet Trolley', href: '/products/commercial-refrigeration/banquet-trolley' },
        { name: 'Pan Cooler', href: '/products/commercial-refrigeration/pan-cooler' },
        { name: 'Under Counter', href: '/products/commercial-refrigeration/under-counter' },
      ]
    },
    {
      name: 'Professional Kitchen Equipment',
      href: '/products/professional-kitchen-equipment',
      items: [
        { name: 'Full Range (Coming Soon)', href: '/products/professional-kitchen-equipment' },
      ]
    }
  ];

  const bottomLinks = [
    { name: 'Awards', href: '/awards' },
    { name: 'News', href: '/news' },
    { name: 'Resources', href: '/downloads' },
  ];

  return (
    <>
      {/* Top Bar - Updated to match footer background */}
      <div className="bg-[#152a4d] text-background text-xs py-2 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:sales@williamsrefrigeration.in" className="text-background/80 hover:text-white transition flex items-center gap-2">
              <Mail className="h-3 w-3" /> sales@williamsrefrigeration.in
            </a>
            <a href="mailto:info@williamsrefrigeration.in" className="text-background/80 hover:text-white transition flex items-center gap-2">
              <Mail className="h-3 w-3" /> info@williamsrefrigeration.in
            </a>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="tel:+919844013768" className="text-background hover:text-white transition flex items-center gap-2 font-semibold">
              <Phone className="h-3 w-3" /> +91 9844013768
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b border-border",
        isScrolled ? "shadow-soft py-2" : "py-0",
        (isScrolled && !isMobileMenuOpen) ? "bg-background/90 backdrop-blur-md" : "bg-background"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image 
                src="/Headerlogo.png" 
                alt="Williams Refrigeration Logo" 
                width={230} 
                height={64} 
                className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Mega Dropdown */}
              <div className="relative group flex items-center h-full cursor-default">
                <div
                  className="text-muted-foreground group-hover:text-primary font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Products <ChevronDown className="h-4 w-4" />
                </div>
                
                {/* Level 1 Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-background border border-border shadow-xl rounded-b-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {productStructure.map((category) => (
                    <div key={category.name} className="relative group/sub">
                      <Link
                        href={category.href}
                        className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all font-medium"
                      >
                        {category.name}
                        <ChevronRight className="h-4 w-4" />
                      </Link>

                      {/* Level 2 Dropdown */}
                      <div className="absolute top-0 left-full hidden group-hover/sub:block w-72 bg-background border border-border shadow-xl rounded-xl py-2 ml-px animate-in fade-in slide-in-from-left-2 duration-200 overflow-y-auto max-h-[80vh]">
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:flex rounded-full px-6 h-10 text-sm font-medium">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary focus:outline-none transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden fixed inset-0 z-40 bg-background animate-in slide-in-from-top duration-300 overflow-y-auto pb-24",
          isMobileMenuOpen ? "block" : "hidden",
          isScrolled ? "top-[96px]" : "top-20"
        )}>
          <div className="px-4 pt-6 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-2 py-3 text-lg font-semibold text-foreground border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <p className="px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Catalog</p>
              <Accordion type="single" collapsible className="w-full">
                {productStructure.map((category, idx) => (
                  <AccordionItem key={category.name} value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="px-2 py-3 hover:no-underline font-semibold text-lg text-foreground justify-between">
                      {category.name}
                    </AccordionTrigger>
                    <AccordionContent className="bg-secondary/20 rounded-xl px-4 py-2 mt-1">
                      <div className="flex flex-col space-y-1">
                        <Link 
                          href={category.href} 
                          className="py-2 text-sm font-bold text-primary flex items-center gap-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All {category.name} <ChevronRight className="h-3 w-3" />
                        </Link>
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="py-2.5 text-sm text-muted-foreground active:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-2 py-3 text-lg font-semibold text-foreground border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-6">
              <Button asChild className="w-full rounded-full h-14 text-lg shadow-lg">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Socials */}
            <div className="pt-10 flex justify-center gap-6">
              <a href="https://www.facebook.com/williamsrefrigerations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@WilliamsRefrigeration" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/williamsrefrigeration/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/williams-refrigerations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                <Linkedin className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}