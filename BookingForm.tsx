'use client';

import { useState } from 'react';
import PaymentModal from './PaymentModal';

interface BookingData {
  name: string;
  email: string;
  quantity: number;
  phone: string;
  company: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    quantity: 1,
    phone: '',
    company: ''
  });
  
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [showPayment, setShowPayment] = useState(false);

  const ticketPrice = 49;

  const validateForm = () => {
    const newErrors: Partial<BookingData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (formData.quantity < 1 || formData.quantity > 10) {
      newErrors.quantity = 'Quantity must be between 1 and 10';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPayment(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof BookingData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Event Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Summary</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-calendar-line text-xl text-purple-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Tech Innovation Summit 2024</h3>
                  <p className="text-gray-600">March 15, 2024 • 9:00 AM - 5:00 PM PST</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-video-line text-xl text-purple-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Virtual Event</h3>
                  <p className="text-gray-600">Join from anywhere in the world</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-price-tag-3-line text-xl text-purple-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900">Ticket Price</h3>
                  <p className="text-gray-600">${ticketPrice} per person</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">What's Included:</h4>
              <ul className="text-purple-800 space-y-1">
                <li>• Access to all sessions and workshops</li>
                <li>• Interactive Q&A with speakers</li>
                <li>• Digital networking opportunities</li>
                <li>• Event recordings for 30 days</li>
                <li>• Digital certificate of attendance</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Tickets</h2>
            
            <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets *
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    errors.quantity ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-gray-900">Total Amount:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    ${(ticketPrice * formData.quantity).toFixed(2)}
                  </span>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          bookingData={formData}
          totalAmount={ticketPrice * formData.quantity}
          onClose={() => setShowPayment(false)}
        />
      )}
    </>
  );
}