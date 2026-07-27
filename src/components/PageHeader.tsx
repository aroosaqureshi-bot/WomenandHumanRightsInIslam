import { ReactNode } from 'react';
import { useApp } from '@/context/AppContext';

type PageHeaderProps = {
  eyebrow: { en: string; ur: string };
  title: { en: string; ur: string };
  subtitle: { en: string; ur: string };
  icon?: ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle, icon }: PageHeaderProps) {
  const { language } = useApp();
  return (
    <section className="relative pt-28 pb-12 overflow-hidden islamic-pattern">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(46,125,50,0.08), transparent 60%)' }}
      />
      <div className="container-page relative text-center">
        {icon && (
          <div className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-5 animate-float" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}>
            {icon}
          </div>
        )}
        <div className="eyebrow mb-4">{language === 'ur' ? eyebrow.ur : eyebrow.en}</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          {language === 'ur' ? title.ur : title.en}
        </h1>
        <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
          {language === 'ur' ? subtitle.ur : subtitle.en}
        </p>
      </div>
    </section>
  );
}
