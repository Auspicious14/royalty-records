'use client'
import { useState } from 'react'
import { Play, Eye } from 'lucide-react'
import { SAMPLE_VIDEOS } from '@/utils/sampleData'

export default function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)


  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`
    return views.toString()
  }

  return (
    <section id="videos" className="py-24 bg-gradient-to-br from-royal-dark/90 to-royal-purple/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16 animate-slide-up">
          Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_VIDEOS.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden glass-effect hover:scale-105 transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-royal-dark ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gold-400 mb-2">{video.artist}</p>
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{formatViews(video.views)} views</span>
                  </div>
                  <span>{new Date(video.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal would go here */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${SAMPLE_VIDEOS.find(v => v.id === selectedVideo)?.youtubeId}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
