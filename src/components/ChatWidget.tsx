'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/Icon';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: ChatMessage = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente de Estaba en Lisboa. Pregúntame lo que quieras sobre la ciudad: barrios, miradores, comida, transporte...',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al contactar al asistente');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Algo falló al conectar con el asistente. Intenta de nuevo en un momento.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="mb-3 w-[92vw] max-w-[360px] h-[520px] bg-white rounded-xl shadow-card-hover border border-border-soft flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-night px-4 py-3.5 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="text-white font-semibold text-sm">Asistente Estaba en Lisboa</p>
                <p className="text-white/50 text-xs">Pregunta lo que quieras de la ciudad</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background-light">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-terracotta text-white'
                        : 'bg-white border border-border-soft text-text-main'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border-soft rounded-lg px-3.5 py-2.5">
                    <Icon name="progress_activity" size={16} className="animate-spin text-text-secondary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 border-t border-border-soft p-3 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta..."
                disabled={loading}
                className="flex-1 px-3 py-2 rounded-md border border-border-soft text-sm text-text-main placeholder:text-text-secondary/60 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 disabled:opacity-60"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="btn-primary w-9 h-9 p-0 flex-shrink-0 disabled:bg-border-soft disabled:text-text-secondary disabled:shadow-none disabled:cursor-not-allowed disabled:hover:translate-y-0"
                aria-label="Enviar mensaje"
              >
                <Icon name="send" size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-terracotta text-white shadow-card-hover flex items-center justify-center hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con el asistente'}
      >
        <Icon name={open ? 'close' : 'chat'} size={24} />
      </button>
    </div>
  );
}
