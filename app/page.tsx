// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui";
import IsPlayMusicDialog from "./elements/play-button/play-button.ui";
import SpeechCarousel from "./elements/speech-carousel/speech-carousel.ui";
import { CanvaDesign } from "./elements/canva-design/canva-dessign.ui";
import BaseBackground from "./elements/base-background/base-background.ui";

export default function Home() {
 return (
    <>
      <div>
        <CanvaDesign />
      </div>

      {/* Speech Carousel Section */}
      <div className="relative w-full overflow-hidden">
        <BaseBackground />
        <div className="absolute inset-0 flex justify-center items-center px-4 w-full h-full bg-white/0">
          <div className="max-w-screen-md w-full">
            <SpeechCarousel />
          </div>
        </div>
      </div>

      {/* RSVP Section */}
      <div className="relative w-full overflow-hidden">
        <BaseBackground />
        <div className="absolute inset-0 flex justify-center items-center px-4 w-full h-full bg-white/0">
          <div className="max-w-screen-md w-full">
            <RSVPForm />
          </div>
        </div>
      </div>

      <IsPlayMusicDialog />
    </>
  );
}

