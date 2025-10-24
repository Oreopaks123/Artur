import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials } from '@/lib/data';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'landing-hero');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-artur');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
          <Image
            src={heroImage?.imageUrl || ''}
            alt={heroImage?.description || 'Luxury interior'}
            fill
            className="object-cover -z-10"
            data-ai-hint={heroImage?.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="container px-4 md:px-6 text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-wider uppercase drop-shadow-lg">
              Artur Estate
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow">
              Your Purveyor of the World's Most Exclusive Assets
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button asChild size="lg" className="font-headline tracking-wide">
                <Link href="/properties">Explore Properties</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="font-headline tracking-wide"
              >
                <Link href="#contact">Contact Artur</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                  <Image
                    src={aboutImage?.imageUrl || ''}
                    alt={aboutImage?.description || 'Artur Arturóvich'}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage?.imageHint}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-headline text-accent">
                  Artur Arturóvich
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  With over two decades of experience in the luxury market, Artur
                  Arturóvich has cultivated a reputation for unparalleled
                  discretion, expertise, and access to the most coveted assets
                  worldwide. From palatial estates and rare automobiles to
                  museum-quality jewelry, Artur provides a bespoke service for a
                  discerning clientele.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  "My philosophy is simple: to unite extraordinary people with
                  extraordinary possessions. It is not merely a transaction, but
                  the curation of a legacy."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline">
                Words of Trust
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                Hear from clients who have experienced the Artur Estate
                difference.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === testimonial.imageId
                );
                return (
                  <Card
                    key={testimonial.id}
                    className="bg-card border-accent/20 flex flex-col transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-2"
                  >
                    <CardHeader>
                      <CardTitle className="font-body text-lg leading-relaxed text-foreground/90">
                        "{testimonial.quote}"
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow" />
                    <CardFooter className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={image?.imageUrl}
                          alt={image?.description}
                          data-ai-hint={image?.imageHint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold font-headline text-accent">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <Card className="max-w-3xl mx-auto shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-headline">
                  Make an Inquiry
                </CardTitle>
                <p className="text-muted-foreground">
                  Your journey towards acquiring the exceptional begins here.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Property Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your needs..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-headline tracking-wide">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
