import Banner from '@/components/Banner';
import Image from 'next/image';

const photos = [
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Concert performance",
    category: "Live Shows"
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Studio session",
    category: "Behind the Scenes"
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Music festival",
    category: "Events"
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Artist portrait",
    category: "Portraits"
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Crowd at concert",
    category: "Live Shows"
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    alt: "Recording studio",
    category: "Behind the Scenes"
  }
];

export default function PhotosPage() {
  return (
    <div>
      <Banner 
        title="Photo Gallery"
        subtitle="Capturing moments from our journey"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                      {photo.category}
                    </span>
                    <p className="text-white text-lg font-medium">{photo.alt}</p>
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