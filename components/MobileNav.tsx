import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/mixtapes', label: 'Mixtapes' },
    { href: '/songs', label: 'Songs' },
    { href: '/team', label: 'Team' },
    { href: '/events', label: 'Events' },
    { href: '/photos', label: 'Photos' },
    { href: '/videos', label: 'Videos' },
    { href: '/merch', label: 'Merch' },
    { href: '/tours', label: 'Tours' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className="absolute right-0 top-0 h-full w-[280px] bg-purple-950 shadow-xl">
        {/* Close Button */}
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-purple-950 border-b border-purple-800">
          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="h-[calc(100%-64px)] overflow-y-auto">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-6 py-3 text-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-purple-900/50 text-white'
                      : 'text-purple-300 hover:bg-purple-900/30 hover:text-white'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 