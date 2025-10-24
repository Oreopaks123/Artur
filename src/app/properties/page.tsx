import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 bg-background">
        <div className="container px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline text-accent">Property Showcase</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              A curated selection of the finest assets available on the market. Explore unparalleled luxury and craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
