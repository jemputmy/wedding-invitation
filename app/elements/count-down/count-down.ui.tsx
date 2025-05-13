"use client";

import * as React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CountdownTimer() {
  const [eventDateInClientTZ, setEventDateInClientTZ] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const eventDate = new Date("2025-09-20T08:00:00Z");
    setEventDateInClientTZ(eventDate);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="text-center space-y-2">
          <Badge variant="success" className="text-lg py-2 px-4 rounded-full bg-green-100 text-green-800">
            Hari yang dinanti telah tiba! 🎉
          </Badge>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <TimeBox value={days} label="Hari" />
          <TimeBox value={hours} label="Jam" />
          <TimeBox value={minutes} label="Minit" />
          <TimeBox value={seconds} label="Saat" />
        </div>
      );
    }
  };

  if (!eventDateInClientTZ) return null;

  return (
    <div className="flex justify-center px-4 py-10">
      <Card className="w-full max-w-md bg-white text-black shadow-lg border border-gray-200">
        <CardHeader className="text-center space-y-2">
          <Badge variant="outline" className="text-black border-gray-400">
            Menghitung Hari
          </Badge>
          <CardTitle className="text-2xl font-bold text-black">
            Majlis Perkahwinan
          </CardTitle>
          <CardDescription className="text-gray-600">
            {eventDateInClientTZ.toLocaleString("ms-MY", {
              dateStyle: "full",
              timeStyle: "short",
              timeZone: "Asia/Kuala_Lumpur",
            })}
          </CardDescription>
          {/* Adding the event place */}
          <CardDescription className="text-gray-600 font-semibold">
            Tempat: Dewan Seri Endon, Putrajaya
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Countdown date={eventDateInClientTZ} renderer={renderer} />
        </CardContent>

        {/* Adding the Quranic prayer */}
        <CardContent className="space-y-2 text-center text-gray-600 text-xs mt-3">
  <p className="italic">
  Ya Allah Ya Rahman Ya Rahim,
berkatilah majlis perkahwinan ini.
Limpahkanlah baraqah dan rahmatMu kepada kedua-dua mempelai ini. Kurniakanlah mereka kelak zuriat yang soleh dan solehah. Kekalkanlah jodoh mereka hingga ke jannah.
Aamiin.
  </p>
  <p className="font-bold text-sm">Aamin, Ya Rabbal A'lamin</p>
</CardContent>

      </Card>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-sm p-3">
      <div className="text-2xl font-mono font-bold text-black">{value}</div>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}
