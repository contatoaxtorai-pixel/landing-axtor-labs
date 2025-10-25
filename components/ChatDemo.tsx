import React, { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'ia';
}

const ChatDemo: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ia', text: 'Olá! 👋 Sou o agente de IA da Axtor Labs. Como posso te ajudar a entender melhor nosso serviço?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // EDITAR AQUI: Substitua esta URL pelo endpoint real do seu backend.
    const API_ENDPOINT = '/api/chat'; // Endpoint do seu backend

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();
        if (!trimmedInput) return;

        const userMessage: Message = { sender: 'user', text: trimmedInput };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmedInput }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Falha na comunicação com o servidor.');
            }

            const data = await response.json();
            const aiResponse: Message = { sender: 'ia', text: data.reply };
            setMessages(prev => [...prev, aiResponse]);

        } catch (error: any) {
            const errorMessage: Message = {
                sender: 'ia',
                text: error.message || 'Desculpe, ocorreu um erro. Por favor, tente mais tarde.',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <section className="bg-graphite text-white py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold">Converse com nossa IA</h2>
                    <p className="mt-4 text-lg text-gray-300">Experimente em tempo real a agilidade e a humanização do nosso agente. Envie uma mensagem!</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="mt-12 max-w-2xl mx-auto">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg flex flex-col h-[32rem]">
                        {/* Messages Area */}
                        <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'ia' && (
                                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-military-500">
                                            <svg className="h-6 w-6 text-military-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 14C5 12.3431 6.34315 11 8 11H16C17.6569 11 19 12.3431 19 14V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </div>
                                    )}
                                    <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-military-500 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                             {isTyping && (
                                <div className="flex items-end gap-3 justify-start">
                                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-military-500">
                                        <svg className="h-6 w-6 text-military-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 14C5 12.3431 6.34315 11 8 11H16C17.6569 11 19 12.3431 19 14V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none">
                                        <div className="flex items-center space-x-1">
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10">
                            <form onSubmit={handleSendMessage} className="flex gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-grow p-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-military-500 focus:border-military-500 outline-none"
                                />
                                <button type="submit" className="bg-military-500 text-white font-bold p-3 rounded-lg shadow-md hover:bg-military-600 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatDemo;