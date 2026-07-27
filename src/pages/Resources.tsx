import { Library, ExternalLink } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Icon } from '@/components/Icon';
import PageHeader from '@/components/PageHeader';
import { resources } from '@/data/resources';

export default function Resources() {
  const { language } = useApp();
  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Further Reading', ur: 'مزید مطالعہ' }}
        title={{ en: 'Resources', ur: 'وسائل' }}
        subtitle={{
          en: 'Trusted websites, books, and guides to deepen your understanding of Islamic rights.',
          ur: 'اسلامی حقوق کی سمجھ کو گہرا کرنے کے لیے قابل اعتماد ویب سائٹس، کتابیں اور رہنمائی۔',
        }}
        icon={<Library className="text-white" size={28} />}
      />
      <section className="container-page py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a
              key={r.id}
              href={r.url}
              target={r.url !== '#' ? '_blank' : undefined}
              rel={r.url !== '#' ? 'noopener noreferrer' : undefined}
              className="card animate-fade-up flex flex-col group"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}
                >
                  <Icon name={r.icon} className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(201,162,39,0.12)', color: 'var(--color-gold)' }}>
                  {r.type}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>
                {language === 'ur' ? r.titleUrdu : r.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-soft)' }}>
                {language === 'ur' ? r.descriptionUrdu : r.description}
              </p>
              {r.url !== '#' && (
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {language === 'ur' ? 'دیکھیں' : 'Visit'}
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
