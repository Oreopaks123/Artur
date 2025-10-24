import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';

export default function AssetsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-headline text-accent">Витрина активов</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Тщательно подобранный выбор лучших активов, доступных на рынке. Откройте для себя непревзойденную роскошь и мастерство.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
