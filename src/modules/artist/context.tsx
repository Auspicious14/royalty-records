'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { apiClient } from '@/lib/api'
import { Artist, BookingRequest } from './models'
import { SAMPLE_ARTISTS } from '@/utils/sampleData'
import toast from 'react-hot-toast'

interface ArtistsContextType {
  artists: Artist[]
  selectedArtist: Artist | null
  isLoading: boolean
  isBookingLoading: boolean
  error: string | null
  // CRUD Operations
  fetchArtists: () => Promise<void>
  fetchArtistById: (id: string) => Promise<void>
  createArtist: (artistData: Partial<Artist>) => Promise<Artist | null>
  updateArtist: (id: string, artistData: Partial<Artist>) => Promise<Artist | null>
  deleteArtist: (id: string) => Promise<boolean>
  // Booking Operations
  submitBookingRequest: (bookingData: BookingRequest) => Promise<boolean>
  // Utility
  clearError: () => void
  setSelectedArtist: (artist: Artist | null) => void
}

const ArtistsContext = createContext<ArtistsContextType | undefined>(undefined)

export const ArtistsContextProvider = ({ children }: { children: ReactNode }) => {
  const [artists, setArtists] = useState<Artist[]>([])
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isBookingLoading, setIsBookingLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Time Complexity: O(1) - constant time
  // Space Complexity: O(1) - constant space
  const clearError = () => {
    setError(null)
  }

  // Time Complexity: O(n) where n is the number of artists
  // Space Complexity: O(n) for storing artists array
  const fetchArtists = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await apiClient.get('/artists')
      setArtists(response.data || SAMPLE_ARTISTS)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch artists')
      // Fallback to sample data
      setArtists(SAMPLE_ARTISTS)
      console.warn('Using sample data due to API error:', err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Time Complexity: O(1) for API call, O(n) for array search if needed
  // Space Complexity: O(1)
  const fetchArtistById = async (id: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await apiClient.get(`/artists/${id}`)
      setSelectedArtist(response.data)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch artist')
      // Fallback to sample data
      const sampleArtist = SAMPLE_ARTISTS.find(artist => artist.id === id)
      if (sampleArtist) {
        setSelectedArtist(sampleArtist)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Time Complexity: O(1) for API call, O(n) for state update
  // Space Complexity: O(1)
  const createArtist = async (artistData: Partial<Artist>): Promise<Artist | null> => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await apiClient.post('/artists', artistData)
      const newArtist = response.data
      setArtists(prev => [...prev, newArtist])
      toast.success('Artist created successfully!')
      return newArtist
    } catch (err: any) {
      setError(err.message || 'Failed to create artist')
      toast.error('Failed to create artist')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  // Time Complexity: O(1) for API call, O(n) for array update
  // Space Complexity: O(n) for creating new array
  const updateArtist = async (id: string, artistData: Partial<Artist>): Promise<Artist | null> => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await apiClient.put(`/artists/${id}`, artistData)
      const updatedArtist = response.data
      
      setArtists(prev => prev.map(artist => 
        artist.id === id ? updatedArtist : artist
      ))
      
      if (selectedArtist?.id === id) {
        setSelectedArtist(updatedArtist)
      }
      
      toast.success('Artist updated successfully!')
      return updatedArtist
    } catch (err: any) {
      setError(err.message || 'Failed to update artist')
      toast.error('Failed to update artist')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  // Time Complexity: O(1) for API call, O(n) for array filter
  // Space Complexity: O(n) for creating new array
  const deleteArtist = async (id: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)
    
    try {
      await apiClient.delete(`/artists/${id}`)
      setArtists(prev => prev.filter(artist => artist.id !== id))
      
      if (selectedArtist?.id === id) {
        setSelectedArtist(null)
      }
      
      toast.success('Artist deleted successfully!')
      return true
    } catch (err: any) {
      setError(err.message || 'Failed to delete artist')
      toast.error('Failed to delete artist')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Time Complexity: O(1) for API call
  // Space Complexity: O(1)
  const submitBookingRequest = async (bookingData: BookingRequest): Promise<boolean> => {
    setIsBookingLoading(true)
    setError(null)
    
    try {
      await apiClient.post('/bookings', bookingData)
      toast.success('Booking request submitted successfully!')
      return true
    } catch (err: any) {
      setError(err.message || 'Failed to submit booking request')
      toast.error('Failed to submit booking request')
      return false
    } finally {
      setIsBookingLoading(false)
    }
  }

  useEffect(() => {
    fetchArtists()
  }, [])

  const value: ArtistsContextType = {
    artists,
    selectedArtist,
    isLoading,
    isBookingLoading,
    error,
    fetchArtists,
    fetchArtistById,
    createArtist,
    updateArtist,
    deleteArtist,
    submitBookingRequest,
    clearError,
    setSelectedArtist,
  }

  return (
    <ArtistsContext.Provider value={value}>
      {children}
    </ArtistsContext.Provider>
  )
}

export const useArtistsContext = () => {
  const context = useContext(ArtistsContext)
  if (context === undefined) {
    throw new Error('useArtistsContext must be used within an ArtistsContextProvider')
  }
  return context
}
