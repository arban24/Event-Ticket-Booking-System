import Header from '../../components/Header';
import BookingForm from './BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Event Tickets</h1>
          <p className="text-xl text-gray-600">Secure your spot at Tech Innovation Summit 2024</p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}