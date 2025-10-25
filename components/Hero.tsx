import React from 'react';
import { trackEvent, Events } from '../services/analytics';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
    const handleCtaClick = () => {
        trackEvent(Events.WHATSAPP_CLICK, { placement: 'hero' });
    };

    // EDITAR AQUI: Substitua pela URL do seu vídeo de fundo.
    const VIDEO_URL = "https://cdn.coverr.co/videos/coverr-a-man-and-a-robot-are-playing-chess-4806/1080p.mp4";
    
    // EDITAR AQUI: Substitua pela URL de uma imagem de placeholder para o vídeo.
    const POSTER_URL = "https://storage.coverr.co/videos/coverr-a-man-and-a-robot-are-playing-chess-4806/thumbnail.jpg";

    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden bg-graphite">
            <div 
                className="absolute top-0 left-0 w-full h-full z-10"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.7) 20%, rgba(17, 24, 39, 0.7) 80%, rgba(17, 24, 39, 1) 100%)' }}
            ></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                poster={POSTER_URL}
            >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
                 <div data-aos="fade-up" className="max-w-4xl">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        Pare de Perder Vendas por Demora no Atendimento
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-200">
                        Nosso Agente de IA responde, qualifica e agenda seus leads no WhatsApp em segundos, 24/7.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleCtaClick}
                        className="inline-block bg-military-500 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-military-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                    >
                        Agendar Demonstração Gratuita
                    </a>
                    <p className="mt-4 text-sm text-gray-400">Implantação para testes em 72h úteis.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;