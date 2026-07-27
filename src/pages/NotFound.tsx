import { Home as HomeIcon, Search } from 'lucide-react';
import { useApp } from '@/context/AppContext';

type NotFoundProps = {
  onNavigate: (page: string) => void;
};

export default function NotFound({ onNavigate }: NotFoundProps) {
  const { language } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(46,125,50,0.12), transparent 50%), radial-gradient(circle at 70% 80%, rgba(201,162,39,0.08), transparent 50%)',
        }}
      />
      <div className="container-page relative z-10 text-center py-20">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 animate-float"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
        >
          <span className="text-white text-5xl font-bold arabic-font">۴۰</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-4 animate-fade-up" style={{ color: 'var(--color-text)' }}>
          {language === 'ur' ? 'صفحہ نہیں ملا' : 'Page Not Found'}
        </h1>
        <p
          className="text-lg max-w-xl mx-auto mb-8 animate-fade-up leading-relaxed"
          style={{ color: 'var(--color-text-soft)', animationDelay: '0.1s' }}
        >
          {language === 'ur'
            ? 'معاف کریں، آپ جس صفحے کی تلاش میں ہیں وہ موجود نہیں ہے۔ براہ کرم ہوم پیج پر واپس جائیں۔'
            : "Sorry, the page you're looking for doesn't exist. Please return to the home page."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <button onClick={() => onNavigate('home')} className="btn-primary">
            <HomeIcon size={18} />
            {language === 'ur' ? 'ہوم پر واپس جائیں' : 'Back to Home'}
          </button>
          <button onClick={() => onNavigate('home')} className="btn-outline">
            <Search size={18} />
            {language === 'ur' ? 'وسائل تلاش کریں' : 'Browse Topics'}
          </button>
        </div>
      </div>
    </section>
  );
}
