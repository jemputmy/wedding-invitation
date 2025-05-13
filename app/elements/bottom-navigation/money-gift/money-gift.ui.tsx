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
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-hot-toast";

export interface CalendarDrawerInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MoneyGiftDrawer({
  open,
  onOpenChange,
}: CalendarDrawerInterface) {
  const accountName = "Amirul Irfan Bin Khairul Azreem";
  const accountNumber = "1234567890";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(accountNumber);
    toast.success("Account number copied!");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Sumbangan Wang</DrawerTitle>
          <DrawerDescription>
            Imbas kod QR atau salin nombor akaun untuk sumbangan ikhlas anda.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col items-center px-4 py-6 space-y-4 text-center">
          {/* QR Code Image */}
          <Image
            src="https://donate.sols.foundation/wp-content/uploads/2022/01/duitnow-qr-code-sols247.png" // Place this image in your /public folder
            alt="DuitNow QR"
            width={200}
            height={200}
            className="rounded-md border"
          />

          {/* Account Owner Name */}
          <div className="text-lg font-semibold">{accountName}</div>

          {/* Account Number with Copy Button */}
          <div className="flex items-center gap-2">
            <span className="text-base font-mono">{accountNumber}</span>
            <button
              onClick={handleCopy}
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Copy account number"
            >
              <FaCopy />
            </button>
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
