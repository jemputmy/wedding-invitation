"use client";
import { backgroundVideoConfig } from "@/app/config/config-app-environment";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export default function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;
    setOpen(true);
  }, []);

  const handlePlayMusic = () => {
    audioRef.current?.play();
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      {/* Step 1: Remove all padding/borders from DialogContent */}
      <DialogContent 
        className="fixed inset-0 w-screen h-screen max-w-none max-h-none p-0 border-0 bg-transparent"
        style={{
          // Force remove any remaining styling
          borderRadius: '0',
          boxShadow: 'none',
          outline: 'none',
          margin: '0', // Ensures no margin
        }}
      >
        {/* Step 2: Use negative inset to bleed video edges */}
        <div className="absolute inset-[-1px] overflow-hidden">
          <video
            src={backgroundVideoConfig.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Step 3: Keep button centered (no negative margins) */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <DialogClose asChild>
            <Button
              id="playButton"
              className="bg-white/90 hover:bg-white text-gray-900 px-8 py-4 text-lg rounded-full font-medium tracking-wide transition-all hover:scale-105 shadow-lg"
              onClick={handlePlayMusic}
            >
              Buka Jemputan
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}