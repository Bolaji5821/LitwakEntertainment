import { 
  FileText, 
  Music, 
  User, 
  Calendar, 
  Image, 
  Video, 
  ShoppingBag, 
  MapPin, 
  TrendingUp 
} from 'lucide-react';

// Sample data for dashboard (would come from API in production)
const stats = [
  { name: 'Blog Posts', value: 24, icon: FileText, change: '+12%', color: 'bg-blue-500' },
  { name: 'Mixtapes', value: 16, icon: Music, change: '+8%', color: 'bg-purple-500' },
  { name: 'Songs', value: 87, icon: Music, change: '+23%', color: 'bg-indigo-500' },
  { name: 'Team Members', value: 12, icon: User, change: '+2%', color: 'bg-pink-500' },
  { name: 'Events', value: 9, icon: Calendar, change: '+5%', color: 'bg-rose-500' },
  { name: 'Photos', value: 156, icon: Image, change: '+34%', color: 'bg-amber-500' },
  { name: 'Videos', value: 43, icon: Video, change: '+17%', color: 'bg-emerald-500' },
  { name: 'Products', value: 28, icon: ShoppingBag, change: '+9%', color: 'bg-cyan-500' },
  { name: 'Tour Dates', value: 14, icon: MapPin, change: '+3%', color: 'bg-violet-500' },
];

// Recent activity data
const recentActivity = [
  {
    id: 1,
    action: 'New Blog Post',
    title: 'The Future of Music Production',
    timestamp: '2 hours ago',
    user: 'Admin'
  },
  {
    id: 2,
    action: 'Updated Mixtape',
    title: 'Summer Vibes Vol. 3',
    timestamp: '5 hours ago',
    user: 'DJ FrostByte'
  },
  {
    id: 3,
    action: 'New Event Created',
    title: 'Urban Nights Concert',
    timestamp: '1 day ago',
    user: 'Admin'
  },
  {
    id: 4,
    action: 'Updated Team Member',
    title: 'DJ SoulSister Profile',
    timestamp: '2 days ago',
    user: 'Editor'
  },
  {
    id: 5,
    action: 'New Photos Added',
    title: 'Summer Beats Festival Gallery',
    timestamp: '3 days ago',
    user: 'Admin'
  }
];

export default function AdminDashboard({ user }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, {user?.username || 'Admin'}!</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Analytics
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.name}
            className="bg-purple-900/40 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <span className="ml-2 text-xs font-medium text-green-400">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="border-b border-purple-800 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <p className="text-purple-400 font-medium">{activity.action}</p>
                    <span className="text-xs text-gray-400">{activity.timestamp}</span>
                  </div>
                  <p className="text-white mt-1">{activity.title}</p>
                  <p className="text-sm text-gray-400 mt-1">by {activity.user}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-purple-800 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">New Blog Post</span>
              </button>
              <button className="bg-purple-800 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center">
                <Music className="h-6 w-6 mb-2" />
                <span className="text-sm">Upload Mixtape</span>
              </button>
              <button className="bg-purple-800 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="text-sm">Add Event</span>
              </button>
              <button className="bg-purple-800 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center">
                <Image className="h-6 w-6 mb-2" />
                <span className="text-sm">Upload Photos</span>
              </button>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Content Growth</h3>
                  <p className="text-purple-100 text-sm mt-1">Your content has grown by 24% this month. Keep it up!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}