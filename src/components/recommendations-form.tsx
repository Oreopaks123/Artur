"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const propertyPreferencesSchema = z.object({
  propertyType: z.string().min(1, 'Property type is required.'),
  location: z.string().min(1, 'Location is required.'),
  budget: z.coerce.number().min(1, 'Budget is required.'),
  bedrooms: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  amenities: z.string().optional(),
});

type PropertyPreferencesFormValues = z.infer<typeof propertyPreferencesSchema>;

type RecommendationsFormProps = {
  onSubmit: (data: PropertyPreferencesFormValues) => void;
  isLoading: boolean;
};

export function RecommendationsForm({ onSubmit, isLoading }: RecommendationsFormProps) {
  const form = useForm<PropertyPreferencesFormValues>({
    resolver: zodResolver(propertyPreferencesSchema),
    defaultValues: {
      propertyType: 'Apartment',
      location: 'New York',
      budget: 1000000,
      bedrooms: 2,
      bathrooms: 2,
      amenities: '',
    },
  });

  function handleFormSubmit(data: PropertyPreferencesFormValues) {
    onSubmit(data);
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">Find Your Perfect Asset</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="Car">Car</SelectItem>
                        <SelectItem value="Jewelry">Jewelry</SelectItem>
                        <SelectItem value="Yacht">Yacht</SelectItem>
                        <SelectItem value="Watch">Watch</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Monaco, Dubai, London" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Budget (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5000000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms (optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms (optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Amenities (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., swimming pool, gym" {...field} />
                  </FormControl>
                   <FormDescription>
                    Separate amenities with commas.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="w-full font-headline tracking-wide" size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
