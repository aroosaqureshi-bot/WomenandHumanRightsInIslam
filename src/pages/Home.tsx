import { useState, useEffect } from 'react';
import { ArrowRight, Quote, BookOpen, Scale, Users, Sparkles, Bot, Compass, Heart, GraduationCap, ChevronRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { quranVerses, hadiths } from '@/data/quranHadith';

type HomeProps = {
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
};

const features = [
  { icon: Scale, page: 'human-rights', en: 'Human Rights', ur: 'انسانی حقوق', desc: 'Explore the rights to life, justice, education, equality, and dignity.', descUrdu: 'زندگی، انصاف، تعلیم، مساوات اور وقار کے حقوق دریافت کریں۔' },
  { icon: Users, page: 'women-rights', en: "Women's Rights", ur: 'خواتین حقوق', desc: 'Discover the rights Islam grants to women — from education to inheritance.', descUrdu: 'اسلام میں عورتوں کے حقوق دریافت کریں — تعلیم سے وراثت تک۔' },
  { icon: BookOpen, page: 'quran-hadith', en: 'Quran & Hadith', ur: 'قرآن و حدیث', desc: 'Read authentic verses and hadith with simple explanations.', descUrdu: 'مستند آیات اور احادیث سادہ وضاحت کے ساتھ پڑھیں۔' },
  { icon: Sparkles, page: 'myths-facts', en: 'Myths vs Facts', ur: 'خرافات و حقائق', desc: 'Clarify misconceptions with evidence-based facts.', descUrdu: 'غلط فہمیوں کو شواہد پر مبنی حقائق سے واضح کریں۔' },
];

export default function Home({ onNavigate, onOpenChat }: HomeProps) {
  const { language } = useApp();
  const [verseIndex, setVerseIndex] = useState(0);

  useEffect(() => {
    const day = new Date().getDate();
    setVerseIndex(day % quranVerses.length);
  }, []);

  const verse = quranVerses[verseIndex];
  const hadith = hadiths[verseIndex % hadiths.length];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 30% 20%, rgba(46,125,50,0.12), transparent 50%), radial-gradient(circle at 70% 80%, rgba(201,162,39,0.08), transparent 50%)' }}
        />
        <div className="container-page relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-fade-up" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
            <Sparkles size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {language === 'ur' ? 'قرآن و سنت کی روشنی میں' : 'In the Light of Quran & Sunnah'}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up max-w-4xl mx-auto" style={{ color: 'var(--color-text)', animationDelay: '0.1s' }}>
            {language === 'ur' ? (
              <>اسلام میں <span style={{ color: 'var(--color-primary)' }}>انسانی اور خواتین</span> حقوق</>
            ) : (
              <>Human & Women's Rights <span style={{ color: 'var(--color-primary)' }}>in Islam</span></>
            )}
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 animate-fade-up leading-relaxed" style={{ color: 'var(--color-text-soft)', animationDelay: '0.2s' }}>
            {language === 'ur'
              ? 'عدل، مساوات، اور وقار کے اسلامی تصور کو دریافت کریں۔ قرآن اور مستند احادیث کی روشنی میں حقائق جاننا۔'
              : 'Discover the Islamic vision of justice, equality, and dignity. Learn the facts in the light of the Quran and authentic hadith.'}
          </p>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl p-8 border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <Quote className="absolute -top-4 left-6 w-8 h-8 p-1.5 rounded-full" style={{ background: 'var(--color-primary)', color: 'white' }} />
              <p className="arabic-font text-2xl mb-4 leading-loose" style={{ color: 'var(--color-primary)' }} dir="rtl">
                {verse.arabic}
              </p>
              <p className="text-base italic mb-2" style={{ color: 'var(--color-text)' }}>
                "{verse.translation}"
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-gold)' }}>
                — {verse.reference}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={() => onNavigate('human-rights')} className="btn-primary">
              {language === 'ur' ? 'حقائق دریافت کریں' : 'Explore Now'}
              <ArrowRight size={18} />
            </button>
            <button onClick={onOpenChat} className="btn-outline">
              <Bot size={18} />
              {language === 'ur' ? 'AI معاون سے بات کریں' : 'Ask AI Assistant'}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const el = document.getElementById('home-intro');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label={language === 'ur' ? 'نیچے سکرول کریں' : 'Scroll down'}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-transform hover:scale-125"
          style={{ color: 'var(--color-primary)' }}
        >
          <ChevronRight size={24} className="rotate-90" />
        </button>
      </section>

      {/* Introduction */}
      <section id="home-intro" className="py-20 container-page scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">{language === 'ur' ? 'تعارف' : 'Introduction'}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'حقوق کا ایک جامع نظام' : 'A Comprehensive System of Rights'}
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur'
                ? 'اسلام نے چودہ صدیوں پہلے انسانی حقوق کا ایک مکمل نظام قائم کیا — زندگی، انصاف، تعلیم، مساوات، مذہبی آزادی اور وقار کے حقوق۔ یہ حقوق سب پر لاگو ہوتے ہیں، مذہب، نسل یا جنس سے قطع نظر۔'
                : 'Islam established a complete system of human rights over fourteen centuries ago — the rights to life, justice, education, equality, freedom of religion, and dignity. These rights apply to all people, regardless of faith, race, or gender.'}
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur'
                ? 'یہ پلیٹ فارم تعلیمی مقاصد کے لیے ہے، قرآن اور مستند احادیث پر مبنی، تاکہ ہر شخص اسلامی تعلیمات کو سمجھ سکے۔'
                : 'This platform is for educational purposes, grounded in the Quran and authentic hadith, so every person can understand Islamic teachings.'}
            </p>
            <button onClick={() => onNavigate('quran-hadith')} className="btn-primary">
              {language === 'ur' ? 'قرآن و حدیث دیکھیں' : 'View Quran & Hadith'}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, label: { en: 'Right to Life', ur: 'زندگی کا حق' }, ref: '5:32' },
              { icon: Scale, label: { en: 'Right to Justice', ur: 'انصاف کا حق' }, ref: '4:135' },
              { icon: GraduationCap, label: { en: 'Right to Education', ur: 'تعلیم کا حق' }, ref: 'Ibn Majah' },
              { icon: Compass, label: { en: 'Freedom of Religion', ur: 'مذہبی آزادی' }, ref: '2:256' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => onNavigate('human-rights')}
                className="card text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                  <item.icon size={22} />
                </div>
                <div className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                  {language === 'ur' ? item.label.ur : item.label.en}
                </div>
                <div className="text-xs" style={{ color: 'var(--color-gold)' }}>{item.ref}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-16 container-page">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">{language === 'ur' ? 'موضوعات' : 'Topics'}</div>
          <h2 className="section-title">{language === 'ur' ? 'حقائق دریافت کریں' : 'Explore the Topics'}</h2>
          <p className="section-subtitle">
            {language === 'ur' ? 'ہر موضوع قرآن اور مستند احادیث سے مستند ہے۔' : 'Every topic is grounded in the Quran and authentic hadith.'}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <button
              key={f.page}
              onClick={() => onNavigate(f.page)}
              className="card text-left animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                <f.icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>
                {language === 'ur' ? f.ur : f.en}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-soft)' }}>
                {language === 'ur' ? f.descUrdu : f.desc}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                {language === 'ur' ? 'مزید پڑھیں' : 'Read more'}
                <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Daily Verse & Hadith */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="container-page">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">{language === 'ur' ? 'روزانہ' : 'Daily'}</div>
            <h2 className="section-title">{language === 'ur' ? 'روزانہ آیت و حدیث' : 'Verse & Hadith of the Day'}</h2>
            <button onClick={() => onNavigate('quran-hadith')} className="btn-outline mt-6">
              {language === 'ur' ? 'تمام حوالے دیکھیں' : 'View All References'}
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                  {language === 'ur' ? 'قرآن' : 'Quran'}
                </span>
              </div>
              <p className="arabic-font text-xl mb-4 leading-loose text-center" dir="rtl" style={{ color: 'var(--color-primary)' }}>
                {verse.arabic}
              </p>
              <p className="text-sm italic mb-2" style={{ color: 'var(--color-text)' }}>"{verse.translation}"</p>
              <p className="text-xs font-semibold" style={{ color: 'var(--color-gold)' }}>— {verse.reference}</p>
              <p className="text-xs mt-3 pt-3 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-soft)' }}>
                {verse.explanation}
              </p>
            </div>
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} style={{ color: 'var(--color-gold)' }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-gold)' }}>
                  {language === 'ur' ? 'حدیث' : 'Hadith'}
                </span>
              </div>
              <p className="arabic-font text-xl mb-4 leading-loose text-center" dir="rtl" style={{ color: 'var(--color-gold)' }}>
                {hadith.arabic}
              </p>
              <p className="text-sm italic mb-2" style={{ color: 'var(--color-text)' }}>"{hadith.translation}"</p>
              <p className="text-xs font-semibold" style={{ color: 'var(--color-primary)' }}>— {hadith.reference}</p>
              <p className="text-xs mt-3 pt-3 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-soft)' }}>
                {hadith.explanation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20 container-page">
        <div
          className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
        >
          <div className="absolute inset-0 islamic-pattern opacity-30" />
          <div className="relative z-10">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-white/20 items-center justify-center mb-5 animate-float">
              <Bot size={32} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {language === 'ur' ? 'AI اسلامی حقوق معاون' : 'AI Islamic Rights Assistant'}
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base">
              {language === 'ur'
                ? 'اپنے سوالات پوچھیں اور قرآن و حدیث سے مستند جوابات حاصل کریں۔'
                : 'Ask your questions and get respectful answers grounded in the Quran and authentic hadith.'}
            </p>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white font-semibold transition-transform hover:scale-105"
              style={{ color: 'var(--color-primary)' }}
            >
              <Bot size={18} />
              {language === 'ur' ? 'ابھی بات شروع کریں' : 'Start Chatting Now'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
