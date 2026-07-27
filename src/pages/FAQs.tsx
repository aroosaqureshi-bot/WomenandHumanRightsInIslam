import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import { faqs } from '@/data/faqs';

export default function FAQs() {
  const { language } = useApp();
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Questions & Answers', ur: 'سوالات و جوابات' }}
        title={{ en: 'Frequently Asked Questions', ur: 'اکثر پوچھے جانے والے سوالات' }}
        subtitle={{
          en: 'Clear answers to the most common questions about human and women\u2019s rights in Islam.',
          ur: 'اسلام میں انسانی اور خواتین حقوق کے بارے میں سب سے عام سوالات کے واضح جوابات۔',
        }}
        icon={<HelpCircle className="text-white" size={28} />}
      />
      <section className="container-page py-12">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <div key={f.id} className="card animate-fade-up p-0 overflow-hidden" style={{ animationDelay: `${i * 0.05}s` }}>
                <button
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}
                  >
                    <span className="font-bold text-sm">?</span>
                  </div>
                  <p className="flex-1 font-medium text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                    {language === 'ur' ? f.questionUrdu : f.question}
                  </p>
                  <div className="shrink-0" style={{ color: 'var(--color-primary)' }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-[fadeInUp_0.3s_ease-out]">
                    <p className="text-sm leading-relaxed pl-13" style={{ color: 'var(--color-text-soft)' }}>
                      {language === 'ur' ? f.answerUrdu : f.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
