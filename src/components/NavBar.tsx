// components/Navbar.tsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex items-center space-x-2">
             <img 
               src="/logo-navbar.png" 
               alt="Logo do divdaê" 
               className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 transition-all duration-300 group-hover:scale-105"
             />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {['Como Funciona', 'Vantagens', 'FAQ'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="relative bg-transparent text-white/90 hover:text-white font-medium text-lg transition-all duration-300 hover:scale-105 group"
                style={{ border: 'none !important', outline: 'none' }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DFFF00] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('final-cta')}
            className="hidden lg:block group relative bg-gradient-to-r from-[#DFFF00] to-cyan-300 text-[#4F00BC] px-8 py-3 rounded-2xl font-black text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            <span className="relative z-10">Entrar na Lista de Espera</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden group relative bg-gradient-to-r from-[#DFFF00]/20 to-cyan-300/20 backdrop-blur-sm w-12 h-12 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-[#4F00BC] relative z-10" /> : <Menu size={24} className="text-[#4F00BC] relative z-10" />}
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFFF00]/20 to-cyan-300/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20">
            <div className="flex flex-col space-y-2 p-6">
              {['Como Funciona', 'Vantagens', 'FAQ'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="relative bg-transparent text-white/90 hover:text-white font-medium text-lg transition-all duration-300 hover:scale-105 group py-4 px-4 text-left"
                  style={{ border: 'none !important', outline: 'none' }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#DFFF00] group-hover:w-[calc(100%-2rem)] transition-all duration-300"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('final-cta')}
                className="group relative bg-gradient-to-r from-[#DFFF00] to-cyan-300 text-[#4F00BC] py-4 rounded-xl font-black text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl mt-4"
              >
                <span className="relative z-10">Entrar na Lista de Espera</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
