
import React from 'react';

const problems = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Leads sem resposta',
        description: 'Cada minuto de espera é um cliente em potencial que esfria e busca seu concorrente.',
    },
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Atendimento Inconsistente',
        description: 'A falta de um padrão de qualificação resulta em agendamentos ruins e perda de tempo para todos.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
            </svg>
        ),
        title: 'Equipe Sobrecarregada',
        description: 'Sua equipe de vendas está presa em tarefas manuais em vez de focar no que faz melhor: fechar negócios.',
    }
];

const Problem: React.FC = () => {
    return (
        <section className="bg-graphite text-white py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold">O Custo da Ineficiência é Alto Demais</h2>
                    <p className="mt-4 text-lg text-gray-300">Seu processo de vendas manual está deixando dinheiro na mesa todos os dias.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
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

export default Problem;
