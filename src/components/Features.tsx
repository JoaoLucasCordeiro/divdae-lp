// components/Features.tsx
import React from 'react';
import { Users, GraduationCap, Calculator, Shield, CheckCircle, DollarSign } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Match Inteligente',
      description: 'Nosso algoritmo conecta você com pessoas que combinam com seu estilo de vida, hábitos e personalidade.',
      benefits: ['Perfil detalhado', 'Compatibilidade comprovada', 'Interesses em comum'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Feito para Estudantes',
      description: 'Uma plataforma criada por quem entende os perrengues da vida universitária.',
      benefits: ['Preços acessíveis', 'Localização estratégica', 'Comunidade verificada'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Super Acessível',
      description: 'Por apenas R$ 10/mês você tem acesso completo à plataforma - menos que um lanche!',
      benefits: ['Máximo R$ 10/mês', 'Sem taxas extras', 'Melhor que imobiliária'],
      color: 'from-[#DFFF00] to-green-400'
    },
    {
      icon: Calculator,
      title: 'Contas em Dia',
      description: 'Sistema automático de divisão de despesas que acaba com as discussões no fim do mês.',
      benefits: ['Divisão automática', 'Lembretes inteligentes', 'Histórico completo'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Converse com tranquilidade e combine todos os detalhes com segurança antes de se encontrar.',
      benefits: ['Perfis verificados', 'Chat protegido', 'Dados seguros'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Faça parte de uma comunidade vibrante de estudantes que compartilham experiências e dicas.',
      benefits: ['Grupos de interesse', 'Eventos exclusivos', 'Networking universitário'],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="vantagens" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black mb-8">
            Viver junto nunca foi{' '}
            <span className="bg-gradient-to-r from-[#DFFF00] via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              tão fácil
            </span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Tecnologia inteligente para transformar a experiência de dividir república 
            em algo simples, seguro e prazeroso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                <feature.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-black mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#DFFF00] flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;