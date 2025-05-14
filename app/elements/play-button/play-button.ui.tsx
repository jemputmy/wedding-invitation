'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";

export function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/song.mp3');
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
        <div className="h-full flex flex-col">
          <DialogHeader className="p-6 bg-pink-50">
            <DialogTitle className="text-2xl">Mainkan Lagu?</DialogTitle>
            <DialogDescription className="text-lg">
              Background music can enhance your experience. Would you like to turn it on?
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 p-6 flex items-center justify-center">
            {/* Optional: Add a music visualizer or cover art here */}
            <div className="text-center">
              <p className="mb-4">🎵 Music will play in the background 🎵</p>
            </div>
          </div>

          <DialogFooter className="p-6 bg-gray-50 sm:justify-center gap-4">
            <DialogClose asChild>
              <Button 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg"
                onClick={handlePlayMusic}
              >
                Yes, Play Music
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 text-lg"
                variant="outline"
              >
                No Thanks
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default IsPlayMusicDialog