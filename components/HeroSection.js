'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const heroSlides = [
  {
    title: "Elevating Entertainment",
    subtitle: "Music and events that move your soul",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    link: "/events"
  },
  {
    title: "Latest Mixtapes",
    subtitle: "Fresh beats and exclusive tracks",
    image: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
    link: "/mixtapes"
  },
  {
    title: "Meet The Team",
    subtitle: "The creative minds behind Litwak",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    link: "/team"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-purple-950/60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-[fadeInUp_1s_ease_forwards]"
                style={{ animationDelay: "0.3s" }}
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl text-gray-200 mb-8 opacity-0 animate-[fadeInUp_1s_ease_forwards]"
                style={{ animationDelay: "0.5s" }}
              >
                {slide.subtitle}
              </p>
              <Link
                href={slide.link}
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-[fadeInUp_1s_ease_forwards]"
                style={{ animationDelay: "0.7s" }}
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}