
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Installations', href: '/installations' },
    { name: 'Careers', href: '/careers' },
    { name: 'Products', href: '/products' },
    { name: 'Awards', href: '/awards' },
    { name: 'News', href: '/news' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact', href: '/contact' },
  ];

  const productCategories = [
    { name: 'Display Cabinets', href: '/products/display-cabinets' },
    { name: 'Commercial Refrigeration', href: '/products/commercial-refrigeration' },
    { name: 'Professional Kitchen Equipment', href: '/products/professional-kitchen-equipment' }
  ];

  return (
    <footer className="bg-[#152a4d] text-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="mb-8">
              <Link href="/" className="group inline-block">
                <Image 
                  src="/Headerlogo.png" 
                  alt="Williams Logo" 
                  width={180} 
                  height={50} 
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </Link>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-8">
              We at Williams Refrigeration are known for revolutionizing the refrigeration industry with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/williamsrefrigerations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@WilliamsRefrigeration" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/williamsrefrigeration/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/williams-refrigerations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-headline">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-headline">Products</h4>
            <ul className="space-y-4 mb-12">
              {productCategories.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-background/60 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-8 font-headline">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:sales@williamsrefrigeration.in" className="text-background/60 hover:text-white transition-colors text-sm flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" /> sales@williamsrefrigeration.in
              </a>
              <a href="mailto:info@williamsrefrigeration.in" className="text-background/60 hover:text-white transition-colors text-sm flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" /> info@williamsrefrigeration.in
              </a>
              <a href="tel:+919844013768" className="text-background/60 hover:text-white transition-colors text-sm flex items-center gap-3 font-semibold">
                <Phone className="h-4 w-4 shrink-0" /> +91 9844013768
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-headline">Locations</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2">UNIT-I</h5>
                <p className="text-background/60 text-sm leading-relaxed">
                  #111 ‘C’, KIADB Industrial Area, 1st Phase, Bommasandra, Hosur Main Road, Bangalore - 560099, INDIA.
                </p>
              </div>
              <div>
                <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-2">UNIT-II</h5>
                <p className="text-background/60 text-sm leading-relaxed">
                  Plot No: 127&128, Bommasandra IV Phase, Yarandahally, Bangalore - 560099, Karnataka, INDIA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-sm">&copy; 2026 Williams Refrigeration. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="text-background/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-background/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
