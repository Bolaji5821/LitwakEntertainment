import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import LatestPosts from '@/components/LatestPosts';
import UpcomingEvents from '@/components/UpcomingEvents';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedSection />
      <LatestPosts />
      <UpcomingEvents />
      <PhotoGallery />
    </div>
  );
}