import Image from 'next/image';
import type { Property } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === property.imageId);

  return (
    <Card className="overflow-hidden flex flex-col h-full bg-card group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-accent border-border/20">
      <CardHeader className="p-0 relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image?.imageUrl || ''}
            alt={image?.description || property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={image?.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl text-accent">{property.title}</CardTitle>
        <CardDescription className="mt-2 text-muted-foreground">{property.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold font-headline">{property.price}</p>
        <Badge variant="secondary" className="font-body">{property.type}</Badge>
      </CardFooter>
    </Card>
  );
}
