import { useEffect, useMemo, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { humanRights } from '@/data/humanRights';
import { womenRights } from '@/data/womenRights';
import { quranVerses, hadiths } from '@/data/quranHadith';
import { mythsVsFacts } from '@/data/mythsFacts';
import { faqs } from '@/data/faqs';
import { blogPosts } from '@/data/blogPosts';
import { resources } from '@/data/resources';

type SearchItem = {
  id: string;
  title: string;
  titleUrdu: string;
  snippet: string;
  snippetUrdu: string;
  page: string;
};

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
};

export default function SearchModal({ open, onClose, onNavigate }: SearchModalProps) {
  const { language } = useApp();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const items: SearchItem[] = useMemo(() => {
    const all: SearchItem[] = [];
    // Pages
    const pages = [
      { id: 'home', title: 'Home', titleUrdu: 'گھر', snippet: 'Introduction to human and women\u2019s rights in Islam.', snippetUrdu: 'اسلام میں انسانی اور خواتین حقوق کا تعارف۔', page: 'home' },
      { id: 'human-rights', title: 'Human Rights', titleUrdu: 'انسانی حقوق', snippet: 'The right to life, justice, education, equality, freedom of religion, and dignity.', snippetUrdu: 'زندگی، انصاف، تعلیم، مساوات، مذہبی آزادی اور وقار کا حق۔', page: 'human-rights' },
      { id: 'women-rights', title: "Women's Rights", titleUrdu: 'خواتین حقوق', snippet: 'Education, property, inheritance, marriage choice, respect, work, and financial security.', snippetUrdu: 'تعلیم، ملکیت، وراثت، شادی کا انتخاب، احترام، کام، مالی تحفظ۔', page: 'women-rights' },
      { id: 'quran-hadith', title: 'Quran & Hadith', titleUrdu: 'قرآن و حدیث', snippet: 'Authentic Quran verses and Hadith on rights and justice.', snippetUrdu: 'حقوق اور انصاف پر مستند قرآنی آیات اور احادیث۔', page: 'quran-hadith' },
      { id: 'myths-facts', title: 'Myths vs Facts', titleUrdu: 'خرافات و حقائق', snippet: 'Common misconceptions about Islam and the facts that correct them.', snippetUrdu: 'اسلام کے بارے میں عام غلط فہمیاں اور انہیں درست کرنے والے حقائق۔', page: 'myths-facts' },
      { id: 'faqs', title: 'FAQs', titleUrdu: 'سوالات', snippet: 'Frequently asked questions about Islamic rights.', snippetUrdu: 'اسلامی حقوق کے بارے میں عام سوالات۔', page: 'faqs' },
      { id: 'blog', title: 'Blog', titleUrdu: 'بلاگ', snippet: 'In-depth articles on Islamic rights and history.', snippetUrdu: 'اسلامی حقوق اور تاریخ پر گہرے مضامین۔', page: 'blog' },
      { id: 'resources', title: 'Resources', titleUrdu: 'وسائل', snippet: 'Trusted websites, books, and organizations for further study.', snippetUrdu: 'مزید مطالعہ کے لیے قابل اعتماد ویب سائٹس، کتابیں، تنظیمیں۔', page: 'resources' },
      { id: 'contact', title: 'Contact', titleUrdu: 'رابطہ', snippet: 'Get in touch with questions or suggestions.', snippetUrdu: 'سوالات یا تجاویز کے لیے ہم سے رابطہ کریں۔', page: 'contact' },
    ];
    pages.forEach((p) => all.push({ ...p, id: `page-${p.id}` }));
    humanRights.forEach((r) =>
      all.push({
        id: `hr-${r.id}`,
        title: r.title,
        titleUrdu: r.titleUrdu,
        snippet: r.description,
        snippetUrdu: r.descriptionUrdu,
        page: 'human-rights',
      })
    );
    womenRights.forEach((r) =>
      all.push({
        id: `wr-${r.id}`,
        title: r.title,
        titleUrdu: r.titleUrdu,
        snippet: r.description,
        snippetUrdu: r.descriptionUrdu,
        page: 'women-rights',
      })
    );
    quranVerses.forEach((v) =>
      all.push({
        id: `q-${v.id}`,
        title: `${v.reference} — ${v.theme}`,
        titleUrdu: `${v.reference} — ${v.theme}`,
        snippet: v.translation,
        snippetUrdu: v.translationUrdu,
        page: 'quran-hadith',
      })
    );
    hadiths.forEach((h) =>
      all.push({
        id: `h-${h.id}`,
        title: h.reference,
        titleUrdu: h.reference,
        snippet: h.translation,
        snippetUrdu: h.translationUrdu,
        page: 'quran-hadith',
      })
    );
    mythsVsFacts.forEach((m) =>
      all.push({
        id: `mf-${m.id}`,
        title: m.myth,
        titleUrdu: m.mythUrdu,
        snippet: m.fact,
        snippetUrdu: m.factUrdu,
        page: 'myths-facts',
      })
    );
    faqs.forEach((f) =>
      all.push({
        id: `faq-${f.id}`,
        title: f.question,
        titleUrdu: f.questionUrdu,
        snippet: f.answer,
        snippetUrdu: f.answerUrdu,
        page: 'faqs',
      })
    );
    blogPosts.forEach((b) =>
      all.push({
        id: `blog-${b.id}`,
        title: b.title,
        titleUrdu: b.titleUrdu,
        snippet: b.excerpt,
        snippetUrdu: b.excerptUrdu,
        page: 'blog',
      })
    );
    resources.forEach((r) =>
      all.push({
        id: `res-${r.id}`,
        title: r.title,
        titleUrdu: r.titleUrdu,
        snippet: r.description,
        snippetUrdu: r.descriptionUrdu,
        page: 'resources',
      })
    );
    return all;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return items.slice(0, 6);
    const q = query.toLowerCase();
    return items
      .filter((it) => {
        const title = (language === 'ur' ? it.titleUrdu : it.title).toLowerCase();
        const snippet = (language === 'ur' ? it.snippetUrdu : it.snippet).toLowerCase();
        return title.includes(q) || snippet.includes(q) || it.title.toLowerCase().includes(q);
      })
      .slice(0, 8);
  }, [query, items, language]);

  useEffect(() => {
    if (open) {
      setQuery('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[activeIndex]) {
        e.preventDefault();
        onNavigate(results[activeIndex].page);
        onClose();
      }
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, results, activeIndex]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[10vh]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeInUp_0.2s_ease-out]"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-2xl rounded-2xl border shadow-2xl animate-fade-up overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <Search size={20} style={{ color: 'var(--color-primary)' }} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'ur' ? 'تلاش کریں... آیات، حقوق، سوالات' : 'Search... verses, rights, FAQs'}
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: 'var(--color-text)' }}
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/5"
            style={{ color: 'var(--color-text-soft)' }}
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-8 text-center text-sm" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur' ? 'کوئی نتیجہ نہیں ملا۔' : 'No results found.'}
            </div>
          ) : (
            <ul className="py-2">
              {results.map((r, idx) => (
                <li key={r.id}>
                  <button
                    onClick={() => {
                      onNavigate(r.page);
                      onClose();
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors"
                    style={{
                      backgroundColor: idx === activeIndex ? 'rgba(46, 125, 50, 0.08)' : 'transparent',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
                    >
                      <Search size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate" style={{ color: 'var(--color-text)' }}>
                        {language === 'ur' ? r.titleUrdu : r.title}
                      </div>
                      <div className="text-xs mt-0.5 line-clamp-2" style={{ color: 'var(--color-text-soft)' }}>
                        {language === 'ur' ? r.snippetUrdu : r.snippet}
                      </div>
                    </div>
                    <ArrowRight size={16} className="mt-1 shrink-0" style={{ color: 'var(--color-text-soft)' }} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
