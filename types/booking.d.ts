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

export interface Extra {
  id: string
  name: string
  price: number
}

export interface BookingDetails {
  lodge: Lodge | null
  dates?: {
    from: Date
    to: Date
  }
  nights: number
  extras?: Extra[]
  discountApplied: boolean
}

export interface PaymentInfo {
  cardNumber: string
  expiryDate: string
  cvc: string
  nameOnCard: string
}

export interface CardDetails {
  cardNumber: string
  nameOnCard: string
  expiryDate: string
  cvc: string
} 