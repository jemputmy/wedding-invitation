// app/page.tsx
'use client'
import { useEffect, useState } from "react"
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui"
import IsPlayMusicDialog from "./elements/play-button/play-button.ui"
import SpeechCarousel from "./elements/speech-carousel/speech-carousel.ui"



export default function Home() {
  return (
    <><div className="relative w-full pt-[140.9524%] shadow-md rounded-lg overflow-hidden mb-2">
      <iframe
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none"
        src="https://www.canva.com/design/DAGlbdo33h8/6j4Mb4am-r5h9953hHdaFw/view?embed"
        allowFullScreen
      />
    </div>
      <div><SpeechCarousel/></div>
 <div><RSVPForm /></div>
     <IsPlayMusicDialog></IsPlayMusicDialog>
    </>



  )

}



