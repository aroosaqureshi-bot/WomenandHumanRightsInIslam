import { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Menu, X, Search, Globe, Bot } from 'lucide-react';
import { useApp } from '@/context/AppContext';

type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
  onOpenChat: () => void;
};

const navItems = [
  { id: 'home', label: 'Home', labelUrdu: 'گھر' },
  { id: 'human-rights', label: 'Human Rights', labelUrdu: 'انسانی حقوق' },
  { id: 'women-rights', label: "Women's Rights", labelUrdu: 'خواتین حقوق' },
  { id: 'quran-hadith', label: 'Quran & Hadith', labelUrdu: 'قرآن و حدیث' },
  { id: 'myths-facts', label: 'Myths vs Facts', labelUrdu: 'خرافات و حقائق' },
  { id: 'faqs', label: 'FAQs', labelUrdu: 'سوالات' },
  { id: 'blog', label: 'Blog', labelUrdu: 'بلاگ' },
  { id: 'resources', label: 'Resources', labelUrdu: 'وسائل' },
  { id: 'contact', label: 'Contact', labelUrdu: 'رابطہ' },
];

export default function Navbar({ currentPage, onNavigate, onOpenSearch, onOpenChat }: NavbarProps) {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      prevScroll.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = (item: { label: string; labelUrdu: string }) =>
    language === 'ur' ? item.labelUrdu : item.label;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px -8px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
          >
            <span className="text-white text-lg font-bold arabic-font">ع</span>
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <div className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'اسلام میں حقوق' : 'Rights in Islam'}
            </div>
            <div className="text-[10px]" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur' ? 'انسان اور خواتین' : 'Human & Women'}
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative"
              style={{
                color: currentPage === item.id ? 'var(--color-primary)' : 'var(--color-text-soft)',
                backgroundColor: currentPage === item.id ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.id) e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.id) e.currentTarget.style.color = 'var(--color-text-soft)';
              }}
            >
              {t(item)}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ color: 'var(--color-text-soft)' }}
          >
            <Search size={18} />
          </button>
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="h-9 px-2.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition-colors hover:bg-black/5"
            style={{ color: 'var(--color-text-soft)' }}
          >
            <Globe size={16} />
            {language === 'en' ? 'EN' : 'UR'}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ color: 'var(--color-text-soft)' }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={onOpenChat}
            aria-label="AI Assistant"
            className="hidden sm:flex h-9 px-3 rounded-lg items-center gap-1.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
          >
            <Bot size={16} />
            <span className="hidden md:inline">{language === 'ur' ? 'معاون' : 'Assistant'}</span>
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: 'var(--color-text)' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t overflow-hidden"
          style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
        >
          <div className="container-page py-3 grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors"
                style={{
                  color: currentPage === item.id ? 'var(--color-primary)' : 'var(--color-text-soft)',
                  backgroundColor: currentPage === item.id ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
                }}
              >
                {t(item)}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenChat();
                setMobileOpen(false);
              }}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white col-span-2 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
            >
              <Bot size={16} />
              {language === 'ur' ? 'AI اسلامی معاون' : 'AI Islamic Assistant'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
