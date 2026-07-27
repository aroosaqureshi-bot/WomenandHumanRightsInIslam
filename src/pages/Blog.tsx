import { useState } from 'react';
import { BookOpen, Bookmark, X, Calendar, Clock, User, Tag, Volume2, Square, Download, ArrowLeft } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import ArticleCard from '@/components/ArticleCard';
import { blogPosts, BlogPost } from '@/data/blogPosts';

export default function Blog() {
  const { language, bookmarks, isBookmarked } = useApp();
  const [active, setActive] = useState<BlogPost | null>(null);
  const [filter, setFilter] = useState<'all' | 'bookmarked'>('all');
  const [speaking, setSpeaking] = useState(false);

  const posts = filter === 'bookmarked' ? blogPosts.filter((p) => isBookmarked(p.id)) : blogPosts;

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = language === 'ur' ? 'ur-PK' : 'en-US';
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const downloadPdf = (post: BlogPost) => {
    const text = language === 'ur' ? post.contentUrdu : post.content;
    const title = language === 'ur' ? post.titleUrdu : post.title;
    const html = `<html><head><meta charset="utf-8"><title>${title}</title>
      <style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:0 20px;color:#222;line-height:1.7}
      h1{color:#2E7D32}.meta{color:#666;font-size:14px;margin-bottom:2em}.ref{color:#666;font-style:italic;margin-top:2em}</style></head>
      <body><h1>${title}</h1><p class="meta">${post.author} — ${post.date} — ${post.readTime}</p>
      ${text.split('\n').map((p) => `<p>${p}</p>`).join('')}
      <p class="ref">Source: Rights in Islam</p></body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${post.id}-article.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Articles', ur: 'مضامین' }}
        title={{ en: 'Blog & Articles', ur: 'بلاگ و مضامین' }}
        subtitle={{
          en: 'In-depth articles exploring Islamic teachings on human and women\u2019s rights.',
          ur: 'انسانی اور خواتین حقوق پر اسلامی تعلیمات کو دریافت کرنے والے تفصیلی مضامین۔',
        }}
        icon={<BookOpen className="text-white" size={28} />}
      />

      <section className="container-page py-12">
        {/* Filter */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              backgroundColor: filter === 'all' ? 'var(--color-primary)' : 'transparent',
              color: filter === 'all' ? 'white' : 'var(--color-text-soft)',
              border: `1px solid ${filter === 'all' ? 'var(--color-primary)' : 'var(--color-border)'}`,
            }}
          >
            {language === 'ur' ? 'تمام مضامین' : 'All Articles'}
          </button>
          <button
            onClick={() => setFilter('bookmarked')}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
            style={{
              backgroundColor: filter === 'bookmarked' ? 'var(--color-gold)' : 'transparent',
              color: filter === 'bookmarked' ? 'white' : 'var(--color-text-soft)',
              border: `1px solid ${filter === 'bookmarked' ? 'var(--color-gold)' : 'var(--color-border)'}`,
            }}
          >
            <Bookmark size={14} />
            {language === 'ur' ? 'محفوظ شدہ' : 'Bookmarked'} ({bookmarks.length})
          </button>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <Bookmark size={40} className="mx-auto mb-4" style={{ color: 'var(--color-text-soft)' }} />
            <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur' ? 'ابھی کوئی مضمون محفوظ نہیں۔' : 'No bookmarked articles yet.'}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} onOpen={setActive} />
            ))}
          </div>
        )}
      </section>

      {/* Article modal */}
      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { window.speechSynthesis?.cancel(); setSpeaking(false); setActive(null); }} />
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl border shadow-2xl overflow-hidden animate-fade-up flex flex-col"
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(201,162,39,0.15)', color: 'var(--color-gold)' }}>
                {active.category}
              </span>
              <button
                onClick={() => { window.speechSynthesis?.cancel(); setSpeaking(false); setActive(null); }}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-black/5"
                style={{ color: 'var(--color-text-soft)' }}
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                {language === 'ur' ? active.titleUrdu : active.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs mb-5" style={{ color: 'var(--color-text-soft)' }}>
                <span className="flex items-center gap-1"><User size={12} />{active.author}</span>
                <span className="flex items-center gap-1"><Calendar size={12} />{active.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{active.readTime}</span>
              </div>
              <div className="text-sm leading-relaxed space-y-4" style={{ color: 'var(--color-text)' }}>
                {(language === 'ur' ? active.contentUrdu : active.content).split('\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <button
                onClick={() => speak(language === 'ur' ? active.contentUrdu : active.content)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}
              >
                {speaking ? <Square size={16} /> : <Volume2 size={16} />}
                {speaking ? (language === 'ur' ? 'روکیں' : 'Stop') : (language === 'ur' ? 'سنیں' : 'Listen')}
              </button>
              <button
                onClick={() => downloadPdf(active)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
              >
                <Download size={16} />
                {language === 'ur' ? 'ڈاؤن لوڈ' : 'Download'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
