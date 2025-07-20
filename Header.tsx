'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Pacifico, serif' }}>
              EventHub
            </h1>
          </div>
          <nav className="flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              href="/booking" 
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Tickets
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}