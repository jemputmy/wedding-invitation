import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 px-6 sm:px-12 py-12 font-sans text-gray-800">
      {/* Card container */}
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 text-center border border-white/40">

        {/* Couple Names */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide text-rose-700">Amirul & Aisyah</h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-600 italic">Together with their beloved families</p>
    
        {/* Divider */}
        <div className="my-6 border-t border-rose-300 w-1/2 mx-auto" />

        {/* Invitation Text */}
        <p className="text-xl sm:text-2xl text-gray-700">Joyfully invite you to celebrate their wedding</p>

        {/* Date, Time, Location */}
        <div className="mt-8 text-md sm:text-lg leading-loose">
          <p><strong className="text-rose-600">Saturday, December 7, 2025</strong></p>
          <p>at 11:00 AM</p>
          <p>Seri Cinta Hall, Putrajaya</p>
        </div>

        {/* RSVP Button */}
        <div className="mt-10">
          <a
            href="#rsvp"
            className="inline-block rounded-full bg-rose-600 text-white px-8 py-3 text-base font-medium hover:bg-rose-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            RSVP Now
          </a>
        </div>

        {/* Decorative Divider */}
        <div className="my-10">
          <Image
            src="/divider-floral.svg" // Optional: Use a decorative SVG like floral line
            alt="Divider"
            width={200}
            height={20} />
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-500 space-y-2">
          <p>We look forward to celebrating this special day with you</p>
          <div className="flex items-center justify-center gap-2">
            <Image src="/heart.svg" alt="Heart icon" width={16} height={16} />
            <span>Made with love · 2025</span>
          </div>
        </footer>
      </div>
    </div>
    
    
  );
}

