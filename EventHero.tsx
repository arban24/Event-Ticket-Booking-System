'use client';

import Link from 'next/link';

export default function EventHero() {
  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20tech%20conference%20virtual%20event%20stage%20with%20purple%20and%20blue%20lighting%20professional%20presentation%20setup%20contemporary%20design%20futuristic%20atmosphere%20clean%20minimal%20background&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tech Innovation Summit 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join industry leaders and innovators for an exclusive virtual conference exploring the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center">
              <i className="ri-calendar-line text-2xl mr-3"></i>
              <span className="text-lg">March 15, 2024 • 9:00 AM - 5:00 PM PST</span>
            </div>
            <div className="flex items-center">
              <i className="ri-video-line text-2xl mr-3"></i>
              <span className="text-lg">Virtual Event</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/booking"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block text-center"
            >
              Book Your Ticket - $49
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}