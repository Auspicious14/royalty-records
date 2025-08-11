"use client";
import { ReactNode } from "react";
import { ArtistsContextProvider } from "@/modules/artist/context";
import { MusicContextProvider } from "@/modules/music/context";
//import { VideosContextProvider } from '@/modules/videos/context'
//import { ContactContextProvider } from '@/modules/contact/context'
//import { HomeContextProvider } from '@/modules/home/context'
import { Toaster } from "react-hot-toast";

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    // <HomeContextProvider>
    <ArtistsContextProvider>
      <MusicContextProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1a1a2e",
              color: "#fff",
              border: "1px solid #ffd700",
            },
            success: {
              iconTheme: {
                primary: "#ffd700",
                secondary: "#1a1a2e",
              },
            },
            error: {
              iconTheme: {
                primary: "#e94560",
                secondary: "#1a1a2e",
              },
            },
          }}
        />
      </MusicContextProvider>
    </ArtistsContextProvider>
  );
};
