import { Music, Headphones, Calendar, ShoppingBag } from 'lucide-react';

const features = [
  {
    title: "Latest Mixtapes",
    description: "Experience our freshest beats and mixes",
    icon: Music,
    link: "/mixtapes",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Hot Singles",
    description: "Discover our latest song releases",
    icon: Headphones,
    link: "/songs",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Upcoming Events",
    description: "Get tickets to our exclusive events",
    icon: Calendar,
    link: "/events",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Merch Shop",
    description: "Wear the brand with our exclusive merchandise",
    icon: ShoppingBag,
    link: "/merch",
    color: "from-amber-500 to-orange-600"
  }
];

export default function FeaturedSection() {
  return (
    <section className="bg-purple-950 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-purple-900/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <a 
                href={feature.link} 
                className="text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                Explore
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}