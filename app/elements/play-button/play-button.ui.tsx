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
import { Button } from "@/components/ui/button"

export function IsPlayMusicDialog() {
  const [play] = useSound('song.mp3');

  const handleClick = () => {
    play();
  };

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Would you like to play music?</DialogTitle>
          <DialogDescription>
            Background music can enhance your experience. Would you like to turn it on?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button className="bg-pink-500" type="button" variant="secondary" onClick={handleClick}>
                Yes
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="bg-pink-500" type="button" variant="secondary">
                No
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default IsPlayMusicDialog