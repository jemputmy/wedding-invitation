import Image from "next/image";

export default function Home() {
  return (
    <><div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 px-6 sm:px-12 py-12 font-sans text-gray-800">
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
    </div><RSVP></RSVP></>
    
  );
}

export function RSVP() {
  return (
    <div id="rsvp" className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 px-6 sm:px-12 py-12 font-sans text-gray-800">
      {/* Card container */}
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/40">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-rose-700 mb-8">RSVP</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Your email address"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests*
            </label>
            <select
              id="guests"
              name="guests"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="">Select number of guests</option>
              <option value="1">1 (Just me)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Will you be attending?*
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  required
                  className="h-4 w-4 text-rose-600 focus:ring-rose-500"
                />
                <span className="ml-2 text-gray-700">Yes, with pleasure</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  required
                  className="h-4 w-4 text-rose-600 focus:ring-rose-500"
                />
                <span className="ml-2 text-gray-700">No, regretfully</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              placeholder="Any dietary restrictions or special notes..."
            ></textarea>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-full bg-rose-600 text-white px-8 py-3 text-base font-medium hover:bg-rose-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit RSVP
            </button>
          </div>
        </form>
        
        {/* Decorative Divider */}
        <div className="my-10 flex justify-center">
          <Image
            src="/divider-floral.svg"
            alt="Divider"
            width={200}
            height={20}
          />
        </div>
        
        <p className="text-center text-gray-600">
          Please RSVP by November 15, 2025
        </p>
      </div>
    </div>
  );
}