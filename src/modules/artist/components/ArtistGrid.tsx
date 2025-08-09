'use client'
import { SAMPLE_ARTISTS } from '../context'
import ArtistCard from './ArtistCard'

export default function ArtistsSection() {
  const { artists } useArtistsContext()


  return (
    <section id="artists" className="py-24 bg-gradient-to-br from-royal-purple/90 to-royal-blue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16 animate-slide-up">
          Artists
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
