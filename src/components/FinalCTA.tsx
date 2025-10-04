// components/FinalCTA.tsx
import React from 'react';
import { useState } from 'react';
import { Send, Sparkles, Shield, Bell, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="final-cta" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-12 md:p-16 border border-white/20 shadow-2xl text-center relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#DFFF00] rounded-2xl flex items-center justify-center transform rotate-12">
            <Zap size={24} className="text-[#4F00BC]" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-cyan-400 rounded-2xl flex items-center justify-center transform -rotate-12">
            <Sparkles size={20} className="text-[#4F00BC]" />
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            Pronto pra achar{' '}
            <span className="bg-gradient-to-r from-[#DFFF00] via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              seu canto?
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Deixe seu e-mail e seja o <span className="font-semibold text-white">primeiro</span> a saber 
            quando o Divdaê for lançado. <span className="font-semibold text-white">Chega de viver apertado!</span>
          </p>

          {isSubmitted ? (
            <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-[#4F00BC] px-8 py-6 rounded-2xl font-black text-xl max-w-md mx-auto transform animate-scale-in">
              <div className="flex items-center justify-center gap-3">
                <Sparkles size={24} />
                <span>🎉 Oba! Te avisaremos assim que lançarmos!</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.melhor@email.com"
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:border-[#DFFF00] transition-all duration-300 text-lg backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-2xl blur opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#DFFF00] to-cyan-300 text-[#4F00BC] px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
                >
                  <Send size={20} />
                  Me avise!
                </button>
              </div>
            </form>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-white/60 text-lg">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-green-400" />
              <span>100% seguro e sem spam</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-[#DFFF00]" />
              <span>Apenas notificações importantes</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-cyan-400" />
              <span>Cancelar a qualquer momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;