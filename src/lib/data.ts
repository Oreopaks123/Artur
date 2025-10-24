import type { Property, Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John D.',
    title: 'Happy Homeowner',
    quote: 'Artur found us our dream home. The process was seamless and professional. We couldn\'t be happier with the service.',
    imageId: 'testimonial-1',
  },
  {
    id: '2',
    name: 'Samantha P.',
    title: 'Luxury Car Collector',
    quote: 'For exclusive vehicles, Artur is the only person I trust. His network and negotiation skills are unparalleled.',
    imageId: 'testimonial-2',
  },
  {
    id: '3',
    name: 'Elena K.',
    title: 'Jewelry Enthusiast',
    quote: 'The attention to detail and quality of the pieces Artur sources is simply breathtaking. A true connoisseur of luxury.',
    imageId: 'testimonial-3',
  },
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Villa in the Hills',
    description: 'A stunning 5-bedroom villa with panoramic views, an infinity pool, and state-of-the-art amenities.',
    price: '$5,200,000',
    imageId: 'property-house',
    type: 'Real Estate',
  },
  {
    id: '2',
    title: 'Vintage Sports Car',
    description: 'A rare 1965 sports car, meticulously restored to its original glory. A true collector\'s item.',
    price: '$850,000',
    imageId: 'property-car',
    type: 'Car',
  },
  {
    id: '3',
    title: 'The Azure Diamond Necklace',
    description: 'An exquisite necklace featuring a flawless 25-carat azure diamond, surrounded by smaller brilliant-cut diamonds.',
    price: '$12,500,000',
    imageId: 'property-jewelry',
    type: 'Jewelry',
  },
  {
    id: '4',
    title: 'Penthouse with City Views',
    description: 'Luxurious penthouse in the heart of the city, offering breathtaking skyline views and premium concierge services.',
    price: '$8,900,000',
    imageId: 'property-apartment',
    type: 'Real Estate',
  },
  {
    id: '5',
    title: 'Ocean Voyager Yacht',
    description: 'A 150-foot luxury yacht with a crew of 10, a helipad, and opulent interiors for ultimate sea travel.',
    price: 'Price on request',
    imageId: 'property-yacht',
    type: 'Other',
  },
  {
    id: '6',
    title: 'Chronograph Masterpiece Watch',
    description: 'A limited edition Swiss-made watch with a platinum case and a complex tourbillon movement.',
    price: '$275,000',
    imageId: 'property-watch',
    type: 'Jewelry',
  },
];
