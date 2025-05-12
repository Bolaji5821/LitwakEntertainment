import Banner from '@/components/Banner';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    name: "Limited Edition T-Shirt",
    price: 29.99,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    category: "Apparel"
  },
  {
    name: "Tour Hoodie 2024",
    price: 49.99,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    category: "Apparel"
  },
  {
    name: "Signed Album",
    price: 24.99,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    category: "Music"
  },
  {
    name: "Logo Cap",
    price: 19.99,
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    category: "Accessories"
  }
];

export default function MerchPage() {
  return (
    <div>
      <Banner 
        title="Merchandise"
        subtitle="Official Litwak Entertainment merchandise"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-square relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-purple-400 mb-4">${product.price.toFixed(2)}</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm transition-colors flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 