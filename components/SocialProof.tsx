import React from 'react';

const testimonials = [
    {
        quote: "O agente de IA transformou nosso atendimento. Os leads são qualificados na hora e a agenda está sempre cheia.",
        author: "Dr. Carlos Andrade",
        title: "Diretor, Clínica Vita Health"
    },
    {
        quote: "A implementação foi incrivelmente rápida. Em menos de 48h, já tínhamos o sistema rodando e agendando visitas.",
        author: "Juliana Martins",
        title: "Gerente, Imobiliária Morar Bem"
    },
    {
        quote: "Finalmente um atendimento padronizado e que funciona 24/7. Nossos clientes amam a rapidez das respostas.",
        author: "Pedro Costa",
        title: "Fundador, Studio Fit Life"
    }
];

const SocialProof: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-lightgray">
            <div className="container mx-auto px-6">
                <p data-aos="fade-up" className="text-center font-semibold text-gray-500 uppercase tracking-wider">
                    Usado por clínicas, estúdios e imobiliárias de ponta
                </p>
                <div data-aos="fade-up" data-aos-delay="100" className="mt-8 flex justify-center items-center space-x-8 sm:space-x-12 grayscale opacity-60">
                    <div className="font-bold text-lg">LogoMarca</div>
                    <div className="font-bold text-lg">Sua Empresa</div>
                    <div className="font-bold text-lg hidden sm:block">Cliente Top</div>
                    <div className="font-bold text-lg hidden md:block">Parceiro</div>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100} className="bg-white p-8 rounded-xl shadow-sm">
                            <p className="text-gray-700">"{testimonial.quote}"</p>
                            <div className="mt-6">
                                <p className="font-bold text-graphite">{testimonial.author}</p>
                                <p className="text-sm text-military-500">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;