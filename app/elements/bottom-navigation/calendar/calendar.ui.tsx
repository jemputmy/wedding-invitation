import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export interface CalendarDrawerInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarDrawer({
  open,
  onOpenChange,
}: CalendarDrawerInterface) {
  // Replace with your real event details
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Majlis+Perkahwinan&details=Sertai+kami+untuk+meraikan+hari+istimewa!&location=Dewan+Seri+Endon,+Putrajaya&dates=20250601T100000Z/20250601T140000Z";
  const appleCalendarUrl = "/calendar.ics"; // Serve an actual .ics file from your public folder

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Tambah ke Kalendar</DrawerTitle>
          <DrawerDescription>
            Gunakan pilihan di bawah untuk simpan tarikh ke kalendar anda.
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 py-6 space-y-4 text-center">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            <FaGoogle className="w-5 h-5" />
            Add to Google Calendar
          </a>

          <a
            href={appleCalendarUrl}
            download
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            <FaApple className="w-5 h-5" />
            Add to Apple Calendar
          </a>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
