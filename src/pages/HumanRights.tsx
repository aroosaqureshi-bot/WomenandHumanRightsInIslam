import { Heart } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Icon } from '@/components/Icon';
import PageHeader from '@/components/PageHeader';
import { humanRights } from '@/data/humanRights';

export default function HumanRights() {
  const { language } = useApp();
  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Universal Rights', ur: 'عالمی حقوق' }}
        title={{ en: 'Human Rights in Islam', ur: 'اسلام میں انسانی حقوق' }}
        subtitle={{
          en: 'Islam established fundamental human rights over 1,400 years ago — rights that apply to every person, regardless of faith, race, or status.',
          ur: 'اسلام نے ۱۴۰۰ سال پہلے بنیادی انسانی حقوق قائم کیے — حقوق جو ہر شخص پر لاگو ہوتے ہیں، مذہب، نسل یا حیثیت سے قطع نظر۔',
        }}
        icon={<Heart className="text-white" size={28} />}
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {humanRights.map((r, i) => (
            <article key={r.id} className="card animate-fade-up flex flex-col group" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}
                >
                  <Icon name={r.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                  {language === 'ur' ? r.titleUrdu : r.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-soft)' }}>
                {language === 'ur' ? r.descriptionUrdu : r.description}
              </p>
              <div className="mt-4 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-xs italic leading-relaxed" style={{ color: 'var(--color-gold)' }}>
                  {r.reference}
                </p>
                <p className="text-[10px] mt-2 not-italic" style={{ color: 'var(--color-text-soft)' }}>
                  {language === 'ur'
                    ? 'براہ کرم حوالہ مستند اسلامی مصادر سے تصدیق کریں۔'
                    : 'Please verify this reference from authentic Islamic sources.'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
