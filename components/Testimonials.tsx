import React from 'react';

// EDITAR AQUI: Substitua este conteúdo pelos depoimentos reais dos seus clientes.
const testimonials = [
    {
        quote: "O agente de IA transformou nosso atendimento. Os leads são qualificados na hora e a agenda está sempre cheia.",
        author: "Dr. Carlos Andrade",
        title: "Diretor, Clínica Vita Health",
    },
    {
        quote: "A implementação foi incrivelmente rápida. Em menos de 72h úteis, já tínhamos o sistema rodando e agendando visitas.",
        author: "Juliana Martins",
        title: "Gerente, Imobiliária Morar Bem",
    },
    {
        quote: "Finalmente um atendimento padronizado e que funciona 24/7. Nossos clientes amam a rapidez das respostas.",
        author: "Pedro Costa",
        title: "Fundador, Studio Fit Life",
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-graphite py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">O que nossos clientes dizem</h2>
                    <p className="mt-4 text-lg text-gray-300">Resultados reais de empresas que aceleraram com a Axtor Labs.</p>
                </div>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={100 + index * 100} className="bg-gray-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg flex flex-col transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-military-500/10">
                            <svg className="w-8 h-8 text-military-400 mb-4" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M96 224C84.72 224 75.55 229.3 68.43 238.2C61.3 247.1 56 256.3 56 265.1V384C56 392.8 61.3 401.1 68.43 410.7C75.55 419.4 84.72 424 96 424H128C139.3 424 148.5 419.4 155.6 410.7C162.7 401.1 168 392.8 168 384V344C168 335.2 162.7 326.9 155.6 318.2C148.5 309.3 139.3 304 128 304H112V265.1C112 256.3 107.7 247.1 100.6 238.2C93.45 229.3 84.28 224 72 224H96V224zM328 224C316.7 224 307.5 229.3 300.4 238.2C293.3 247.1 288 256.3 288 265.1V384C288 392.8 293.3 401.1 300.4 410.7C307.5 419.4 316.7 424 328 424H360C371.3 424 380.5 419.4 387.6 410.7C394.7 401.1 400 392.8 400 384V344C400 335.2 394.7 326.9 387.6 318.2C380.5 309.3 371.3 304 360 304H344V265.1C344 256.3 339.7 247.1 332.6 238.2C325.5 229.3 316.3 224 304 224H328V224z"/>
                            </svg>
                            <p className="text-gray-300 text-lg flex-grow italic">"{testimonial.quote}"</p>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-military-400">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;