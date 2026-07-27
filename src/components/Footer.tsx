import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, Github, Globe, FileText, Shield } from 'lucide-react';
import { useApp } from '@/context/AppContext';

type FooterProps = {
  onNavigate: (page: string) => void;
};

const links = [
  { id: 'home', label: 'Home', labelUrdu: 'گھر' },
  { id: 'human-rights', label: 'Human Rights', labelUrdu: 'انسانی حقوق' },
  { id: 'women-rights', label: "Women's Rights", labelUrdu: 'خواتین حقوق' },
  { id: 'quran-hadith', label: 'Quran & Hadith', labelUrdu: 'قرآن و حدیث' },
  { id: 'myths-facts', label: 'Myths vs Facts', labelUrdu: 'خرافات و حقائق' },
  { id: 'quiz', label: 'Quiz', labelUrdu: 'کوئز' },
  { id: 'faqs', label: 'FAQs', labelUrdu: 'سوالات' },
  { id: 'blog', label: 'Blog', labelUrdu: 'بلاگ' },
  { id: 'resources', label: 'Resources', labelUrdu: 'وسائل' },
  { id: 'contact', label: 'Contact', labelUrdu: 'رابطہ' },
];

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

const GITHUB_URL = 'https://github.com/Aroosa';
const VERCEL_URL = 'https://islamic-rights.vercel.app';

export default function Footer({ onNavigate }: FooterProps) {
  const { language } = useApp();
  const t = (l: { label: string; labelUrdu: string }) => (language === 'ur' ? l.labelUrdu : l.label);

  return (
    <footer
      className="mt-20 border-t islamic-pattern"
      style={{ backgroundColor: 'var(--color-bg-soft)', borderColor: 'var(--color-border)' }}
    >
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
              >
                <span className="text-white text-lg font-bold arabic-font">ع</span>
              </div>
              <div className="font-bold" style={{ color: 'var(--color-text)' }}>
                {language === 'ur' ? 'اسلام میں حقوق' : 'Rights in Islam'}
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur'
                ? 'اسلام میں انسانی اور خواتین حقوق پر ایک تعلیمی پلیٹ فارم، قرآن اور سنت کی روشنی میں۔'
                : 'An educational platform on human and women\u2019s rights in Islam, in the light of the Quran and Sunnah.'}
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    color: 'var(--color-primary)',
                    backgroundColor: 'rgba(46, 125, 50, 0.08)',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'فوری روابط' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: 'var(--color-text-soft)' }}
                  >
                    {t(l)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'رابطہ' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-soft)' }}>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>info@islamicrights.org</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span>{language === 'ur' ? 'عالمی دفتر، آن لائن' : 'Global Office, Online'}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter + Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'روزانہ آیت' : 'Daily Verse'}
            </h4>
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur'
                ? 'روزانہ ایک قرآنی آیت اور حدیث اپنے ای میل پر حاصل کریں۔'
                : 'Get a daily Quran verse and hadith delivered to your email.'}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder={language === 'ur' ? 'آپ کا ای میل' : 'Your email'}
                className="input-field text-sm py-2.5"
                aria-label={language === 'ur' ? 'ای میل' : 'Email'}
              />
              <button
                type="submit"
                className="btn-primary px-4 py-2.5 text-sm shrink-0"
              >
                {language === 'ur' ? 'جمع کریں' : 'Join'}
              </button>
            </form>
            <div className="mt-5 space-y-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs transition-colors hover:underline" style={{ color: 'var(--color-text-soft)' }}>
                <Github size={14} style={{ color: 'var(--color-primary)' }} />
                {language === 'ur' ? 'گٹ ہب ریپوزٹری' : 'GitHub Repository'}
              </a>
              <a href={VERCEL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs transition-colors hover:underline" style={{ color: 'var(--color-text-soft)' }}>
                <Globe size={14} style={{ color: 'var(--color-primary)' }} />
                {language === 'ur' ? 'ورسل ویب سائٹ' : 'Vercel Live Website'}
              </a>
              <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-xs transition-colors hover:underline" style={{ color: 'var(--color-text-soft)' }}>
                <Shield size={14} style={{ color: 'var(--color-primary)' }} />
                {language === 'ur' ? 'پرائیویسی پالیسی' : 'Privacy Policy'}
              </button>
              <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-xs transition-colors hover:underline" style={{ color: 'var(--color-text-soft)' }}>
                <FileText size={14} style={{ color: 'var(--color-primary)' }} />
                {language === 'ur' ? 'استعمال کی شرائط' : 'Terms of Use'}
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-soft)' }}
        >
          <p>
            {language === 'ur'
              ? '© ۲۰۲۶ اسلام میں حقوق۔ جملہ حقوق محفوظ ہیں۔'
              : '© 2026 Rights in Islam. All rights reserved.'}
          </p>
          <p className="flex items-center gap-1.5">
            {language === 'ur' ? 'ڈویلپر:' : 'Developer:'}
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>Aroosa</span>
            <span className="mx-1">•</span>
            {language === 'ur' ? 'محبت کے ساتھ بنایا گیا' : 'Made with'}
            <Heart size={12} fill="currentColor" style={{ color: 'var(--color-primary)' }} />
            {language === 'ur' ? ' کے ساتھ' : ' for education'}
          </p>
        </div>
      </div>
    </footer>
  );
}
