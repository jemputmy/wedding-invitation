"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;
    setOpen(true);
    document.getElementById('playButton')?.click();
  }, []);

  const handlePlayMusic = () => {
    audioRef.current?.play();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none rounded-none p-0">
        <div className="h-full flex flex-col relative">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <video
              src="https://xhpugefhcgqjkanhmanu.supabase.co/storage/v1/object/public/wedding-video//weddingVideoFLying.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Elegant Centered Text */}
          <div className="flex-grow flex items-center justify-center px-4">
            <div className="text-center max-w-2xl space-y-6">
              {/* Decorative Top Element */}
              <div className="flex justify-center">
                <div className="h-px w-16 bg-white/50 mb-6"></div>
              </div>

              {/* Main Invitation Text */}
              <h1 className="text-5xl md:text-6xl font-light tracking-wider text-white font-playfair leading-tight">
                Raikan Cinta
              </h1>
              
              <div className="py-2">
                <h2 className="text-6xl md:text-7xl font-medium text-white font-cormorant leading-none mb-2">
                  Amirul
                </h2>
                <span className="text-3xl text-white/80 font-light">&</span>
                <h2 className="text-6xl md:text-7xl font-medium text-white font-cormorant leading-none mt-2">
                  Aisyah
                </h2>
              </div>

              <div className="text-xl md:text-2xl font-light tracking-widest text-white/90 font-montserrat uppercase">
                Menjemput anda semua
              </div>

              {/* Date and Location */}
              <div className="pt-6 space-y-1 font-montserrat">
                <div className="text-lg md:text-xl text-white/90 tracking-wider">
                  20 September 2025
                </div>
                <div className="text-base md:text-lg text-white/80 font-light">
                  Wedding Galore Sungai Buah
                </div>
              </div>

              {/* Decorative Bottom Element */}
              <div className="flex justify-center pt-6">
                <div className="h-px w-16 bg-white/50 mt-6"></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <DialogFooter className="p-6 bg-white/5 backdrop-blur-sm rounded-full sm:justify-center gap-4 border border-white/20">
              <DialogClose asChild>
                <Button
                  id="playButton"
                  className="bg-white/90 hover:bg-white text-gray-900 px-8 py-4 text-lg rounded-full font-medium tracking-wide transition-all hover:scale-105 shadow-lg"
                  onClick={handlePlayMusic}
                >
                  Buka Jemputan
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default IsPlayMusicDialog;