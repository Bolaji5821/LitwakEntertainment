import Banner from '@/components/Banner';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const tourDates = [
  {
    city: "New York",
    venue: "Madison Square Garden",
    date: "2024-07-15",
    time: "20:00",
    tickets: "Available"
  },
  {
    city: "Los Angeles",
    venue: "Hollywood Bowl",
    date: "2024-07-20",
    time: "19:30",
    tickets: "Available"
  },
  {
    city: "Chicago",
    venue: "United Center",
    date: "2024-07-25",
    time: "20:00",
    tickets: "Sold Out"
  },
  {
    city: "Miami",
    venue: "American Airlines Arena",
    date: "2024-08-01",
    time: "20:00",
    tickets: "Available"
  }
];

export default function ToursPage() {
  return (
    <div>
      <Banner 
        title="Tour Dates"
        subtitle="Catch us live in a city near you"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {tourDates.map((tour, index) => (
              <div key={index} className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{tour.city}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-purple-300">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{tour.venue}</span>
                      </div>
                      <div className="flex items-center text-purple-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{new Date(tour.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-purple-300">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{tour.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                      tour.tickets === "Available" 
                        ? "bg-green-600 text-white" 
                        : "bg-red-600 text-white"
                    }`}>
                      {tour.tickets}
                    </span>
                    <button 
                      className={`flex items-center px-6 py-2 rounded-full text-sm transition-colors ${
                        tour.tickets === "Available"
                          ? "bg-purple-600 hover:bg-purple-500 text-white"
                          : "bg-gray-600 text-gray-300 cursor-not-allowed"
                      }`}
                      disabled={tour.tickets === "Sold Out"}
                    >
                      <Ticket className="w-4 h-4 mr-2" />
                      {tour.tickets === "Available" ? "Get Tickets" : "Sold Out"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 