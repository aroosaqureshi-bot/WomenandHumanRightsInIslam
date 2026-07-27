import { Users } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Icon } from '@/components/Icon';
import PageHeader from '@/components/PageHeader';
import { womenRights } from '@/data/womenRights';

export default function WomenRights() {
  const { language } = useApp();
  return (
    <div>
      <PageHeader
        eyebrow={{ en: "Women's Rights", ur: 'خواتین حقوق' }}
        title={{ en: "Women's Rights in Islam", ur: 'اسلام میں خواتین کے حقوق' }}
        subtitle={{
          en: 'Islam granted women rights to education, property, inheritance, marriage choice, work, and financial security — revolutionary for its time.',
          ur: 'اسلام نے عورتوں کو تعلیم، ملکیت، وراثت، شادی کے انتخاب، کام اور مالی تحفظ کے حقوق دیے — اپنے وقت کے لیے انقلابی۔',
        }}
        icon={<Users className="text-white" size={28} />}
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {womenRights.map((r, i) => (
            <article key={r.id} className="card animate-fade-up flex flex-col group" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(201,162,39,0.12)', color: 'var(--color-gold)' }}
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
                <p className="text-xs italic leading-relaxed" style={{ color: 'var(--color-primary)' }}>
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
