
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Target, 
  Clock, 
  Zap,
  Leaf,
  Globe
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const leadershipImage = PlaceHolderImages.find(img => img.id === 'leadership-vision');
  const whoWeAreImage = PlaceHolderImages.find(img => img.id === 'hero-slide-1');
  const factoryImage = PlaceHolderImages.find(img => img.id === 'about-factory');
  const growthMapImage = PlaceHolderImages.find(img => img.id === 'growth-map');

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main>
        {/* About Hero Section */}
        <section className="relative py-16 md:py-32 bg-primary text-background overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             {factoryImage && (
              <Image
                src={factoryImage.imageUrl}
                alt="Background"
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-white font-semibold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">Revolutionizing Refrigeration</h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto font-light leading-relaxed">
              Specialists in high-performance refrigeration and fabrication solutions backed by decades of industry expertise.
            </p>
          </div>
        </section>

        {/* Core Identity */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-foreground">Who We Are</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                  <p>
                    Williams Refrigeration is a specialist in refrigeration and fabrication solutions. We cater to the HO.RE.CA industry with high-quality fabrication and refrigeration solutions, incorporating the latest design trends and utilizing cutting-edge technology for optimal performance.
                  </p>
                  <p>
                    We provide custom-built solutions for Cafes, Restaurants, Ice cream Parlors, Bars, and Supermarkets. Our team of skilled technicians and engineers work tirelessly to ensure each unit is meticulously crafted, tested, and ready for the most demanding environments.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Custom Solutions</h4>
                      <p className="text-sm">Tailored for your specific business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Latest Tech</h4>
                      <p className="text-sm">Optimal performance guaranteed.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-soft border border-border">
                {whoWeAreImage && (
                  <Image
                    src={whoWeAreImage.imageUrl}
                    alt={whoWeAreImage.description}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* History & Leadership */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Heritage</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-foreground">Leadership – With a Clear Vision</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                  <p>
                    Established in 1997, Williams Refrigeration draws on an extensive expertise in the industry from our managing director and owner, William S.R.
                  </p>
                  <p>
                    He has grown up in the refrigeration industry: his journey started with hands-on experience in the family business, alongside his father Patrick for many years. This deep-rooted legacy fuels our commitment to excellence today.
                  </p>
                </div>
                <div className="mt-10 p-8 bg-secondary/20 rounded-2xl border-l-4 border-primary">
                  <h4 className="text-xl font-headline font-bold text-foreground mb-2">Our Vision</h4>
                  <p className="text-muted-foreground">We strive to deliver products that help businesses to enhance their operational efficiency and sustainability.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative h-[450px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  {leadershipImage && (
                    <Image
                      src={leadershipImage.imageUrl}
                      alt={leadershipImage.description}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-foreground/80 to-transparent">
                    <p className="text-background font-bold text-2xl">William S.R.</p>
                    <p className="text-background/70">Managing Director & Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Over the Years & Approach */}
        <section className="py-16 md:py-24 bg-white border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-headline font-bold">Over the Years</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Decades of experience mean we understand our client's needs. We manufacture refrigeration equipment using superior materials and advanced technologies, ensuring longevity and performance.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-headline font-bold">Our Approach</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Williams Refrigeration brings forth a customer-centric approach. Solutions that go the distance, starting with consultation and culminating in installation and ongoing support.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-secondary/10 p-8 md:p-10 rounded-3xl border border-border">
                  <h3 className="text-2xl font-headline font-bold mb-4">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed font-light italic">
                    "Largest commercial refrigeration manufacturer, we're proud to offer a vast selection of reliable, energy efficient and eco-friendly products from cabinets and counters."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey of Growth Map Section */}
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

        {/* Production & Sustainability */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <Leaf className="h-12 w-12 text-white mb-6" />
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Production & Engineering</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                  <p>
                    We follow a precise engineering-based manufacturing process with advanced technologies and purposeful sustainable practices. We guarantee that every refrigeration unit we install meets standard demands in terms of quality, durability, and a energy efficiency.
                  </p>
                  <p>
                    We specialize in using advanced technologies and sustainable refrigerants like <span className="text-white font-semibold">R290</span>, which are safe for the environment and contribute to a greener future.
                  </p>
                  <p>
                    The production line uses refrigeration technologies that are environment-friendly, insulation that is of the latest technology, and cooling conditions that are precise so that every project can be fruitful in operational excellence.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 p-6 md:p-8 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">R290</h4>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Sustainable Gas</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 md:p-8 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">ISO</h4>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Certified Quality</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 md:p-8 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">1997</h4>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Established</p>
                </Card>
                <Card className="bg-white/5 border-white/10 p-6 md:p-8 text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">3</h4>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Manufacturing Hubs</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Experience the Williams Difference</h2>
            <p className="text-xl opacity-90 mb-10 font-light">
              From the initial consultation to installation and ongoing support, we ensure our clients receive tailored solutions that fit their specific needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10 h-12 md:h-14">
                <Link href="/contact" className="flex items-center">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
