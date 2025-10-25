import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { trackEvent, Events } from '../services/analytics';

const Offer: React.FC = () => {
  const handleCtaClick = () => {
    trackEvent(Events.WHATSAPP_CLICK, { placement: 'offer' });
  };
    
  return (
    <section className="py-16 sm:py-24 bg-lightgray">
      <div className="container mx-auto px-6">
        <div data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:flex items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">Sua oferta completa de automação</h2>
            <p className="mt-4 text-lg text-gray-600">Receba tudo que você precisa para começar a converter mais, sem surpresas.</p>
            <ul className="mt-8 space-y-4">
              {['Agente de IA customizado', 'Implantação em 48 horas', 'Integração com CRM/Agenda', 'Suporte via WhatsApp', 'Dashboard de resultados'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 bg-graphite text-white p-8 rounded-lg shadow-2xl">
              <h3 className="font-display text-2xl font-bold">Bônus Exclusivo</h3>
              <p className="mt-2 text-gray-300">Fechando hoje, você ganha a configuração de um fluxo de nutrição pós-agendamento para reduzir o no-show.</p>
              <div className="mt-6 border-t border-military-500/30 pt-6">
                <h3 className="font-display text-2xl font-bold">Garantia</h3>
                <p className="mt-2 text-gray-300">Se não entregarmos o seu agente funcionando em 48h, você recebe 100% do seu dinheiro de volta.</p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={handleCtaClick} className="mt-8 block w-full text-center bg-military-500 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-military-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                Quero meu agente em 48h
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;