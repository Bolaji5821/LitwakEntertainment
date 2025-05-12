import Link from 'next/link';
import Image from 'next/image';
import { formatDate, truncateText } from '@/lib/utils';

// Sample blog posts data (would come from API in production)
const blogPosts = [
  {
    id: 1,
    title: "Behind the Scenes at Our Latest Music Video Shoot",
    excerpt: "Get an exclusive look at what happens behind the camera during our high-energy music video production.",
    date: "2023-05-15",
    image: "https://images.pexels.com/photos/3755378/pexels-photo-3755378.jpeg",
    slug: "behind-the-scenes-music-video"
  },
  {
    id: 2,
    title: "Interview with Rising Star DJ Pulse",
    excerpt: "We sat down with DJ Pulse to discuss his journey, inspirations, and plans for the future.",
    date: "2023-06-02",
    image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    slug: "interview-dj-pulse"
  },
  {
    id: 3,
    title: "The Evolution of Hip-Hop: Past, Present, and Future",
    excerpt: "Exploring the rich history of hip-hop and where the genre is headed in the coming years.",
    date: "2023-06-28",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    slug: "evolution-of-hip-hop"
  }
];

export default function LatestPosts() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-950 to-purple-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Latest from the Blog
          </h2>
          <Link 
            href="/blog"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            View all posts
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <span className="text-xs text-purple-400">
                  {formatDate(post.date)}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-purple-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4">
                  {truncateText(post.excerpt, 100)}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center text-sm"
                >
                  Read more
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}