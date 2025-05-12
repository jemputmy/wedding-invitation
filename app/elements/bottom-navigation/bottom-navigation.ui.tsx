"use client";

import {
  CalendarIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function BottomDock() {
  const handleCalendar = () => {
    console.log("Calendar clicked");
  };

  const handleGift = () => {
    console.log("Gift clicked");
  };

  const handleLocation = () => {
    console.log("Location clicked");
  };

  const handleContact = () => {
    console.log("Contact clicked");
  };

  const handleRSVP = () => {
    console.log("RSVP clicked");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm z-50">
      <div className="flex justify-around items-center py-2">
        <button
          onClick={handleCalendar}
          className="flex flex-col items-center text-gray-500 hover:text-black active:text-black cursor-pointer transition-colors"
        >
          <CalendarIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Calendar</span>
        </button>

        <button
          onClick={handleGift}
          className="flex flex-col items-center text-gray-500 hover:text-black active:text-black cursor-pointer transition-colors"
        >
          <GiftIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Gift</span>
        </button>

        <button
          onClick={handleLocation}
          className="flex flex-col items-center text-gray-500 hover:text-black active:text-black cursor-pointer transition-colors"
        >
          <MapPinIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Location</span>
        </button>

        <button
          onClick={handleContact}
          className="flex flex-col items-center text-gray-500 hover:text-black active:text-black cursor-pointer transition-colors"
        >
          <PhoneIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Contact</span>
        </button>

        <button
          onClick={handleRSVP}
          className="flex flex-col items-center text-gray-500 hover:text-black active:text-black cursor-pointer transition-colors"
        >
          <PencilSquareIcon className="w-6 h-6" />
          <span className="text-xs mt-1">RSVP</span>
        </button>
      </div>
    </div>
  );
}
