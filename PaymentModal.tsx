
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BookingData {
  name: string;
  email: string;
  quantity: number;
  phone: string;
  company: string;
}

interface PaymentModalProps {
  bookingData: BookingData;
  totalAmount: number;
  onClose: () => void;
}

export default function PaymentModal({ bookingData, totalAmount, onClose }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [processing, setProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mounted) return;

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      if (!mounted) return;

      // Generate ticket ID
      const ticketId = 'TKT-' + Date.now().toString().slice(-8);

      // Store booking data in localStorage (simulating database)
      const booking = {
        id: ticketId,
        ...bookingData,
        totalAmount,
        paymentMethod,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
      };

      localStorage.setItem('booking-' + ticketId, JSON.stringify(booking));

      // Redirect to confirmation page
      router.push(`/confirmation?ticket=${ticketId}`);
    }, 2000);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\\D/g, '').replace(/(\\d{2})(\\d)/, '$1/$2');
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\\D/g, '').slice(0, 4);
    }

    setCardData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Complete Payment</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <i className="ri-close-line text-xl text-gray-600"></i>
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tech Innovation Summit 2024</span>
                <span>{bookingData.quantity} × $49</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 border-2 rounded-lg flex items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-200 hover:shadow-md active:scale-95 min-w-0 ${
                  paymentMethod === 'card'
                    ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25 text-gray-700'
                }`}
              >
                <i className="ri-bank-card-line text-xl mr-2 flex-shrink-0"></i>
                <span className="text-sm sm:text-base truncate">Credit/Debit Card</span>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-4 border-2 rounded-lg flex items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-200 hover:shadow-md active:scale-95 min-w-0 ${
                  paymentMethod === 'paypal'
                    ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-sm'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25 text-gray-700'
                }`}
              >
                <i className="ri-paypal-line text-xl mr-2 flex-shrink-0"></i>
                <span className="text-sm sm:text-base truncate">PayPal</span>
              </button>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment}>
            {paymentMethod === 'card' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={cardData.cardName}
                    onChange={handleCardInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={cardData.expiryDate}
                      onChange={handleCardInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="mb-6 p-6 border border-gray-200 rounded-lg text-center">
                <i className="ri-paypal-line text-4xl text-blue-600 mb-4"></i>
                <p className="text-gray-600">You will be redirected to PayPal to complete your payment</p>
              </div>
            )}

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              {processing ? (
                <>
                  <i className="ri-loader-4-line text-xl mr-2 animate-spin"></i>
                  Processing Payment...
                </>
              ) : (
                `Pay $${totalAmount.toFixed(2)}`
              )}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            Your payment information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
}
