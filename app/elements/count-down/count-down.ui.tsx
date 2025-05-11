"use client";

import * as React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Calendar } from "@/components/ui/calendar";  // Assuming this is a wrapper around React Date Picker
import { toZonedTime } from "date-fns-tz";

export default function CountdownTimer() {
  const eventDate = new Date("2025-09-20T08:00:00Z");
  const eventDateInTimezone = toZonedTime(eventDate, "Asia/Kuala_Lumpur");

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <span className="text-xl font-semibold text-green-600">
          Hari yang dinanti telah tiba!
        </span>
      );
    } else {
      return (
        <span className="text-2xl font-mono font-bold text-gray-900">
          {days} Hari {hours} Jam {minutes} Minit {seconds} Saat
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 py-10">
      <h2 className="text-3xl font-extrabold italic text-gray-800">
        Menghitung Hari
      </h2>

      <div className="text-lg text-gray-700">
        Tarikh Majlis:{" "}
        <span className="font-semibold">
          {eventDateInTimezone.toLocaleString("ms-MY", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "Asia/Kuala_Lumpur",
          })}
        </span>
      </div>

      <Countdown date={eventDateInTimezone} renderer={renderer} />
    </div>
  );
}
