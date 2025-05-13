"use client";

import {
  CalendarIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { CalendarDrawer } from "./calendar/calendar.ui";
import { LocationDrawer } from "./location/location.ui";
import { ContactDrawer } from "./contact/contact.ui";
import { MoneyGiftDrawer } from "./money-gift/money-gift.ui";

export default function BottomDock() {

  const handleRSVP = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const [isCalendarDrawerOpen, setIsCalendarDrawerOpen] = useState(false);
  const openCalendarDrawer = () => setIsCalendarDrawerOpen(true);

  const [isMoneyGiftDrawerOpen, setIsMoneyGiftDrawerOpen] = useState(false);
  const openMoneyGiftDrawer = () => setIsMoneyGiftDrawerOpen(true);

  const [isLocationDrawerOpen, setIsLocationDrawerOpen] = useState(false);
  const openLocationDrawer = () => setIsLocationDrawerOpen(true);

  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const openContactDrawer = () => setIsContactDrawerOpen(true);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm z-50">
  <div className="flex justify-around items-center py-2">
    <button onClick={openCalendarDrawer} className="flex-1 flex flex-col items-center text-gray-500 hover:text-black">
      <CalendarIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Kalendar</span>
    </button>
    <button onClick={openMoneyGiftDrawer} className="flex-1 flex flex-col items-center text-gray-500 hover:text-black">
      <GiftIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Money Gift</span>
    </button>
    <button onClick={openLocationDrawer} className="flex-1 flex flex-col items-center text-gray-500 hover:text-black">
      <MapPinIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Lokasi</span>
    </button>
    <button onClick={openContactDrawer} className="flex-1 flex flex-col items-center text-gray-500 hover:text-black">
      <PhoneIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Hubungi</span>
    </button>
    <button onClick={handleRSVP} className="flex-1 flex flex-col items-center text-gray-500 hover:text-black">
      <PencilSquareIcon className="w-6 h-6" />
      <span className="text-xs mt-1">RSVP</span>
    </button>
  </div>

  {/* Drawer components MUST be rendered */}
  <CalendarDrawer open={isCalendarDrawerOpen} onOpenChange={setIsCalendarDrawerOpen} />
  <MoneyGiftDrawer open={isMoneyGiftDrawerOpen} onOpenChange={setIsMoneyGiftDrawerOpen} />
  <LocationDrawer open={isLocationDrawerOpen} onOpenChange={setIsLocationDrawerOpen} />
  <ContactDrawer open={isContactDrawerOpen} onOpenChange={setIsContactDrawerOpen} />
</div>

  );
}
