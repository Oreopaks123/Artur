"use client";

import { useState } from 'react';
import { getPersonalizedPropertyRecommendations, PropertyPreferencesInput } from '@/ai/flows/personalized-property-recommendations';
import { RecommendationsForm } from '@/components/recommendations-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AlertCircle, Bot } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from '@/components/ui/skeleton';

type Recommendation = {
    propertyId: string;
    propertyName: string;
    propertyDescription: string;
    propertyPrice: number;
    propertyLocation: string;
    propertyImageUrl: string;
}

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGetRecommendations = async (data: Omit<PropertyPreferencesInput, 'amenities'> & { amenities?: string }) => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    const input: PropertyPreferencesInput = {
      ...data,
      amenities: data.amenities ? data.amenities.split(',').map(a => a.trim()) : [],
    };
    
    try {
      const result = await getPersonalizedPropertyRecommendations(input);
      setRecommendations(result.recommendations);
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error fetching recommendations",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline text-accent">Personalized AI Search</h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Leverage our advanced AI to find assets tailored to your precise specifications. Describe your ideal acquisition, and let our system do the rest.
            </p>
        </div>
        
        <RecommendationsForm onSubmit={handleGetRecommendations} isLoading={isLoading} />

        <div className="mt-16">
          {isLoading && <LoadingSkeleton />}
          {error && <ErrorDisplay message={error} />}
          {recommendations && (
            <div>
              {recommendations.length > 0 ? (
                <>
                <h2 className="text-3xl font-headline text-center mb-8">Your Personalized Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recommendations.map((rec) => (
                    <RecommendationCard key={rec.propertyId} recommendation={rec} />
                  ))}
                </div>
                </>
              ) : (
                <NoResultsDisplay />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
     <Card className="overflow-hidden flex flex-col h-full bg-card group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={recommendation.propertyImageUrl}
            alt={recommendation.propertyName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl text-accent">{recommendation.propertyName}</CardTitle>
        <CardDescription className="mt-2 text-muted-foreground">{recommendation.propertyDescription}</CardDescription>
        <p className="text-sm text-muted-foreground mt-2">Location: {recommendation.propertyLocation}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold font-headline">${recommendation.propertyPrice.toLocaleString()}</p>
      </CardFooter>
    </Card>
  );
}

function LoadingSkeleton() {
    return (
        <div>
            <h2 className="text-3xl font-headline text-center mb-8">Generating recommendations...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                        <Skeleton className="aspect-video w-full" />
                        <CardHeader>
                            <Skeleton className="h-6 w-3/4" />
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </CardContent>
                        <CardFooter>
                             <Skeleton className="h-8 w-1/3" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function ErrorDisplay({ message }: { message: string }) {
  return (
    <Card className="max-w-2xl mx-auto bg-destructive/10 border-destructive">
      <CardHeader className="flex flex-row items-center gap-4">
        <AlertCircle className="text-destructive w-8 h-8"/>
        <CardTitle className="text-destructive font-headline">An Error Occurred</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-destructive/80">{message}</p>
      </CardContent>
    </Card>
  );
}

function NoResultsDisplay() {
  return (
    <Card className="max-w-2xl mx-auto bg-card">
      <CardHeader className="flex flex-row items-center gap-4">
        <Bot className="text-accent w-8 h-8"/>
        <CardTitle className="font-headline">No Exact Matches Found</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Our AI couldn't find any properties that exactly match your criteria. Please try broadening your search terms.</p>
      </CardContent>
    </Card>
  );
}
