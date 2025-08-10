"use client";
import VideoBackground from "@/components/VideoBackground";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToArtists = () => {
    const artistsSection = document.getElementById("artists");
    artistsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className=" relative min-h-screen flex items-center justify-center md:mt-20"
    >
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            Welcome To
          </h1>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black text-gradient-gold mb-4 leading-none">
            KINGS PRODUCTIONS
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-gradient-gold mb-8">
            & MANAGEMENT
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light mb-12 max-w-3xl mx-auto">
            WHERE LEGEND HITS ARE MADE
          </p>
          <VideoBackground
            overlay={true}
            poster=""
            src="https://www.youtube.com/embed/1fOBgosDo7s?si=gQGbQKgjjinB-PCV"
            className="absolute inset-0 w-full h-full"
          />
          <button
            onClick={scrollToArtists}
            className="gold-button text-royal-dark px-8 py-4 rounded-full font-bold text-lg sm:text-xl hover:scale-110 transition-all duration-300 animate-pulse-glow my-10"
          >
            EXPLORE OUR TALENT
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gold-400" />
        </div>
      </div>
    </section>
  );
}
