export interface Lodge {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  pricePerNight: number;
  images?: string[];
  amenities?: string[];
  availability?: {
    startDate: Date;
    endDate: Date;
  }[];
} 