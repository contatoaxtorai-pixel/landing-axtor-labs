import React from 'react';
import ContactForm from './ContactForm';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-graphite text-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Pronto para automatizar seu crescimento?</h2>
              <p className="mt-4 text-lg text-gray-300">Receba tudo que você precisa para começar a converter mais, sem surpresas. A cada hora que você espera, um novo cliente pode ir para a concorrência.</p>
              
              <ul className="mt-8 space-y-4">
                {['Agente de IA customizado', 'Implantação em 72 horas úteis', 'Integração com CRM/Agenda', 'Suporte via WhatsApp', 'Dashboard de resultados'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-6 w-6 text-military-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="font-display text-xl font-bold">Garantia de 72h úteis</h3>
                  <p className="mt-2 text-gray-300">Se não entregarmos seu agente para testes em 72h úteis, você recebe 100% do seu dinheiro de volta.</p>
              </div>

            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;