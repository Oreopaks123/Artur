'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing personalized property recommendations based on user preferences.
 *
 * The flow takes user preferences as input and returns a list of property recommendations.
 * @param {PropertyPreferencesInput} input - The user's property preferences.
 * @returns {Promise<PropertyRecommendationsOutput>} - A promise that resolves to the property recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PropertyPreferencesInputSchema = z.object({
  propertyType: z.string().describe('The type of property the user is interested in (e.g., house, apartment, land).'),
  location: z.string().describe('The preferred location of the property.'),
  budget: z.number().describe('The user budget for the property.'),
  bedrooms: z.number().optional().describe('The number of bedrooms the user requires.'),
  bathrooms: z.number().optional().describe('The number of bathrooms the user requires.'),
  amenities: z.string().array().optional().describe('A list of desired amenities (e.g., swimming pool, gym, parking).'),
});

export type PropertyPreferencesInput = z.infer<typeof PropertyPreferencesInputSchema>;

const PropertyRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.object({
    propertyId: z.string().describe('The unique identifier of the property.'),
    propertyName: z.string().describe('The name of the property.'),
    propertyDescription: z.string().describe('A short description of the property.'),
    propertyPrice: z.number().describe('The price of the property.'),
    propertyLocation: z.string().describe('The location of the property.'),
    propertyImageUrl: z.string().describe('URL of an image of the property.'),
  })).describe('A list of property recommendations based on the user preferences.'),
});

export type PropertyRecommendationsOutput = z.infer<typeof PropertyRecommendationsOutputSchema>;

export async function getPersonalizedPropertyRecommendations(input: PropertyPreferencesInput): Promise<PropertyRecommendationsOutput> {
  return personalizedPropertyRecommendationsFlow(input);
}

const propertyRecommendationPrompt = ai.definePrompt({
  name: 'propertyRecommendationPrompt',
  input: {schema: PropertyPreferencesInputSchema},
  output: {schema: PropertyRecommendationsOutputSchema},
  prompt: `You are an expert real estate agent providing personalized property recommendations based on user preferences.

  Based on the following user preferences:
  - Property Type: {{{propertyType}}}
  - Location: {{{location}}}
  - Budget: {{{budget}}}
  {{#if bedrooms}}
  - Bedrooms: {{{bedrooms}}}
  {{/if}}
  {{#if bathrooms}}
  - Bathrooms: {{{bathrooms}}}
  {{/if}}
  {{#if amenities}}
  - Amenities: {{#each amenities}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  {{/if}}

  Recommend a list of properties that match these preferences. Ensure each property has a propertyId, propertyName, propertyDescription, propertyPrice, propertyLocation and propertyImageUrl.
  Format your response as a JSON object conforming to the PropertyRecommendationsOutputSchema.
  `,
});

const personalizedPropertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPropertyRecommendationsFlow',
    inputSchema: PropertyPreferencesInputSchema,
    outputSchema: PropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await propertyRecommendationPrompt(input);
    return output!;
  }
);
