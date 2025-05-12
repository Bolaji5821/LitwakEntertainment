import Banner from '@/components/Banner';

export default function SongsPage() {
  return (
    <div>
      <Banner 
        title="Songs"
        subtitle="Explore our collection of original tracks and covers"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Song cards will go here */}
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-square relative">
                <img 
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
                  alt="Song cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Midnight Dreams</h3>
                <p className="text-purple-300 mb-4">Original track by DJ Pulse</p>
                <div className="flex space-x-4">
                  <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    Play
                  </button>
                  <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full text-sm transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            {/* Add more song cards here */}
          </div>
        </div>
      </div>
    </div>
  );
} 