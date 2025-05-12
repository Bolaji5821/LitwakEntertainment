'use client';

import { useState } from 'react';
import { Music, AlertCircle } from 'lucide-react';

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In a real app, this would call the API
      // Mocking the API call for now
      
      // Mock successful login for demo purposes
      // For admin@litwakent.com with password "admin123"
      if (email === 'admin@litwakent.com' && password === 'admin123') {
        const userData = {
          id: 1,
          username: 'admin',
          email: 'admin@litwakent.com',
          role: 'admin'
        };
        
        const token = 'mock-jwt-token';
        
        // Simulate API delay
        setTimeout(() => {
          onLogin(userData, token);
          setLoading(false);
        }, 1000);
      } else {
        // Simulate API delay then show error
        setTimeout(() => {
          setError('Invalid email or password');
          setLoading(false);
        }, 1000);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-950 px-4">
      <div className="max-w-md w-full bg-purple-900/60 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-purple-800 p-3 rounded-full">
              <Music className="h-8 w-8 text-purple-300" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Admin Login
          </h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-md flex items-center gap-2 text-white">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="text-sm">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-purple-800/50 border border-purple-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-purple-800/50 border border-purple-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>For demo purposes, use:</p>
            <p className="text-purple-400">Email: admin@litwakent.com</p>
            <p className="text-purple-400">Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}