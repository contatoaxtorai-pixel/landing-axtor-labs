import React from 'react';

const audiences = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m6-4h1m-1 4h1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11h.01" />
            </svg>
        ),
        title: 'Clínicas',
        description: 'Agende consultas, confirme horários, responda dúvidas sobre procedimentos e qualifique pacientes automaticamente.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: 'Imobiliárias',
        description: 'Qualifique compradores e inquilinos, agende visitas aos imóveis e envie informações 24 horas por dia.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-military-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Estúdios',
        description: 'Gerencie agendamentos de aulas, responda dúvidas sobre planos e matrículas, e engaje novos alunos.',
    }
];

const TargetAudience: React.FC = () => {
    return (
        <section className="bg-graphite py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Perfeito para o seu negócio</h2>
                    <p className="mt-4 text-lg text-gray-300">Se você recebe leads pelo WhatsApp e precisa de mais agilidade, nossa solução foi desenhada para você.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
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

export default TargetAudience;