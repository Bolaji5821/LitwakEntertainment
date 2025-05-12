import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  Music, 
  User, 
  Calendar, 
  Image, 
  Video, 
  ShoppingBag, 
  MapPin,
  LogOut 
} from 'lucide-react';

export default function AdminSidebar({ user, onLogout }) {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Blog Posts', icon: FileText, href: '/admin/blogs' },
    { name: 'Mixtapes', icon: Music, href: '/admin/mixtapes' },
    { name: 'Songs', icon: Music, href: '/admin/songs' },
    { name: 'Team Members', icon: User, href: '/admin/team' },
    { name: 'Events', icon: Calendar, href: '/admin/events' },
    { name: 'Photos', icon: Image, href: '/admin/photos' },
    { name: 'Videos', icon: Video, href: '/admin/videos' },
    { name: 'Merchandise', icon: ShoppingBag, href: '/admin/merch' },
    { name: 'Tours', icon: MapPin, href: '/admin/tours' },
  ];

  return (
    <div className="hidden md:flex md:w-64 lg:w-72 flex-col bg-purple-900 shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="bg-purple-800 p-2 rounded-full">
            <Music className="h-6 w-6 text-purple-300" />
          </div>
          <span className="ml-3 text-lg font-semibold text-white">Litwak Admin</span>
        </div>
        
        <div className="mb-6 pb-6 border-b border-purple-800">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center text-white font-semibold">
              {user?.username.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user?.username || 'Admin'}</p>
              <p className="text-xs text-gray-400">{user?.role || 'administrator'}</p>
            </div>
          </div>
        </div>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-purple-800 hover:text-white rounded-md transition-colors duration-200 group"
            >
              <item.icon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-6 border-t border-purple-800">
        <button
          onClick={onLogout}
          className="flex items-center px-4 py-3 w-full text-gray-300 hover:bg-purple-800 hover:text-white rounded-md transition-colors duration-200"
        >
          <LogOut className="h-5 w-5 mr-3 text-gray-400" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}