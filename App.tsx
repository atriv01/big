import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import PledgesSection from './components/PledgesSection';
import HaritbolSection from './components/HaritbolSection';
import ForumsSection from './components/ForumsSection';
import BlogSection from './components/BlogSection';
import NewsSection from './components/NewsSection';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';
import ContentManager from './components/ContentManager';
import { useContent } from './hooks/useContent';

export default function App() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const content = useContent();

  // Ensure content is loaded before rendering
  if (!content || !content.hero || !content.about) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Build India Group...</p>
        </div>
      </div>
    );
  }

  // Handle keyboard shortcut for admin panel (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAdminPanel(true);
      }
      
      // ESC to close admin panel
      if (event.key === 'Escape' && showAdminPanel) {
        setShowAdminPanel(false);
        setIsAdminAuthenticated(false);
        setAdminPassword('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAdminPanel]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'big2024admin') {
      setIsAdminAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
      setAdminPassword('');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setShowAdminPanel(false);
    setAdminPassword('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Website */}
      <Header />
      
      <main>
        <section id="home">
          <HeroSection content={content.hero} />
        </section>
        
        <section id="about">
          <AboutSection content={content.about} />
        </section>
        
        <section id="programs">
          <ProgramsSection content={content.programs} />
        </section>
        
        <section id="pledges">
          <PledgesSection />
        </section>
        
        <section id="haritbol">
          <HaritbolSection />
        </section>
        
        <section id="forums">
          <ForumsSection />
        </section>
        
        <section id="blog">
          <BlogSection content={content.blog} />
        </section>
        
        <section id="news">
          <NewsSection content={content.news} />
        </section>
        
        <section id="vision">
          <VisionSection />
        </section>
        
        <section id="contact">
          <Footer contact={content.contact} />
        </section>
      </main>

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            {!isAdminAuthenticated ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Admin Access</h2>
                  <button
                    onClick={() => setShowAdminPanel(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={handleAdminLogin}>
                  <div className="mb-4">
                    <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Admin Password
                    </label>
                    <input
                      type="password"
                      id="admin-password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter password"
                      autoFocus
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAdminPanel(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Login
                    </button>
                  </div>
                </form>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Use Ctrl+Shift+A to access admin panel | ESC to close
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Content Management</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleAdminLogout}
                      className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => setShowAdminPanel(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  <ContentManager />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}