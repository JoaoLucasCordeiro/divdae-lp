// components/Footer.tsx
import React from 'react';
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black/40 to-transparent py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Logo and Mission */}
          <div className="text-center lg:text-left max-w-md">
            <div className="flex items-center space-x-3 justify-center lg:justify-start mb-3">
              <img 
                src="/logo-hero.png" 
                alt="Logo Divdaê" 
                className="w-72 sm:w-80 md:w-96 lg:w-52 xl:w-56 h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Conectando estudantes para criar lares incríveis. 
              Economia, praticidade e novas amizades na vida universitária.
            </p>
          </div>

          {/* Social Links and Legal */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/dividaeapp" 
                className="group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} className="group-hover:text-[#DFFF00] transition-colors duration-300" />
              </a>
              <a 
                href="mailto:contato@dividaeapp@gmail.com"  
                className="group w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="group-hover:text-purple-300 transition-colors duration-300" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-8 text-white/70 text-lg">
              <a href="#" className="hover:text-[#DFFF00] transition-colors duration-300 font-medium">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300 font-medium">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 text-lg">
            <span>Feito com</span>
            <Heart size={20} className="text-pink-400 animate-pulse" />
            <span>pela BitWise.</span>
          </div>
          <p className="text-white/40 mt-2">© {new Date().getFullYear()} Divdaê. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;