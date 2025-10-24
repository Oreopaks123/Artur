import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-headline tracking-wider">Artur Estate</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Надежный источник для приобретения самых эксклюзивных активов в мире.
            </p>
          </div>
          <div>
            <h4 className="font-bold font-headline tracking-wide">Навигация</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Главная</Link></li>
              <li><Link href="/assets" className="text-muted-foreground hover:text-foreground transition-colors">Активы</Link></li>
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">Обо мне</Link></li>
              <li><Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакт</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold font-headline tracking-wide">Контакт</h4>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>Email: <a href="mailto:contact@artur.estate" className="hover:text-foreground transition-colors">contact@artur.estate</a></p>
              <p>Телефон: +1 (234) 567-890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Artur Estate. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
