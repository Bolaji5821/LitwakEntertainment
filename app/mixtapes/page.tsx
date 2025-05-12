import Banner from '@/components/Banner';

export default function MixtapesPage() {
  return (
    <div>
      <Banner 
        title="Mixtapes"
        subtitle="Discover our latest mixtapes and exclusive releases"
        image="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mixtape cards will go here */}
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-square relative">
                <img 
                  src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
                  alt="Mixtape cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Summer Vibes 2024</h3>
                <p className="text-purple-300 mb-4">A collection of the hottest tracks for your summer playlist</p>
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
            
            {/* Add more mixtape cards here */}
          </div>
        </div>
      </div>
    </div>
  );
} 