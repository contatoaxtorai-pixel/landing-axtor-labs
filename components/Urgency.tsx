
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { trackEvent, Events } from '../services/analytics';

const Urgency: React.FC = () => {
    const handleCtaClick = () => {
        trackEvent(Events.WHATSAPP_CLICK, { placement: 'urgency_section' });
    };

    return (
        <section className="bg-lightgray py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-graphite">
                        Enquanto você lê isso, seu concorrente já respondeu o lead.
                    </h2>
                    <p className="mt-6 text-lg text-gray-700">
                        O mercado não espera. Estudos mostram que responder um lead nos primeiros <span className="font-bold text-military-600">5 minutos</span> aumenta a chance de conversão em até <span className="font-bold text-military-600">900%</span>.
                    </p>
                    <p className="mt-4 text-lg text-gray-700">
                        Quantos clientes você perdeu <strong className="text-red-600">hoje</strong> por não ter um atendimento instantâneo?
                    </p>
                    <div data-aos="fade-up" data-aos-delay="100" className="mt-10">
                         <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleCtaClick}
                            className="inline-block bg-military-500 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-military-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                        >
                            Não Perca Mais Clientes
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Urgency;
