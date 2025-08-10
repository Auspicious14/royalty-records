'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface AudioContextType {
  currentlyPlayingArtistId: string | null
  setCurrentlyPlayingArtistId: (artistId: string | null) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentlyPlayingArtistId, setCurrentlyPlayingArtistId] = useState<string | null>(null)

  return (
    <AudioContext.Provider
      value={{
        currentlyPlayingArtistId,
        setCurrentlyPlayingArtistId,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export const useAudioContext = (): AudioContextType => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudioContext must be used within an AudioContextProvider')
  }
  return context
}