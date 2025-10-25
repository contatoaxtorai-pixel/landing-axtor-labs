import React from 'react';

const pasData = [
    {
        title: "O Problema",
        points: [
            "Leads sem resposta por horas",
            "Equipe sobrecarregada com tarefas",
            "Atendimento inconsistente",
        ],
    },
    {
        title: "A Agitação",
        points: [
            "Perda de receita e oportunidades",
            "Má reputação e clientes frustrados",
            "Estagnação no crescimento",
        ],
    },
    {
        title: "A Solução",
        points: [
            "Agente IA 24/7 que responde na hora",
            "Leads qualificados e agendados",
            "Seu time focado no que importa: vender",
        ],
    }
];

const PAS: React.FC = () => {
    return (
        <section className="bg-graphite py-16 sm:py-24 text-white">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold">Você está perdendo clientes por demora no atendimento?</h2>
                    <p className="mt-4 text-lg text-gray-300">Leads esfriam em minutos. Se você não responde rápido, seu concorrente o fará.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {pasData.map((item, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up" 
                            data-aos-delay={100 + index * 100} 
                            className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 cursor-pointer flex flex-col"
                        >
                            <h3 className={`font-display text-2xl font-bold ${item.title === 'A Solução' ? 'text-military-400' : 'text-white'}`}>
                                {item.title}
                            </h3>
                            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                                {item.points.map(point => <li key={point}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PAS;