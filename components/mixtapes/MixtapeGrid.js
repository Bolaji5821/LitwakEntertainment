import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, Calendar, Download } from 'lucide-react';
import { formatDate } from '@/lib/utils';

// Sample mixtapes data (would come from API in production)
const mixtapes = [
  {
    id: 1,
    title: "Summer Vibes Vol. 3",
    description: "The perfect soundtrack for your summer adventures. Features top hits and exclusive remixes.",
    cover: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg",
    releaseDate: "2023-05-15",
    duration: "58 min",
    artist: "DJ FrostByte",
    tracks: 12,
    slug: "summer-vibes-vol-3"
  },
  {
    id: 2,
    title: "Urban Nights",
    description: "Late night urban beats perfect for the city that never sleeps.",
    cover: "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg",
    releaseDate: "2023-06-02",
    duration: "62 min",
    artist: "MC Twilight",
    tracks: 14,
    slug: "urban-nights"
  },
  {
    id: 3,
    title: "Rhythm & Soul",
    description: "A soulful journey through R&B classics and new hits.",
    cover: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg",
    releaseDate: "2023-06-28",
    duration: "65 min",
    artist: "DJ SoulSister",
    tracks: 15,
    slug: "rhythm-and-soul"
  },
  {
    id: 4,
    title: "Electric Dreams",
    description: "Electronic and dance tracks to energize your day.",
    cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    releaseDate: "2023-07-10",
    duration: "72 min",
    artist: "Synthwave Collective",
    tracks: 18,
    slug: "electric-dreams"
  },
  {
    id: 5,
    title: "Hip-Hop Chronicles",
    description: "The best of hip-hop from past to present in one seamless mix.",
    cover: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
    releaseDate: "2023-07-22",
    duration: "70 min",
    artist: "Rap Historian",
    tracks: 16,
    slug: "hip-hop-chronicles"
  },
  {
    id: 6,
    title: "Chill Zone",
    description: "Laid-back beats perfect for relaxation or focused work.",
    cover: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    releaseDate: "2023-08-05",
    duration: "55 min",
    artist: "Ambient Collective",
    tracks: 10,
    slug: "chill-zone"
  }
];

export default function MixtapeGrid() {
  return (
    <section className="py-16 px-4 bg-purple-950">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixtapes.map((mixtape) => (
            <article 
              key={mixtape.id}
              className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative">
                <Link href={`/mixtapes/${mixtape.slug}`} className="block relative aspect-square overflow-hidden">
                  <Image
                    src={mixtape.cover}
                    alt={mixtape.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-900/60">
                  <button className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  <Link href={`/mixtapes/${mixtape.slug}`} className="hover:text-purple-400 transition-colors">
                    {mixtape.title}
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  By <span className="text-purple-400">{mixtape.artist}</span>
                </p>
                <div className="flex justify-between items-center mb-4 text-gray-300 text-sm">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-purple-400" />
                    {mixtape.duration}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-purple-400" />
                    {formatDate(mixtape.releaseDate)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/mixtapes/${mixtape.slug}`}
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center text-sm"
                  >
                    View Details
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button className="inline-flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}