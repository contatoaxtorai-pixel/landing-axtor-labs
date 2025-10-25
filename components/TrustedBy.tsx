import React from 'react';

const TrustedBy: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <p data-aos="fade-up" className="text-center font-semibold text-gray-500 uppercase tracking-wider">
                    Empresas que confiam na Axtor Labs
                </p>
                <div data-aos="fade-up" data-aos-delay="100" className="mt-8 flex justify-center items-center space-x-8 sm:space-x-12 flex-wrap gap-y-4">
                    {/* EDITAR AQUI: Substitua estes divs pelos logos dos seus clientes. Ex: <img src="/path/to/logo.svg" alt="Nome da Empresa" className="h-8" /> */}
                    <div className="font-bold text-xl text-gray-400 grayscale transition hover:grayscale-0 cursor-pointer">LogoMarca</div>
                    <div className="font-bold text-xl text-gray-400 grayscale transition hover:grayscale-0 cursor-pointer">Sua Empresa</div>
                    <div className="font-bold text-xl text-gray-400 grayscale transition hover:grayscale-0 cursor-pointer">Cliente Top</div>
                    <div className="font-bold text-xl text-gray-400 grayscale transition hover:grayscale-0 cursor-pointer">Parceiro</div>
                    <div className="font-bold text-xl text-gray-400 grayscale transition hover:grayscale-0 cursor-pointer hidden sm:block">Outra Marca</div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;