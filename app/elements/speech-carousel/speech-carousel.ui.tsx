"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchRsvp } from "./speech-carousel.server";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area"; // Make sure this is imported
import { CheckCircle2 } from "lucide-react"; // Add this at the top with other imports

// Define RsvpData type
type RsvpData = {
  name: string;
  speech: string;
  isAttend: boolean;
  total_person: number;
  avatarUrl: string;
};

export function SpeechCarousel() {
  const [rsvpList, setRsvpList] = useState<RsvpData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchRsvp();
        setRsvpList(res);
      } catch (err) {
        console.error("Failed to load RSVP data", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-2xl md:text-4xl italic underline text-gray-900 text-center mb-5">
        Senarai Ucapan
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {rsvpList.map((item, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1">
                <Card className="w-full bg-white shadow-md">
                  <CardContent className="flex flex-col gap-4 p-4 md:p-6 min-h-[150px]">
                    {/* Avatar and Name */}
                    <div className="flex items-center gap-3">
                      <Avatar className="bg-white">
                        <AvatarImage
                          src={
                            item.avatarUrl || "https://via.placeholder.com/150"
                          }
                          alt={item.name}
                        />
                        <AvatarFallback>
                          {item.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-lg md:text-2xl font-bold text-gray-800 break-words">
                        {item.name}
                      </span>
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        {item.isAttend && (
                          <>
                            <CheckCircle2
                              className="w-4 h-4"
                            />
                            <span>
                              Hadir{" "}
                              {item.total_person === 1
                                ? "seorang"
                                : `${item.total_person} orang`}
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    {/* Quote and Speech */}
                    <div className="flex items-start gap-2">
                      <Quote className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                      <ScrollArea className="max-h-40 overflow-auto max-w-[calc(100%-1.75rem)]">
                        <p className="text-sm md:text-base italic text-gray-700 whitespace-pre-line break-words">
                          "{item.speech}"
                        </p>
                      </ScrollArea>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="bg-pink-500 text-white hover:bg-pink-600" />
          <CarouselNext className="bg-pink-500 text-white hover:bg-pink-600" />
        </div>
      </Carousel>
    </div>
  );
}

export default SpeechCarousel;
