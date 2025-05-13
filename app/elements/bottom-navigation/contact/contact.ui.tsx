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
import { ScrollArea } from "@/components/ui/scroll-area";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

export interface CalendarDrawerInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ContactPerson {
  name: string;
  phone: string;
  designation: string;
}

const contacts: ContactPerson[] = [
  { name: "Amirul Irfan", phone: "+60196643494", designation: "Bapa Pengantin Lelaki" },
  { name: "Syazwan Salleh", phone: "+60123456789", designation: "Bapa Pengantin Perempuan" },
  { name: "Nadia Aiman", phone: "+60198765432", designation: "Pengantin Lelaki" },
];

export function ContactDrawer({ open, onOpenChange }: CalendarDrawerInterface) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Hubungi Kami</DrawerTitle>
          <DrawerDescription>Terus hubungi sesiapa yang berkaitan.</DrawerDescription>
        </DrawerHeader>

        {/* Scrollable area */}
        <ScrollArea className="h-[300px] px-4 pb-6">
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="text-center border p-4 rounded-md shadow-sm bg-white"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    contact.name
                  )}`}
                  alt={contact.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-gray-500">{contact.designation}</p>
                <p className="text-gray-500">{contact.phone}</p>

                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={`https://wa.me/${contact.phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Tutup
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
