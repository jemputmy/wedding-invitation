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
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Button } from "@/components/ui/button";

export function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);

  // Only load the sound, do not autoplay or preload
  const [play] = useSound('song.mp3', {
    interrupt: true,
    // Prevent early loading or autoplay (important for mobile)
    preload: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    play();         // Safe to play here (after user gesture)
    setOpen(false); // Close dialog after playing
  };

  const handleNoClick = () => {
    setOpen(false); // Just close dialog
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-black">
        <DialogHeader>
          <DialogTitle className="text-black">Would you like to play music?</DialogTitle>
          <DialogDescription className="text-black">
            Background music can enhance your experience. Would you like to turn it on?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button className="bg-pink-500 text-black" type="button" variant="secondary" onClick={handleClick}>
              Yes
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="bg-pink-500 text-black" type="button" variant="secondary" onClick={handleNoClick}>
              No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default IsPlayMusicDialog;
