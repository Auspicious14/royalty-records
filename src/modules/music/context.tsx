'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Music } from './model'
import { SAMPLE_MUSIC } from '@/utils/sampleData'

interface MusicContextProps {
  music: Music[];
  filteredMusic: Music[];
  filterByArtist: (artistId: string | null) => void;
  filterByGenre: (genre: string | null) => void;
  currentFilter: {
    type: 'artist' | 'genre' | null;
    value: string | null;
  };
  resetFilters: () => void;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined)

export const useMusicContext = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicContextProvider')
  }
  return context
}

interface MusicContextProviderProps {
  children: ReactNode
}

export const MusicContextProvider = ({ children }: MusicContextProviderProps) => {
  const [music] = useState<Music[]>(SAMPLE_MUSIC)
  const [filteredMusic, setFilteredMusic] = useState<Music[]>(SAMPLE_MUSIC)
  const [currentFilter, setCurrentFilter] = useState<{
    type: 'artist' | 'genre' | null;
    value: string | null;
  }>({
    type: null,
    value: null
  })

  const filterByArtist = (artistId: string | null) => {
    if (!artistId) {
      resetFilters()
      return
    }
    
    const filtered = music.filter(song => song.artistId === artistId)
    setFilteredMusic(filtered)
    setCurrentFilter({
      type: 'artist',
      value: artistId
    })
  }

  const filterByGenre = (genre: string | null) => {
    if (!genre) {
      resetFilters()
      return
    }
    
    const filtered = music.filter(song => song.genre === genre)
    setFilteredMusic(filtered)
    setCurrentFilter({
      type: 'genre',
      value: genre
    })
  }

  const resetFilters = () => {
    setFilteredMusic(music)
    setCurrentFilter({
      type: null,
      value: null
    })
  }

  return (
    <MusicContext.Provider
      value={{
        music,
        filteredMusic,
        filterByArtist,
        filterByGenre,
        currentFilter,
        resetFilters
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}