// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui";
import IsPlayMusicDialog from "./elements/play-button/play-button.ui";
import SpeechCarousel from "./elements/speech-carousel/speech-carousel.ui";
import { CanvaDesign } from "./elements/canva-design/canva-dessign.ui";

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

export function BaseBackground() {
  return (
    <div className="relative w-full pt-[140.9524%] shadow-md rounded-lg overflow-hidden mb-2">
      <iframe
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none"
        src="https://www.canva.com/design/DAGnIEn52ZM/uU18XQWx86Cp76ckSHkxyw/view?embed"
        allowFullScreen
      />
    </div>
  );
}
