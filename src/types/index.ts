export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageId: string;
};

export type Property = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageId: string;
  type: 'Real Estate' | 'Car' | 'Jewelry' | 'Other';
};
