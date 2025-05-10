// app/page.tsx
import { BoopButton } from "./elements/play-button/play-button.ui"
import RSVPForm from "./elements/rsvp-form/rsvp-form.ui"

export default function Home() {
    return (
    <><div className="relative w-full pt-[140.9524%] shadow-md rounded-lg overflow-hidden my-6">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.canva.com/design/DAGnEt-03dE/1JhmLdglUra9Lr8UCy97mQ/view?embed"
          allowFullScreen />
      </div>
        <RSVPForm /></>
      
      
      
  )

}
