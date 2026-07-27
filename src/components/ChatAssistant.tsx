import { useEffect, useRef, useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { findAnswer } from '@/data/aiKnowledge';

type ChatMessage = {
  role: 'user' | 'ai';
  text: string;
  references?: { text: string; source: string }[];
};

type ChatAssistantProps = {
  open: boolean;
  onClose: () => void;
};

const suggestions = [
  'What rights does Islam give to women?',
  'What are human rights in Islam?',
  'What does the Quran say about justice?',
  'Can a woman choose her husband in Islam?',
];

const suggestionsUrdu = [
  'اسلام عورتوں کو کون سے حقوق دیتا ہے؟',
  'اسلام میں انسانی حقوق کیا ہیں؟',
  'قرآن انصاف کے بارے میں کیا کہتا ہے؟',
  'کی عورت اسلام میں اپنا شوہر چن سکتی ہے؟',
];

export default function ChatAssistant({ open, onClose }: ChatAssistantProps) {
  const { language } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: 'ai',
          text:
            language === 'ur'
              ? 'السلام علیکم! میں اسلامی حقوق معاون ہوں۔ انسانی اور خواتین حقوق، قرآن اور حدیث کے حوالے سے آپ کے سوالات کا جواب دے سکتا ہوں۔ کیا پوچھنا چاہیں گے؟'
              : 'Assalamu Alaikum! I am your Islamic Rights Assistant. I can answer questions about human and women\u2019s rights in Islam with Quran and Hadith references. What would you like to ask?',
        },
      ]);
    }
  }, [open, language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    const userMsg: ChatMessage = { role: 'user', text: q };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const entry = findAnswer(q);
      const aiMsg: ChatMessage = entry
        ? {
            role: 'ai',
            text: language === 'ur' ? entry.answerUrdu : entry.answer,
            references: entry.references,
          }
        : {
            role: 'ai',
            text:
              language === 'ur'
                ? 'معاف کریں، مجھے اس سوال کا جواب نہیں معلوم۔ براہ کرم مخصوص موضوعات جیسے خواتین حقوق، انسانی حقوق، انصاف، تعلیم، وراثت، یا شادی کے بارے میں پوچھیں۔'
                : 'I\u2019m sorry, I don\u2019t have an answer for that question. Please try asking about specific topics like women\u2019s rights, human rights, justice, education, inheritance, or marriage.',
          };
      setMessages((m) => [...m, aiMsg]);
      setTyping(false);
    }, 700);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full sm:max-w-lg h-[85vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl border shadow-2xl flex flex-col overflow-hidden animate-fade-up"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 p-4 border-b"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white text-sm">
              {language === 'ur' ? 'اسلامی حقوق معاون' : 'Islamic Rights Assistant'}
            </div>
            <div className="text-xs text-white/80 flex items-center gap-1">
              <Sparkles size={10} />
              {language === 'ur' ? 'قرآن و حدیث سے جوابات' : 'Answers from Quran & Hadith'}
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center text-white/90 hover:bg-white/10">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'
                }`}
                style={m.role === 'ai' ? { border: '1px solid var(--color-border)' } : {}}
              >
                <p className="leading-relaxed">{m.text}</p>
                {m.references && m.references.length > 0 && (
                  <div className="mt-3 pt-3 border-t space-y-2" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="text-[10px] uppercase font-semibold tracking-wider" style={{ color: 'var(--color-primary)' }}>
                      {language === 'ur' ? 'حوالہ جات' : 'References'}
                    </div>
                    {m.references.map((ref, j) => (
                      <div key={j} className="text-xs italic" style={{ color: 'var(--color-text-soft)' }}>
                        "{ref.text}"
                        <span className="block not-italic font-medium mt-0.5" style={{ color: 'var(--color-primary)' }}>
                          — {ref.source}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="chat-bubble-ai rounded-2xl px-4 py-3 flex gap-1" style={{ border: '1px solid var(--color-border)' }}>
                <span className="w-2 h-2 rounded-full bg-current opacity-50 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-current opacity-50 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-current opacity-50 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {(language === 'ur' ? suggestionsUrdu : suggestions).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:scale-105"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  backgroundColor: 'rgba(46, 125, 50, 0.06)',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="p-3 border-t flex gap-2"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === 'ur' ? 'اپنا سوال لکھیں...' : 'Type your question...'}
            className="input-field text-sm"
          />
          <button
            type="submit"
            aria-label="Send"
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
