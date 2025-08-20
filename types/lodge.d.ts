export interface Lodge {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  amenities: string[]
  maxOccupancy: number
  location: {
    latitude: number
    longitude: number
  }
  availability: {
    from: Date
    to: Date
  }[]
} 