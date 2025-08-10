'use client'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ArtistsSection from '@/modules/artist/components/ArtistGrid'
import MusicSection from '@/modules/music/components/MusicGrid'
import VideosSection from '@/modules/video/components/VideoGrid'
import ContactSection from '@/modules/contact/components/ContactInfo'

export default function HomePage() {
  

  return (
    <div className="royal-gradient min-h-screen">
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
      <MusicSection />
      <VideosSection />
      <ContactSection />
    </div>
  )
}
