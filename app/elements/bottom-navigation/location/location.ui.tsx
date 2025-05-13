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
import { FaMapMarkerAlt } from "react-icons/fa"; // Location marker icon
import { FiMap } from "react-icons/fi"; // Google Maps icon
import { AiOutlineCar } from "react-icons/ai"; // Waze icon

export interface CalendarDrawerInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationDrawer({
  open,
  onOpenChange,
}: CalendarDrawerInterface) {
  // Sample location URL (you can update with actual location data)
  const locationUrl = "https://www.google.com/maps?q=3.139003,101.6869"; // Kuala Lumpur coordinates
  
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Lokasi Kami</DrawerTitle>
          <DrawerDescription>Gunakan aplikasi di bawah untuk navigasi ke lokasi kami.</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 py-6 space-y-6 text-center">
          {/* Displaying icons with links */}
          <div className="space-y-4">
            <div>
              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                <FiMap className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>

            <div>
              <a
                href={`https://waze.com/ul?q=3.139003,101.6869`} // Waze link with sample coordinates
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                <AiOutlineCar className="w-5 h-5" />
                Navigate with Waze
              </a>
            </div>
          </div>
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
