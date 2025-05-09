

export default function Home() {
  return <WeddingInvitation></WeddingInvitation>
}



export function WeddingInvitation()  {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden border border-rose-200">
        {/* Decorative Header */}
        <div className="bg-rose-600 py-6 px-8 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 to-pink-400"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider">Wedding Invitation</h1>
          <div className="mt-2 text-rose-100 font-medium">Join us in celebration</div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-gray-800 mb-2">Amirul and Ecah</h2>
            <div className="text-rose-600 font-medium">are getting married</div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-rose-300 rounded-full"></div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl text-gray-700 mb-2">When</h3>
                <p className="text-gray-600">Saturday, June 15, 2024</p>
                <p className="text-gray-600">4:00 PM</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-gray-700 mb-2">Where</h3>
                <p className="text-gray-600">The Grand Ballroom</p>
                <p className="text-gray-600">123 Rose Garden Avenue</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl text-gray-700 mb-2">RSVP</h3>
                <p className="text-gray-600">Please respond by May 1, 2024</p>
                <p className="text-gray-600">Email: rsvp@sarahandmichael.com</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-gray-700 mb-2">Dress Code</h3>
                <p className="text-gray-600">Formal Attire</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center italic text-gray-500 mb-8">
            "Love is not about how many days, weeks or months you've been together, 
            it's all about how much you love each other every day."
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Confirm Attendance
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-rose-50 py-4 px-8 text-center text-sm text-rose-800">
          We look forward to celebrating with you!
        </div>
      </div>
    </div>
  );
};

