'use client'
import { useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { Music } from '@/utils/constants'
import { Play, Download, ExternalLink } from 'lucide-react'

export default function MusicSection() {
  const { music } = useAppContext()
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null)

  // Sample data for demonstration
  const sampleMusic: Music[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Artist Name',
      artistId: '1',
      audioUrl: '/sample.mp3',
      genre: 'Hip Hop',
      duration: '3:45',
      releaseDate: '2024-01-01',
      image: '/api/placeholder/300/300',
      streamingLinks: {
        spotify: '#',
        appleMusic: '#',
        youtube: '#'
      }
    },
    // Add more sample songs...
  ]

  const handlePlay = (musicId: string) => {
    if (currentPlaying === musicId) {
      setCurrentPlaying(null)
    } else {
      setCurrentPlaying(musicId)
    }
  }

  return (
    <section id="music" className="py-24 bg-gradient-to-br from-royal-blue/90 to-royal-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16 animate-slide-up">
          Music
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleMusic.map((song, index) => (
            <div
              key={song.id}
              className="glass-effect p-6 rounded-xl hover:bg-white/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <button
                    onClick={() => handlePlay(song.id)}
                    className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">{song.title}</h3>
                  <p className="text-gold-400 text-sm">{song.artist}</p>
                  <p className="text-white/60 text-xs">{song.duration}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {song.downloadUrl && (
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Download className="h-4 w-4 text-white" />
                    </button>
                  )}
                  <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </button>
                </div>
                
                <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                  {song.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
