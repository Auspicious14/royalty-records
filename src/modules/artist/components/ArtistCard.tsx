"use client";
import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Artist } from "../model";
import { useArtistsContext } from "../context";
import { BookingModal } from "./BookingModal";

interface ArtistCardProps {
  artist: Artist;
  delay?: number;
}

export default function ArtistCard({ artist, delay = 0 }: ArtistCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { currentlyPlayingArtistId, setCurrentlyPlayingArtistId } =
    useArtistsContext();

  // Initialize audio when component mounts
  useEffect(() => {
    // For demo purposes, use a direct audio URL
    // In production, you would need to handle different streaming services differently
    // or use their APIs to get direct audio URLs
    const demoAudioUrl =
      "https://audio.bfmtv.com/bfmbusiness_128.mp3?aw_0_1st.playerId=AudioPlayer_Web_Next";
    const newAudio = new Audio(demoAudioUrl);

    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentlyPlayingArtistId(null);
    };

    newAudio.addEventListener("ended", handleAudioEnd);

    setAudio(newAudio);

    return () => {
      newAudio.pause();
      newAudio.removeEventListener("ended", handleAudioEnd);
      setIsPlaying(false);
    };
  }, [artist.audioPreview, setCurrentlyPlayingArtistId]);

  // Check if another artist's audio is playing and update UI accordingly
  useEffect(() => {
    if (
      currentlyPlayingArtistId !== null &&
      currentlyPlayingArtistId !== artist.id &&
      isPlaying &&
      audio
    ) {
      // Another artist is now playing, pause this one
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlayingArtistId, artist.id]);

  const handlePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setCurrentlyPlayingArtistId(null);
    } else {
      // If another artist is playing, the effect will handle stopping it
      setCurrentlyPlayingArtistId(artist.id);

      // Play this artist's audio
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback was prevented:", error);
            setIsPlaying(false);
            setCurrentlyPlayingArtistId(null);
          });
      }
    }
  };

  return (
    <>
      <div
        className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden glass-effect hover:scale-105 transition-all duration-300 animate-slide-up"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Artist Image/Video */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
              isPlaying ? "scale-105" : ""
            }`}
          />

          {/* Play Button Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 ${
              isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300 flex items-center justify-center`}
          >
            <button
              onClick={handlePlay}
              className={`w-16 h-16 ${
                isPlaying
                  ? "bg-gold-500 scale-110 animate-pulse"
                  : "bg-gold-400"
              } rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors transform hover:scale-110`}
              aria-label={isPlaying ? "Pause audio" : "Play audio preview"}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-royal-dark ml-1" />
              ) : (
                <Play className="h-8 w-8 text-royal-dark ml-1" />
              )}
            </button>
          </div>

          {/* Audio Playing Indicator */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400">
              <div className="h-full w-full bg-gold-500 animate-progress"></div>
            </div>
          )}
        </div>

        {/* Artist Info */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-white mb-2">
            {artist.name}
          </h3>
          <p className="text-white/70 text-sm mb-4 line-clamp-3">
            {artist.bio}
          </p>

          <button
            onClick={() => setModal(true)}
            className="w-full gold-button text-royal-dark py-2 px-4 rounded-lg font-bold text-sm hover:scale-105 transition-transform"
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <BookingModal
        artist={artist}
        isOpen={modal}
        onClose={() => setModal(!modal)}
      />
    </>
  );
}
