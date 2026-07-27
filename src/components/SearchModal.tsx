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

  const items: SearchItem[] = useMemo(() => {
    const all: SearchItem[] = [];
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

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
              {results.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => {
                      onNavigate(r.page);
                      onClose();
                    }}
                    className="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-black/5"
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
