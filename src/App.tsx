// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';

import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-[#431b92] via-[#2d1b69] to-[#1a0b3d] text-white relative">
        {/* Subtle Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Main gradient orbs - more subtle */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DFFF00] rounded-full mix-blend-soft-light opacity-8 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light opacity-6 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-soft-light opacity-4 blur-3xl"></div>
          
          {/* Very subtle accent orbs */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#DFFF00] rounded-full mix-blend-soft-light opacity-3 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-300 rounded-full mix-blend-soft-light opacity-3 blur-2xl"></div>
        </div>
        
        <Navbar />
        <main className="relative z-10 w-full">
          <Hero />
          <HowItWorks />
          <Features />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;