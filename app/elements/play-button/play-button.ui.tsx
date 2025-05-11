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
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Button } from "@/components/ui/button";

export function IsPlayMusicDialog() {
  const [open, setOpen] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Initialize sound with no preload
  const [play, { stop }] = useSound('/song.mp3', {
    interrupt: true,
    preload: false,
    html5: true // Important for iOS
  });

  useEffect(() => {
    // Check if user is on iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Create a new AudioContext if needed (for iOS)
    if (isIOS) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContext.resume().then(() => {
        play();
      });
    } else {
      play();
    }
    setOpen(false);
  };

  const handleNoClick = () => {
    setOpen(false);
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
            <Button 
              className="bg-pink-500 text-black" 
              type="button" 
              variant="secondary" 
              onClick={handleClick}
            >
              Yes
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button 
              className="bg-pink-500 text-black" 
              type="button" 
              variant="secondary" 
              onClick={handleNoClick}
            >
              No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default IsPlayMusicDialog;