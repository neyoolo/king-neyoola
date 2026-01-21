import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-red-600/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center glow-effect">
              <span className="text-white text-sm">A</span>
            </div>
            <span className="text-lg text-white">Ayoola</span>
          </div>
          <p className="text-gray-400 mb-4">
            Crafting digital experiences that push the boundaries of possibility.
          </p>
          <div className="text-sm text-gray-500">
            © 2026 Neyoola. All rights reserved. | Built with React & Motion
          </div>
        </div>
      </footer>
    </div>
  );
}