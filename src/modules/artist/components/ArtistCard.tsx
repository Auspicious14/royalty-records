"use client";
import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Artist } from "../model";

interface ArtistCardProps {
  artist: Artist;
  delay?: number;
}

export default function ArtistCard({ artist, delay = 0 }: ArtistCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [audio] = useState(
    new Audio(
      "https://audio.bfmtv.com/bfmbusiness_128.mp3?aw_0_1st.playerId=AudioPlayer_Web_Next"
    )
  );

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      console.log("pause");
      audio.pause();
      console.log({ audio });
    } else {
      console.log("play");
      audio.play();
    }
  };

  const handleBooking = () => {
    setShowBooking(true);
    // Open booking modal or form
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden glass-effect hover:scale-105 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Artist Image/Video */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-royal-dark ml-1" />
            ) : (
              <Play className="h-8 w-8 text-royal-dark ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Artist Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-2">
          {artist.name}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">{artist.bio}</p>

        <button
          onClick={handleBooking}
          className="w-full gold-button text-royal-dark py-2 px-4 rounded-lg font-bold text-sm hover:scale-105 transition-transform"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
