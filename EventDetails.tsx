'use client';

export default function EventDetails() {
  const speakers = [
    {
      name: "Sarah Chen",
      title: "CTO at TechCorp",
      topic: "AI and Machine Learning Trends",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20technology%20executive%20speaker%20confident%20modern%20business%20portrait%20clean%20white%20background%20contemporary%20style&width=400&height=400&seq=speaker1&orientation=squarish"
    },
    {
      name: "Michael Rodriguez",
      title: "Founder of InnovateLab",
      topic: "Startup Ecosystem & Future Tech",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20technology%20entrepreneur%20speaker%20confident%20modern%20business%20portrait%20clean%20white%20background%20contemporary%20style&width=400&height=400&seq=speaker2&orientation=squarish"
    },
    {
      name: "Dr. Emily Watson",
      title: "Research Director at FutureTech",
      topic: "Quantum Computing Revolution",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20research%20scientist%20speaker%20confident%20modern%20business%20portrait%20clean%20white%20background%20contemporary%20style&width=400&height=400&seq=speaker3&orientation=squarish"
    }
  ];

  const agenda = [
    { time: "9:00 AM", title: "Opening Keynote", speaker: "Sarah Chen" },
    { time: "10:30 AM", title: "Panel: Future of AI", speaker: "Multiple Speakers" },
    { time: "12:00 PM", title: "Networking Lunch Break", speaker: "" },
    { time: "1:30 PM", title: "Startup Pitch Session", speaker: "Michael Rodriguez" },
    { time: "3:00 PM", title: "Quantum Computing Deep Dive", speaker: "Dr. Emily Watson" },
    { time: "4:30 PM", title: "Closing & Q&A", speaker: "All Speakers" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Event Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Attend This Event?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Insights</h3>
              <p className="text-gray-600">Learn about the latest technology trends and innovations shaping our future from industry experts.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Network with Leaders</h3>
              <p className="text-gray-600">Connect with fellow professionals, entrepreneurs, and thought leaders in the tech ecosystem.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Actionable Strategies</h3>
              <p className="text-gray-600">Take home practical strategies and tools you can implement in your own projects and organizations.</p>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Speakers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agenda Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Event Agenda</h2>
          <div className="space-y-4">
            {agenda.map((item, index) => (
              <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-24 text-purple-600 font-semibold">{item.time}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  {item.speaker && <p className="text-gray-600">{item.speaker}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}