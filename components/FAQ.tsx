
import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        question: "Preciso ter alto tráfego de leads para funcionar?",
        answer: "Não. Nosso agente é eficiente tanto para baixo quanto para alto volume. O mais importante é garantir que nenhum lead, por menor que seja o fluxo, fique sem resposta imediata."
    },
    {
        question: "E se eu não tiver um CRM?",
        answer: "Sem problemas. Podemos configurar o agente para enviar os leads qualificados e agendados para uma planilha do Google Sheets, seu e-mail ou diretamente no seu WhatsApp."
    },
    {
        question: "Como funciona o cancelamento?",
        answer: "Nosso serviço não tem fidelidade. Você pode cancelar a qualquer momento, sem multas ou burocracia. Basta nos avisar com 30 dias de antecedência."
    },
    {
        question: "Como é o suporte técnico?",
        answer: "Oferecemos suporte dedicado via WhatsApp e e-mail. Qualquer dúvida ou necessidade de ajuste, nossa equipe está pronta para ajudar rapidamente."
    }
];

const FaqAccordionItem: React.FC<{ item: FaqItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200/80">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6 group">
                <h3 className="text-lg font-semibold text-graphite group-hover:text-military-600 transition-colors duration-200">{item.question}</h3>
                <svg className={`w-6 h-6 text-gray-500 transform transition-all duration-300 group-hover:text-military-600 ${isOpen ? 'rotate-180 text-military-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-gray-600 pb-6">{item.answer}</p>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-white to-lightgray py-16 sm:py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">Dúvidas Frequentes</h2>
                    <p className="mt-4 text-lg text-gray-600">Respostas diretas para as perguntas mais comuns.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="mt-12 max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    {faqData.map((item, index) => (
                        <FaqAccordionItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
