import React from 'react';

// EDITAR AQUI: Substitua as URLs das imagens por imagens reais das suas funcionalidades.
const features = [
    {
        title: 'Integração Total com suas Ferramentas',
        description: 'Conectamos nosso agente de IA diretamente ao seu CRM, agenda ou sistema de gestão. Não é preciso trocar de ferramenta. Trabalhamos com Tomik, Supabase, n8n, Google Sheets e muito mais.',
        imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
        imageLeft: false,
    },
    {
        title: 'Relatórios e Métricas Claras',
        description: 'Acompanhe em tempo real a performance do seu atendimento. Tenha acesso a dados como volume de leads, taxa de agendamento, tempo de resposta e principais dúvidas para tomar decisões estratégicas.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        imageLeft: true,
    },
    {
        title: 'Customização Completa',
        description: 'Adaptamos 100% do fluxo de conversa, tom de voz e regras de negócio para a realidade da sua empresa. O agente trabalha exatamente como um membro treinado da sua equipe.',
        imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop',
        imageLeft: false,
    }
];

const Features: React.FC = () => {
    return (
        <section className="bg-lightgray py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">Uma ferramenta completa para o seu negócio</h2>
                    <p className="mt-4 text-lg text-gray-600">Tudo que você precisa para escalar seu atendimento sem perder a qualidade.</p>
                </div>
                <div className="mt-20 space-y-16">
                    {features.map((feature, index) => (
                        <div key={index} data-aos="fade-up" className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`order-2 ${feature.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-graphite">{feature.title}</h3>
                                <p className="mt-4 text-gray-700">{feature.description}</p>
                            </div>
                            <div className={`order-1 ${feature.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                                <img src={feature.imageUrl} alt={feature.title} className="rounded-lg shadow-xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;