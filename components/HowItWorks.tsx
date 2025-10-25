import React from 'react';

const steps = [
    {
        name: "Briefing",
        description: "Entendemos suas necessidades, público e processos."
    },
    {
        name: "Implantação 72h úteis (Teste)",
        description: "Configuramos seu agente em um ambiente de teste."
    },
    {
        name: "Piloto 40 Leads",
        description: "Validamos a performance com os primeiros leads."
    },
    {
        name: "Go Live",
        description: "Seu agente opera em capacidade total gerando resultados."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-lightgray">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">Comece a converter em 4 passos</h2>
                    <p className="mt-4 text-lg text-gray-600">Nosso processo é desenhado para ser rápido, transparente e focado em resultados.</p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 hidden md:block" style={{ transform: 'translateY(-50%)', top: '2.5rem' }}></div>
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                data-aos="fade-up" 
                                data-aos-delay={100 + index * 150} 
                                className="relative flex flex-col items-center text-center md:items-start md:text-left"
                            >
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-military-500 text-white font-bold text-xl shadow-lg">
                                    {index + 1}
                                </div>
                                <h3 className="mt-6 font-display text-xl font-bold text-graphite">{step.name}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;