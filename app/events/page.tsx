import Banner from '@/components/Banner';
import { Calendar, MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    title: "Summer Music Festival 2024",
    date: "2024-07-15",
    time: "18:00",
    location: "Central Park, New York",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    description: "Join us for an unforgettable night of music and entertainment."
  },
  {
    title: "DJ Pulse Live in Concert",
    date: "2024-08-20",
    time: "20:00",
    location: "Madison Square Garden, New York",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    description: "Experience the magic of DJ Pulse's live performance."
  }
];

export default function EventsPage() {
  return (
    <div>
      <Banner 
        title="Events"
        subtitle="Upcoming shows and performances"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-purple-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-purple-300">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-purple-300">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full text-sm transition-colors">
                      Get Tickets
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