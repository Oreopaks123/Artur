
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
            alt={heroImage?.description || 'Роскошный интерьер'}
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
              Ваш поставщик самых эксклюзивных активов в мире
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-headline tracking-wide">
                <Link href="/assets">Изучить активы</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="font-headline tracking-wide"
              >
                <Link href="/#contact">Связаться с Артуром</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
              <div className="md:col-span-2">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                  <Image
                    src={aboutImage?.imageUrl || ''}
                    alt={aboutImage?.description || 'Артур Артурович'}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage?.imageHint}
                  />
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline text-accent">
                  Артур Артурович
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Обладая более чем двадцатилетним опытом работы на рынке элитных товаров и услуг, Артур Артурович заслужил репутацию специалиста, отличающегося непревзойденной осмотрительностью, опытом и доступом к самым желанным активам по всему миру. От дворцовых поместий и редких автомобилей до ювелирных изделий музейного качества — Артур предоставляет индивидуальные услуги для взыскательной клиентуры.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  «Моя философия проста: объединять выдающихся людей с выдающимися вещами. Это не просто сделка, а создание наследия».
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline">
                Слова доверия
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                Услышьте от клиентов, которые ощутили разницу с Artur Estate.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === testimonial.imageId
                );
                return (
                  <Card
                    key={testimonial.id}
                    className="bg-card border-border/20 flex flex-col transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-2"
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
          <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-3xl mx-auto shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-headline">
                  Сделать запрос
                </CardTitle>
                <p className="text-muted-foreground">
                  Ваш путь к приобретению исключительного начинается здесь.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Полное имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Адрес электронной почты</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="например, Запрос о недвижимости" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Пожалуйста, опишите ваши потребности..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-headline tracking-wide">
                    Отправить сообщение
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
