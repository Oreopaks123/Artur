import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-headline tracking-wider">Artur Estate</h3>
            <p className="mt-2 text-sm text-primary-foreground/70 max-w-sm">
              The definitive source for acquiring the world's most exclusive assets.
            </p>
          </div>
          <div>
            <h4 className="font-bold font-headline tracking-wide">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Properties</Link></li>
              <li><Link href="/recommendations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Personalized Search</Link></li>
              <li><Link href="/#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold font-headline tracking-wide">Contact</h4>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/70">
              <p>Email: <a href="mailto:contact@artur.estate" className="hover:text-primary-foreground transition-colors">contact@artur.estate</a></p>
              <p>Phone: +1 (234) 567-890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">&copy; {new Date().getFullYear()} Artur Estate. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
