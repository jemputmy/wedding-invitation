// app/page.tsx
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui"

export default function Home() {
    return (
    <><div className="relative w-full pt-[140.9524%] shadow-md rounded-lg overflow-hidden my-6">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.canva.com/design/DAGlbdo33h8/6j4Mb4am-r5h9953hHdaFw/view?embed"
          allowFullScreen />
      </div><RSVPForm /></>
      
      
  )

}
