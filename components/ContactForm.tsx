import React, { useState } from 'react';
import type { FormData } from '../types';
import { WEBHOOK_URL } from '../constants';
import { trackEvent, Events } from '../services/analytics';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', whatsapp: '', lgpd: false });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.lgpd) {
            setError('Você precisa aceitar os termos da LGPD.');
            return;
        }
        setStatus('loading');
        setError(null);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Ocorreu um erro ao enviar. Tente novamente.');
            }
            
            trackEvent(Events.FORM_SUBMIT, { name: formData.name, email: formData.email });
            trackEvent(Events.GENERATE_LEAD, { method: 'form' });

            setStatus('success');
            setFormData({ name: '', email: '', whatsapp: '', lgpd: false });

        } catch (err: any) {
            setStatus('error');
            setError(err.message || 'Falha no envio. Por favor, tente mais tarde.');
        }
    };
    
    if (status === 'success') {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-green-600">Enviado com sucesso!</h3>
                <p className="mt-4 text-gray-600">Obrigado! Entraremos em contato em breve.</p>
            </div>
        )
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-display text-2xl font-bold text-graphite mb-6">Receba uma demonstração</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                    <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-military-500 focus:border-military-500" />
                    <input type="email" name="email" placeholder="Seu melhor e-mail" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-military-500 focus:border-military-500" />
                    <input type="tel" name="whatsapp" placeholder="WhatsApp (com DDD)" value={formData.whatsapp} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-military-500 focus:border-military-500" />
                </div>
                <div className="mt-6">
                    <label className="flex items-start">
                        <input type="checkbox" name="lgpd" checked={formData.lgpd} onChange={handleChange} className="h-5 w-5 rounded border-gray-300 text-military-600 focus:ring-military-500 mt-0.5" />
                        <span className="ml-3 text-sm text-gray-600">Eu concordo em receber comunicações e entendo que meus dados serão usados de acordo com a Política de Privacidade.</span>
                    </label>
                </div>
                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={status === 'loading'} className="w-full mt-6 bg-military-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-military-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none">
                    {status === 'loading' ? 'Enviando...' : 'Quero meu agente em 72h'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;