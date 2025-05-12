import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Calendar, MapPin, Clock } from 'lucide-react';

// Sample events data (would come from API in production)
const events = [
  {
    id: 1,
    title: "Summer Beats Festival",
    description: "Join us for a day of amazing music, food, and vibes at the annual Summer Beats Festival.",
    date: "2023-07-15",
    time: "12:00 PM - 10:00 PM",
    location: "Central Park, New York",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    slug: "summer-beats-festival"
  },
  {
    id: 2,
    title: "Urban Nights Concert",
    description: "Experience the best of urban music with our lineup of incredible artists.",
    date: "2023-08-05",
    time: "8:00 PM - 1:00 AM",
    location: "Metro Arena, Los Angeles",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    slug: "urban-nights-concert"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <Link 
            href="/events"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            View all events
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <article 
              key={event.id}
              className="flex flex-col md:flex-row bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href={`/events/${event.slug}`} className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6 md:w-3/5">
                <span className="inline-flex items-center text-sm text-purple-400 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(event.date)}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  <Link href={`/events/${event.slug}`} className="hover:text-purple-400 transition-colors">
                    {event.title}
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {event.description}
                </p>
                <div className="flex flex-col space-y-2 mb-4">
                  <span className="inline-flex items-center text-sm text-gray-300">
                    <Clock className="h-4 w-4 mr-1 text-purple-400" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mr-1 text-purple-400" />
                    {event.location}
                  </span>
                </div>
                <Link 
                  href={`/events/${event.slug}`}
                  className="inline-block bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Get Tickets
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}