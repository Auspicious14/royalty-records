"use client";
import { useState, useEffect } from "react";
import { Play, Eye, Filter, X, Calendar, User } from "lucide-react";
import { useVideoContext } from "../context";
import { useArtistsContext } from "@/modules/artist/context";

export default function VideosSection() {
  const {
    filteredVideos,
    filterByArtist,
    sortByNewest,
    currentFilter,
    resetFilters,
  } = useVideoContext();
  const { artists } = useArtistsContext();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <section
      id="videos"
      className="py-24 bg-gradient-to-br from-royal-dark/90 to-royal-purple/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center md:text-left mb-6 md:mb-0 animate-slide-up">
            Videos
          </h2>

          <div className="flex items-center space-x-4">
            {currentFilter.type && (
              <button
                onClick={resetFilters}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <span>Clear Filter</span>
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gold-500 rounded-full text-royal-dark font-medium hover:bg-gold-400 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="glass-effect p-6 rounded-xl mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">
                  Filter by Artist
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artists.map((artist) => (
                    <button
                      key={artist.id}
                      onClick={() => filterByArtist(artist.id)}
                      className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                        currentFilter.type === "artist" &&
                        currentFilter.value === artist.id
                          ? "bg-gold-500 text-royal-dark"
                          : "bg-white/10 text-white hover:bg-white/20"
                      } transition-colors`}
                    >
                      <User className="h-3 w-3" />
                      <span>{artist.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Sort Options</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={sortByNewest}
                    className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                      currentFilter.type === "sort" &&
                      currentFilter.value === "newest"
                        ? "bg-gold-500 text-royal-dark"
                        : "bg-white/10 text-white hover:bg-white/20"
                    } transition-colors`}
                  >
                    <Calendar className="h-3 w-3" />
                    <span>Newest First</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
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
                  <span>
                    {new Date(video.releaseDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-royal-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gold-500/30">
              <div className="aspect-video">
                <iframe
                  src={`${
                    filteredVideos.find((v) => v.id === selectedVideo)?.videoUrl
                  }`}
                  // src={`https://www.youtube.com/embed/${filteredVideos.find(v => v.id === selectedVideo)?.youtubeId}`}
                  className="w-full h-full"
                  allowFullScreen
                  title="Youtube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold text-white">
                    {filteredVideos.find((v) => v.id === selectedVideo)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-white bg-royal-purple/50 rounded-full p-2 hover:bg-royal-purple/70 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gold-400 mb-2">
                  {filteredVideos.find((v) => v.id === selectedVideo)?.artist}
                </p>
                <p className="text-white/70 text-sm mb-4">
                  {
                    filteredVideos.find((v) => v.id === selectedVideo)
                      ?.description
                  }
                </p>
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>
                      {formatViews(
                        filteredVideos.find((v) => v.id === selectedVideo)
                          ?.views || 0
                      )}{" "}
                      views
                    </span>
                  </div>
                  <span>
                    {new Date(
                      filteredVideos.find((v) => v.id === selectedVideo)
                        ?.releaseDate || ""
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
