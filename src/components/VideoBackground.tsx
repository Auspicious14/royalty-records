"use client";
import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoBackground({
  src = "/hero-bg.mp4",
  poster,
  className = "",
  overlay = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(console.error);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={src} type="video/mp4" />
        <div className="absolute inset-0 royal-gradient"></div>
      </video> */}
      
      {/* YouTube iframe with pointer-events-auto to ensure clicks work */}
      <div className="relative z-30 w-full h-full pointer-events-auto">
        <iframe
          width="100%"
          height="100%"
          src={src && src.includes('youtube.com') ? `${src}&enablejsapi=1` : src}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* {overlay && <div className="absolute inset-0 bg-black/60 z-10"></div>} */}

      {/* Animated overlay elements - moved to z-10 so they don't block video interaction */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-royal-purple/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </div>
  );
}
