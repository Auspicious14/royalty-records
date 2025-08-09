export interface Artist {
  id: string
  name: string
  bio: string
  image: string
  audioPreview?: string
  videoPreview?: string
  genres: string[]
  socialLinks: {
    instagram?: string
    twitter?: string
    youtube?: string
    spotify?: string
  }
  bookingEmail?: string
  verified: boolean
  monthlyListeners: number
  createdAt?: string
  updatedAt?: string
}

export interface BookingRequest {
  artistId: string
  clientName: string
  clientEmail: string
  clientPhone: string
  eventType: 'concert' | 'private_event' | 'corporate' | 'festival' | 'other'
  eventDate: string
  eventLocation: string
  budget: number
  duration: number // in hours
  additionalRequirements?: string
  message?: string
}

export interface BookingResponse {
  id: string
  artistId: string
  clientName: string
  clientEmail: string
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
  eventDetails: {
    type: string
    date: string
    location: string
    duration: number
  }
  financials: {
    budget: number
    finalPrice?: number
  }
  createdAt: string
  updatedAt: string
}
