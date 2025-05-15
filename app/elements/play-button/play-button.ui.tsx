"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayMusic = () => {
    audioRef.current?.play();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none rounded-none p-0">
        <div className="h-full flex flex-col relative">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {/* Video layer */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <video
              src="https://xhpugefhcgqjkanhmanu.supabase.co/storage/v1/object/public/wedding-video/Wedding-flying-birds.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Buttons on top */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <DialogFooter className="p-6 bg-white bg-opacity-70 rounded-md sm:justify-center gap-4">
              <DialogClose asChild>
                <Button
                  className="bg-white bg-opacity-100 hover:bg-opacity-90 text-black px-8 py-4 text-lg border-2 border-gray-300"
                  onClick={handlePlayMusic}
                >
                  Buka
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
