export interface TripProps {
  id: string;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  pricePerDay: number;
  description: string;
  coverImage: string;
  imagesUrl: string[];
  highlights: string[];
  maxGuests: number;
  countryCode: string;
  recommended: boolean;
}
