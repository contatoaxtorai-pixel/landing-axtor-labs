
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer data-aos="fade-up" className="bg-graphite text-gray-400 py-6">
            <div className="container mx-auto px-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;