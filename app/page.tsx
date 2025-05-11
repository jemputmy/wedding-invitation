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
      <div className="relative">
        <BaseBackground />

        {/* Absolute Speech Carousel above BaseBackground */}
        <div className="absolute inset-0 flex justify-center items-center px-4 bg-white/0">
          <SpeechCarousel />
        </div>
      </div>
      <div className="relative">
        <BaseBackground />

        {/* Absolute Speech Carousel above BaseBackground */}
        <div className="absolute inset-0 flex justify-center items-center px-4 bg-white/0">
          <RSVPForm />
        </div>
      </div>

      <IsPlayMusicDialog></IsPlayMusicDialog>
    </>
  );
}

