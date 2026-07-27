import { useState } from 'react';
import { Scale, XCircle, CheckCircle2, Plus, Minus } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import { mythsVsFacts } from '@/data/mythsFacts';

export default function MythsFacts() {
  const { language } = useApp();
  const [open, setOpen] = useState<string | null>(mythsVsFacts[0].id);

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Clarify the Truth', ur: 'حقیقت واضح کریں' }}
        title={{ en: 'Myths vs Facts', ur: 'خرافات و حقائق' }}
        subtitle={{
          en: 'Common misconceptions about Islam, clarified with evidence from the Quran and authentic hadith.',
          ur: 'اسلام کے بارے میں عام غلط فہمیاں، قرآن اور مستند احادیث کے شواہد سے واضح۔',
        }}
        icon={<Scale className="text-white" size={28} />}
      />
      <section className="container-page py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {mythsVsFacts.map((m, i) => {
            const isOpen = open === m.id;
            return (
              <div
                key={m.id}
                className="card animate-fade-up p-0 overflow-hidden"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : m.id)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#DC2626' }}
                  >
                    <XCircle size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#DC2626' }}>
                      {language === 'ur' ? 'خرافہ' : 'Myth'}
                    </div>
                    <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                      {language === 'ur' ? m.mythUrdu : m.myth}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform"
                    style={{ color: 'var(--color-primary)', transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 animate-[fadeInUp_0.3s_ease-out]">
                    <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(46,125,50,0.06)' }}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(46,125,50,0.15)', color: 'var(--color-primary)' }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>
                          {language === 'ur' ? 'حقیقت' : 'Fact'}
                        </div>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text)' }}>
                          {language === 'ur' ? m.factUrdu : m.fact}
                        </p>
                        <p className="text-xs italic" style={{ color: 'var(--color-gold)' }}>
                          {m.reference}
                        </p>
                      </div>
                    </div>
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
