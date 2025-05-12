import Link from 'next/link';
import { Music, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Music className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Litwak Entertainment
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Elevating entertainment to new heights. Music, events, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-purple-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/mixtapes" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Mixtapes</Link></li>
              <li><Link href="/songs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Songs</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">The Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Events</Link></li>
              <li><Link href="/photos" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Photo Speaks</Link></li>
              <li><Link href="/videos" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Video Clips</Link></li>
              <li><Link href="/merch" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Merch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-2">Email: info@litwakent.com</p>
            <p className="text-sm text-gray-400 mb-4">Phone: +1 (555) 123-4567</p>
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 text-sm">
              Send us a message →
            </Link>
          </div>
        </div>

        <div className="border-t border-purple-900 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Litwak Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}