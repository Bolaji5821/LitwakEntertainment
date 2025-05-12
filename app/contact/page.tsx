import Banner from '@/components/Banner';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <Banner 
        title="Contact Us"
        subtitle="Get in touch with our team"
        image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      />
      
      <div className="bg-purple-950 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-purple-300">info@litwakent.com</p>
                    <p className="text-purple-300">support@litwakent.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-purple-300">+1 (555) 123-4567</p>
                    <p className="text-purple-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Office</h3>
                    <p className="text-purple-300">123 Music Street</p>
                    <p className="text-purple-300">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-purple-900/40 border border-purple-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-purple-900/40 border border-purple-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-purple-900/40 border border-purple-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-purple-900/40 border border-purple-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 