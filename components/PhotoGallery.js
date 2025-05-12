'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

// Sample gallery photos (would come from API in production)
const photos = [
  {
    id: 1,
    title: "Studio Session",
    image: "https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg",
    category: "studio"
  },
  {
    id: 2,
    title: "Live Performance",
    image: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg",
    category: "performance"
  },
  {
    id: 3,
    title: "Artist Backstage",
    image: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg",
    category: "backstage"
  },
  {
    id: 4,
    title: "Music Festival",
    image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg",
    category: "festival"
  },
  {
    id: 5,
    title: "Fan Meetup",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    category: "fans"
  },
  {
    id: 6,
    title: "Studio Equipment",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    category: "studio"
  }
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 px-4 bg-purple-950">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <Link 
            href="/photos"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            View all photos
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openLightbox(photo)}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                sizes="80vw"
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white text-lg font-medium">{selectedPhoto.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}