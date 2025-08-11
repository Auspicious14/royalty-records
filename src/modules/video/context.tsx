'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Video } from './model'
import { SAMPLE_VIDEOS } from '@/utils/sampleData'

interface VideoContextProps {
  videos: Video[];
  filteredVideos: Video[];
  filterByArtist: (artistId: string | null) => void;
  sortByNewest: () => void;
  currentFilter: {
    type: 'artist' | 'sort' | null;
    value: string | null;
  };
  resetFilters: () => void;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined)

export const useVideoContext = () => {
  const context = useContext(VideoContext)
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoContextProvider')
  }
  return context
}

interface VideoContextProviderProps {
  children: ReactNode
}

export const VideoContextProvider = ({ children }: VideoContextProviderProps) => {
  const [videos] = useState<Video[]>(SAMPLE_VIDEOS)
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(SAMPLE_VIDEOS)
  const [currentFilter, setCurrentFilter] = useState<{
    type: 'artist' | 'sort' | null;
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
    
    const filtered = videos.filter(video => video.artistId === artistId)
    setFilteredVideos(filtered)
    setCurrentFilter({
      type: 'artist',
      value: artistId
    })
  }

  const sortByNewest = () => {
    const sorted = [...filteredVideos].sort((a, b) => {
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    })
    
    setFilteredVideos(sorted)
    setCurrentFilter({
      type: 'sort',
      value: 'newest'
    })
  }

  const resetFilters = () => {
    setFilteredVideos(videos)
    setCurrentFilter({
      type: null,
      value: null
    })
  }

  return (
    <VideoContext.Provider
      value={{
        videos,
        filteredVideos,
        filterByArtist,
        sortByNewest,
        currentFilter,
        resetFilters
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}