// components/HowItWorks.tsx
import React from 'react';
import { UserRoundPlus, HeartHandshake, Home, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserRoundPlus,
      title: 'Crie seu Perfil',
      description: 'Conte pra gente sobre seu curso, seus hábitos e o que você procura. Quanto mais detalhes, melhor o match!',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: HeartHandshake,
      title: 'Encontre a Galera',
      description: 'Nosso algoritmo mostra os perfis mais compatíveis com você. Deu match? O zap tá liberado pra combinar tudo.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Home,
      title: 'Organize a Casa',
      description: 'Achou o apê? Use a função "Nossa Casa" pra dividir as contas e tarefas de forma justa e sem estresse.',
      color: 'from-[#DFFF00] to-green-400'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black mb-8">
            Seu novo apê em{' '}
            <span className="bg-gradient-to-r from-[#DFFF00] via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              3 passos
            </span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Simples, rápido e sem complicação. Do perfil à república organizada, 
            te levamos até lá sem perrengues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10">
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-2xl`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <step.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-black mb-6 text-white">
                  {step.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Learn More */}
                <button className="flex items-center gap-2 text-[#DFFF00] font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;