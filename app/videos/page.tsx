import Banner from '@/components/Banner';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "Summer Festival Highlights 2023",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    duration: "5:30",
    category: "Live Shows"
  },
  {
    title: "Behind the Scenes: New Album Recording",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    duration: "8:45",
    category: "Behind the Scenes"
  },
  {
    title: "Music Video: Midnight Dreams",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    duration: "4:15",
    category: "Music Videos"
  },
  {
    title: "Tour Documentary: European Leg",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    duration: "15:20",
    category: "Documentaries"
  }
];

export default function VideosPage() {
  return (
    <div>
      <Banner 
        title="Video Clips"
        subtitle="Watch our latest videos and performances"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-full transition-colors">
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-purple-900/90 to-transparent">
                  <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-white font-medium">{video.title}</h3>
                  <p className="text-purple-300 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 