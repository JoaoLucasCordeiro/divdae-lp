// components/Hero.tsx
import React from 'react';
import { ArrowRight, Sparkles, Users, Home, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-6 relative lg:pt-20 pt-14 pb-4 lg:pb-20">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            {/* Logo Background for Mobile */}
            <div className="absolute inset-0 lg:hidden flex items-center justify-center opacity-5 pointer-events-none">
              <img 
                src="/logo-hero.png" 
                alt="" 
                className="w-full max-w-md h-auto"
              />
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20 mb-6 lg:mb-8 text-sm sm:text-base sm:px-6">
              <Sparkles size={20} className="text-[#DFFF00] flex-shrink-0" />
              <span className="font-semibold">Menos perrengue, mais match 💚</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-6 lg:mb-8 leading-tight flex flex-col items-center lg:items-start">
              <span>Tá caro?</span>
              <span className="bg-gradient-to-r from-[#DFFF00] via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Divide aê.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 text-white/80 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              O <span className="font-semibold text-white">match perfeito</span> para seu novo lar. 
              Encontre roommates compatíveis e organize a república{' '}
              <span className="font-semibold text-white">sem perrengue</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8 lg:mb-12">
              <button 
                onClick={() => scrollToSection('final-cta')} 
                className="group relative bg-gradient-to-r from-[#DFFF00] to-cyan-300 text-[#4F00BC] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl mx-auto sm:mx-0"
              >
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <span>Quero meu apê!</span>
                  <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-white/70">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#DFFF00]" />
                <span className="text-base lg:text-lg">Match por compatibilidade</span>
              </div>
              <div className="flex items-center gap-3">
                <Home size={20} className="text-cyan-300" />
                <span className="text-base lg:text-lg">Organização da casa</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-purple-300" />
                <span className="text-base lg:text-lg">Zero burocracia</span>
              </div>
            </div>

            {/* Mobile Bottom Decoration */}
            <div className="lg:hidden mt-12 flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Logo Hero - Desktop only */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <img 
                src="/logo-hero.png" 
                alt="Logo principal do Divdaê" 
                className="w-full max-w-[95%] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-auto mx-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
