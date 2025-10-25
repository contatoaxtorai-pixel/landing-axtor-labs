import React from 'react';

// EDITAR AQUI: Você pode substituir os títulos, descrições e emojis por ícones SVG mais personalizados, se preferir.
const benefits = [
  { title: "Aumento de Receita", description: "Mais agendamentos e menos leads perdidos resultam em crescimento direto no faturamento.", icon: '💰' },
  { title: "Produtividade da Equipe", description: "Libere seu time de tarefas repetitivas para focar em negociações estratégicas e fechamentos.", icon: '🚀' },
  { title: "Experiência do Cliente", description: "Atendimento 24/7 e respostas instantâneas que encantam e fidelizam seus clientes.", icon: '❤️' },
  { title: "Inteligência de Dados", description: "Entenda o comportamento dos seus leads com métricas claras para otimizar suas estratégias.", icon: '📊' },
];

const BenefitsMap: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-graphite text-white">
      <div className="container mx-auto px-6">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Um Ecossistema de Vantagens para seu Negócio</h2>
          <p className="mt-4 text-lg text-gray-300">Nossa automação não é uma ferramenta isolada, é um motor de crescimento que impacta todas as áreas da sua operação.</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-16 max-w-5xl mx-auto flex flex-col items-center gap-8">
          {/* Central Node */}
          <div className="bg-military-500/80 backdrop-blur-sm border border-military-400 text-white p-6 rounded-xl shadow-lg z-10">
            <h3 className="font-display text-2xl font-bold">Seu Negócio + Axtor Labs</h3>
          </div>

          {/* Lines and Benefit Cards */}
          <div className="w-full grid md:grid-cols-2 gap-x-16 gap-y-8 relative">
            {/* Connecting lines - pseudo-elements for simplicity */}
            
            {benefits.map((benefit, index) => (
              <div key={index} className="relative p-8 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:border-military-400/50 hover:-translate-y-2">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-display text-xl font-bold text-military-400">{benefit.title}</h4>
                <p className="mt-2 text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsMap;