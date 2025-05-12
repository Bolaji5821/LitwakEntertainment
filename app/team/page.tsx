import Banner from '@/components/Banner';
import Image from 'next/image';

const teamMembers = [
  {
    name: "DJ Pulse",
    role: "Lead Artist",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    bio: "Award-winning DJ and producer with over 10 years of experience in the industry."
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    bio: "Visionary creative director with a passion for innovative music production."
  },
  {
    name: "Alex Johnson",
    role: "Sound Engineer",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    bio: "Expert sound engineer specializing in live performances and studio recordings."
  }
];

export default function TeamPage() {
  return (
    <div>
      <Banner 
        title="Our Team"
        subtitle="Meet the talented individuals behind Litwak Entertainment"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-purple-900/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-square relative">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 