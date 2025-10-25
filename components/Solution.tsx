import React from 'react';

const solutions = [
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Respostas Instantâneas 24/7',
        description: 'Nosso agente de IA atende e qualifica cada lead na hora, a qualquer dia ou horário.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Padronização e Qualificação',
        description: 'Garanta que todo lead passe pelo funil correto e chegue pronto para a equipe de vendas.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
        title: 'Foco Total em Vendas',
        description: 'Sua equipe se concentra em fechar negócios enquanto a IA cuida do trabalho repetitivo.',
    }
];

const Solution: React.FC = () => {
    return (
        <section className="bg-graphite text-white py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold">Deixe o trabalho repetitivo com o Agente de IA</h2>
                    <p className="mt-4 text-lg text-gray-300">Entregue agilidade para seus clientes e produtividade para sua equipe.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                         <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 100}
                            className="bg-gray-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-military-500/10"
                        >
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-bold text-white">{item.title}</h3>
                            <p className="mt-2 text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;