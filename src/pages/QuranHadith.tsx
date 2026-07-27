import { useState } from 'react';
import { BookOpen, Scroll, Volume2, Square } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import { quranVerses, hadiths } from '@/data/quranHadith';

export default function QuranHadith() {
  const { language } = useApp();
  const [tab, setTab] = useState<'quran' | 'hadith'>('quran');
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const speak = (id: string, text: string, lang: string) => {
    if (!('speechSynthesis' in window)) return;
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.onend = () => setSpeakingId(null);
    utter.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utter);
  };

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Sources', ur: 'مصادر' }}
        title={{ en: 'Quran & Hadith References', ur: 'قرآن و حدیث کے حوالے' }}
        subtitle={{
          en: 'Authentic Quranic verses and hadith with simple, clear explanations on rights and justice.',
          ur: 'حقوق اور انصاف پر مستند قرآنی آیات اور احادیث سادہ و واضح وضاحت کے ساتھ۔',
        }}
        icon={<BookOpen className="text-white" size={28} />}
      />

      <section className="container-page py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl border" style={{ backgroundColor: 'var(--color-bg-soft)', borderColor: 'var(--color-border)' }}>
            <button
              onClick={() => setTab('quran')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                backgroundColor: tab === 'quran' ? 'var(--color-primary)' : 'transparent',
                color: tab === 'quran' ? 'white' : 'var(--color-text-soft)',
              }}
            >
              <BookOpen size={16} />
              {language === 'ur' ? 'قرآن' : 'Quran'}
            </button>
            <button
              onClick={() => setTab('hadith')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                backgroundColor: tab === 'hadith' ? 'var(--color-gold)' : 'transparent',
                color: tab === 'hadith' ? 'white' : 'var(--color-text-soft)',
              }}
            >
              <Scroll size={16} />
              {language === 'ur' ? 'حدیث' : 'Hadith'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tab === 'quran'
            ? quranVerses.map((v, i) => (
                <article key={v.id} className="card animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                      {v.theme}
                    </span>
                    <button
                      onClick={() => speak(v.id, language === 'ur' ? v.translationUrdu : v.translation, language === 'ur' ? 'ur-PK' : 'en-US')}
                      className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/5"
                      style={{ color: speakingId === v.id ? 'var(--color-primary)' : 'var(--color-text-soft)' }}
                    >
                      {speakingId === v.id ? <Square size={14} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                  <p className="arabic-font text-2xl mb-4 leading-loose text-center" dir="rtl" style={{ color: 'var(--color-primary)' }}>
                    {v.arabic}
                  </p>
                  <p className="text-sm italic mb-2" style={{ color: 'var(--color-text)' }}>"{language === 'ur' ? v.translationUrdu : v.translation}"</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-gold)' }}>— {v.reference}</p>
                  <p className="text-xs leading-relaxed pt-3 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-soft)' }}>
                    {v.explanation}
                  </p>
                </article>
              ))
            : hadiths.map((h, i) => (
                <article key={h.id} className="card animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(201,162,39,0.12)', color: 'var(--color-gold)' }}>
                      {h.narrator}
                    </span>
                    <button
                      onClick={() => speak(h.id, language === 'ur' ? h.translationUrdu : h.translation, language === 'ur' ? 'ur-PK' : 'en-US')}
                      className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/5"
                      style={{ color: speakingId === h.id ? 'var(--color-gold)' : 'var(--color-text-soft)' }}
                    >
                      {speakingId === h.id ? <Square size={14} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                  <p className="arabic-font text-2xl mb-4 leading-loose text-center" dir="rtl" style={{ color: 'var(--color-gold)' }}>
                    {h.arabic}
                  </p>
                  <p className="text-sm italic mb-2" style={{ color: 'var(--color-text)' }}>"{language === 'ur' ? h.translationUrdu : h.translation}"</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>— {h.reference}</p>
                  <p className="text-xs leading-relaxed pt-3 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-soft)' }}>
                    {h.explanation}
                  </p>
                </article>
              ))}
        </div>
      </section>
    </div>
  );
}
