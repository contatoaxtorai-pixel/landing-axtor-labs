import React, { useState } from 'react';

type Tab = 'qualificacao' | 'agendamento' | 'integracao';

// EDITAR AQUI: Substitua estas URLs pelos GIFs reais da sua ferramenta em ação.
const tabsData: { id: Tab; title: string; gifUrl: string }[] = [
    {
        id: 'qualificacao',
        title: 'Qualificação de Leads',
        gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazM1eGFhcjZndmZpYjVoM3g4NmFhNmp1cHg4d2ZibGZoa3ZkMXVoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IudUHdI0l63a5wrog/giphy.gif',
    },
    {
        id: 'agendamento',
        title: 'Agendamento Inteligente',
        gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2JtbTh5aGZscXJidjRoenNpbDQyN2V3bjZpM2NjaGR4dDJwcG5pciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mCgI9qXqK4a10x6f/giphy.gif',
    },
    {
        id: 'integracao',
        title: 'Integração com CRM',
        gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG45c2lpa204aWk3OTZobnEwY3NqamE5emYwdm1mMWJ1Z25yNTRpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1C2n2bnt0fKq4/giphy.gif',
    },
];

const ProductInAction: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('qualificacao');

    const activeGif = tabsData.find(tab => tab.id === activeTab)?.gifUrl;

    return (
        <section className="bg-lightgray py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">Veja o Agente em Ação</h2>
                    <p className="mt-4 text-lg text-gray-600">Nosso agente trabalha de forma autônoma para garantir que nenhuma oportunidade seja perdida.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    {/* Tabs */}
                    <div className="flex md:flex-col justify-center space-x-2 md:space-x-0 md:space-y-4 w-full md:w-1/4">
                        {tabsData.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left font-semibold p-4 rounded-lg transition-all duration-300 border-2 ${
                                    activeTab === tab.id
                                        ? 'bg-military-500 text-white border-military-600 shadow-lg'
                                        : 'bg-white text-graphite border-transparent hover:bg-gray-200'
                                }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* GIF Display */}
                    <div className="w-full md:w-3/4 h-96 bg-graphite rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                        {activeGif && (
                            <img src={activeGif} alt={`${activeTab} GIF`} className="w-full h-full object-contain" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInAction;