"use client";
import { useState, useEffect } from "react";
import { useMusicContext } from "../context";
import { Music } from "../model";
import {
  Play,
  Pause,
  Download,
  ExternalLink,
  Filter,
  X,
  YoutubeIcon,
} from "lucide-react";
import { useArtistsContext } from "@/modules/artist/context";

export default function MusicSection() {
  const {
    filteredMusic,
    filterByArtist,
    filterByGenre,
    currentFilter,
    resetFilters,
  } = useMusicContext();
  const { artists } = useArtistsContext();
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [uniqueGenres, setUniqueGenres] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique genres from music
    const genres = Array.from(new Set(filteredMusic.map((song) => song.genre)));
    setUniqueGenres(genres);
  }, [filteredMusic]);

  const handlePlay = (musicId: string) => {
    if (currentPlaying === musicId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(musicId);
    }
  };

  const formatEmbedUrl = (url: string) => {
    if (!url) return "";

    // Handle Spotify URLs
    if (url.includes("spotify.com")) {
      // Remove any query parameters
      const baseUrl = url.split("?")[0];

      // Check if it's already an embed URL
      if (baseUrl.includes("/embed/")) {
        return `${baseUrl}?utm_source=generator`;
      }

      // Replace the base URL with the embed version
      return (
        baseUrl.replace(
          "https://open.spotify.com/",
          "https://open.spotify.com/embed/"
        ) + "?utm_source=generator"
      );
    }

    // Handle Audiomack URLs
    if (url.includes("audiomack.com")) {
      const parts = url.split("/");
      const artist = parts[parts.length - 3];
      const songName = parts[parts.length - 1];

      return `https://audiomack.com/embed/song/${artist}/${songName}?background=1`;
    }

    return url;
  };

  return (
    <section
      id="music"
      className="py-24 bg-gradient-to-br from-royal-blue/90 to-royal-dark/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center md:text-left mb-6 md:mb-0 animate-slide-up">
            Music
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
                      className={`px-3 py-1 rounded-full text-sm ${
                        currentFilter.type === "artist" &&
                        currentFilter.value === artist.id
                          ? "bg-gold-500 text-royal-dark"
                          : "bg-white/10 text-white hover:bg-white/20"
                      } transition-colors`}
                    >
                      {artist.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">
                  Filter by Genre
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueGenres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => filterByGenre(genre)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        currentFilter.type === "genre" &&
                        currentFilter.value === genre
                          ? "bg-gold-500 text-royal-dark"
                          : "bg-white/10 text-white hover:bg-white/20"
                      } transition-colors`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMusic.map((song, index) => (
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
                    {currentPlaying === song.id ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">
                    {song.title}
                  </h3>
                  <p className="text-gold-400 text-sm">{song.artist}</p>
                  <p className="text-white/60 text-xs">{song.duration}</p>
                </div>
              </div>

              {/* Embedded Player */}
              {currentPlaying === song.id && (
                <div className="mb-4 h-[80px] overflow-hidden rounded-lg">
                  <iframe
                    src={formatEmbedUrl(song.audioUrl)}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {song.downloadUrl && (
                    <a
                      href={song.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      title="Download"
                    >
                      <Download className="h-4 w-4 text-white" />
                    </a>
                  )}

                  <div className="relative group">
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </button>

                    {/* Streaming Links Dropdown */}
                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-royal-dark border border-gold-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div className="p-2 space-y-1">
                        {song.streamingLinks.spotify && (
                          <a
                            href={song.streamingLinks.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors w-full text-left"
                          >
                            <img
                              src="/socials/spotify-icon.png"
                              alt="Spotify"
                              className="w-4 h-4"
                            />
                            <span className="text-white text-sm">Spotify</span>
                          </a>
                        )}

                        {song.streamingLinks.appleMusic && (
                          <a
                            href={song.streamingLinks.appleMusic}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors w-full text-left"
                          >
                            <img
                              src="/socials/apple-music-icon.png"
                              alt="Apple Music"
                              className="w-4 h-4"
                            />
                            <span className="text-white text-sm">
                              Apple Music
                            </span>
                          </a>
                        )}

                        {song.streamingLinks.youtube && (
                          <a
                            href={song.streamingLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors w-full text-left"
                          >
                            <img
                              src="/socials/youtube-icon.png"
                              alt="YouTube"
                              className="w-4 h-4"
                            />
                            <span className="text-white text-sm">YouTube</span>
                          </a>
                        )}

                        {song.streamingLinks.audiomack && (
                          <a
                            href={song.streamingLinks.audiomack}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors w-full text-left"
                          >
                            <img
                              src="/socials/audiomack-logo.png"
                              alt="Audiomack"
                              className="w-4 h-4"
                            />
                            <span className="text-white text-sm">
                              Audiomack
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => filterByGenre(song.genre)}
                  className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  {song.genre}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
