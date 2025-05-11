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
    // Create audio element on mount
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mainkan Lagu?</DialogTitle>
          <DialogDescription>
            Background music can enhance your experience. Would you like to turn it on?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button className="bg-pink-500 text-white" onClick={handlePlayMusic}>
              Yes
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="bg-gray-300 text-black">
              No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default IsPlayMusicDialog;
