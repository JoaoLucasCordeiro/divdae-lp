// components/FAQ.tsx
import React from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto custa o Divdaê?',
      answer: 'O Divdaê terá um modelo de assinatura super acessível, custando no máximo R$ 10/mês - o valor de um lanche! Esse investimento nos permite manter o app sempre atualizado, seguro e com novos recursos para facilitar sua vida na república. É muito mais barato que uma taxa de imobiliária! 💰'
    },
    {
      question: 'O app funciona apenas em Garanhuns?',
      answer: 'Começaremos por Garanhuns para criar uma comunidade forte e validar nossa ideia, mas já temos planos de expansão para outras cidades universitárias como Recife, Caruaru e Campina Grande. Deixe seu email para ser avisado quando chegarmos na sua cidade!'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente! Seguimos as melhores práticas de segurança e privacidade de dados. Suas informações de contato só são compartilhadas após match mútuo, e você tem controle total sobre o que compartilha no seu perfil.'
    },
    {
      question: 'Como funciona o sistema de match?',
      answer: 'Usamos um algoritmo inteligente que analisa compatibilidade em mais de 20 fatores diferentes - desde hábitos de estudo e limpeza até preferências musicais e rotina. Quanto mais completo seu perfil, mais precisos serão seus matches!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 mb-8">
            <HelpCircle size={24} className="text-[#DFFF00]" />
            <span className="font-semibold">Tire suas dúvidas</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black mb-8">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-[#DFFF00] via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tudo que você precisa saber sobre como o Divdaê funciona na prática.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300 group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#DFFF00] to-cyan-300 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4F00BC] font-black text-sm">{index + 1}</span>
                  </div>
                  <span className="font-black text-xl text-white text-left">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-[#DFFF00] flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-[#DFFF00] flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pl-12 border-l-2 border-[#DFFF00]/30">
                    <p className="text-lg text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;