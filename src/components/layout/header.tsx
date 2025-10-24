"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Diamond, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/#about', label: 'Обо мне' },
  { href: '/#testimonials', label: 'Отзывы' },
  { href: '/#contact', label: 'Контакт' },
];

const assetsLink = { href: '/assets', label: 'Активы' };

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['about', 'testimonials', 'contact'];
      let currentSection = '';

      if (window.scrollY < 400) {
        currentSection = '/';
      } else {
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = `/#${sectionId}`;
            }
          }
        });
      }
      
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        const contactSection = document.getElementById('contact');
        if(contactSection) currentSection = '/#contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      return activeSection === href;
    }
    if (href === '/') {
        return activeSection === href && pathname === '/';
    }
    return pathname === href;
  };


  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Diamond className="h-6 w-6 text-accent" />
            <span className="text-xl font-headline font-bold tracking-wider">
              Artur Estate
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 flex-1 justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  'font-headline text-sm tracking-widest uppercase transition-colors hover:text-accent px-4 py-2 rounded-md',
                  isLinkActive(link.href) ? 'text-accent' : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild key={assetsLink.href} className={cn('ml-4', isLinkActive(assetsLink.href) ? '' : '')}>
                <Link href={assetsLink.href}>{assetsLink.label}</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-full">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <Diamond className="h-6 w-6 text-accent" />
                            <span className="text-xl font-headline font-bold tracking-wider">
                            Artur Estate
                            </span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X />
                            <span className="sr-only">Закрыть меню</span>
                        </Button>
                    </div>
                  <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                    {[...navLinks, assetsLink].map((link) => (
                       <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={cn(
                          'text-2xl font-headline tracking-widest uppercase transition-colors hover:text-accent',
                          isLinkActive(link.href) ? 'text-accent' : 'text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
