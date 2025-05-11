// app/page.tsx
"use client";
import BaseBackground from "./elements/base-background/base-background.ui";
import { CanvaDesign } from "./elements/canva-design/canva-dessign.ui";
import CountdownTimer from "./elements/count-down/count-down.ui";
import IsPlayMusicDialog from "./elements/play-button/play-button.ui";
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui";
import SpeechCarousel from "./elements/speech-carousel/speech-carousel.ui";

export default function Home() {
 return (
    <>
      <div>
        <CanvaDesign />
     </div>
     
     {/* Countdown Section */}
      <div className="relative w-full overflow-hidden">
        <BaseBackground />
        <div className="my-8 absolute inset-0 flex justify-center items-center px-4 w-full h-full bg-white/0">
          <div className="max-w-screen-md w-full">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Speech Carousel Section */}
      <div className="relative w-full overflow-hidden">
        <BaseBackground />
        <div className="my-8 absolute inset-0 flex justify-center items-center px-4 w-full h-full bg-white/0">
          <div className="max-w-screen-md w-full">
            <SpeechCarousel />
          </div>
        </div>
      </div>

      {/* RSVP Section */}
      <div className="relative w-full overflow-hidden">
        <BaseBackground />
        <div className="my-8 absolute inset-0 flex justify-center items-center px-4 w-full h-full bg-white/0">
          <div className="max-w-screen-md w-full">
            <RSVPForm />
          </div>
        </div>
      </div>

      <IsPlayMusicDialog />
    </>
  );
}

