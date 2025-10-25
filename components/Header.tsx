import React from 'react';
import { trackEvent, Events } from '../services/analytics';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
    const handleCtaClick = () => {
        trackEvent(Events.WHATSAPP_CLICK, { placement: 'header' });
    };

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8 text-military-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 14C5 12.3431 6.34315 11 8 11H16C17.6569 11 19 12.3431 19 14V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-display font-bold text-2xl text-graphite">Axtor Labs</span>
                </div>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCtaClick}
                    className="hidden sm:inline-block bg-military-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-military-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    Agendar Demonstração
                </a>
            </div>
        </header>
    );
};

export default Header;