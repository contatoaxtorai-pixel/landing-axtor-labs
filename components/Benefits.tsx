import React from 'react';

const benefits = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
        title: "Mais Agendamentos",
        description: "Converta mais visitantes em clientes com qualificação e agendamento instantâneos, 24/7."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
        title: "Redução de Custos",
        description: "Automatize o atendimento inicial e libere sua equipe para focar em tarefas de alto valor."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Padronização",
        description: "Garanta que todo lead receba um atendimento de alta qualidade, seguindo seus roteiros."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        title: "Métricas Claras",
        description: "Tenha acesso a dados sobre a performance do atendimento, taxas de conversão e mais."
    }
];

const Benefits: React.FC = () => {
    return (
        <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://i.imgur.com/T0bC0Lz.jpeg"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-a-futuristic-hud-of-a-human-scan-8515/1080p.mp4" type="video/mp4" />
                </video>
                {/* Darkening overlay for text contrast */}
                <div className="absolute inset-0 bg-graphite/60"></div>
                {/* Gradient fade to white at top and bottom */}
                <div 
                    className="absolute inset-0"
                    style={{ backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%, #FFFFFF 100%)' }}
                ></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Benefícios que você sente no bolso e na operação</h2>
                    <p className="mt-4 text-lg text-gray-200">Não é apenas tecnologia. É um motor de crescimento para o seu negócio.</p>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up" 
                            data-aos-delay={100 + index * 100} 
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="bg-military-500 h-16 w-16 flex items-center justify-center rounded-xl">
                                {benefit.icon}
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-bold">{benefit.title}</h3>
                            <p className="mt-2 text-gray-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;