import { useState } from 'react';
import { Bookmark, BookmarkCheck, Volume2, Square, Download, Clock, Calendar, Tag } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Icon } from '@/components/Icon';
import type { BlogPost } from '@/data/blogPosts';

type Props = {
  post: BlogPost;
  onOpen: (post: BlogPost) => void;
};

export default function ArticleCard({ post, onOpen }: Props) {
  const { language, toggleBookmark, isBookmarked } = useApp();
  const [speaking, setSpeaking] = useState(false);
  const bookmarked = isBookmarked(post.id);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = language === 'ur' ? post.contentUrdu : post.content;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = language === 'ur' ? 'ur-PK' : 'en-US';
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const downloadPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = language === 'ur' ? post.contentUrdu : post.content;
    const title = language === 'ur' ? post.titleUrdu : post.title;
    const html = `<html><head><meta charset="utf-8"><title>${title}</title>
      <style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:0 20px;color:#222;line-height:1.7}
      h1{color:#2E7D32}h2{color:#1B5E20}.ref{color:#666;font-style:italic;margin-top:2em}</style></head>
      <body><h1>${title}</h1><p><strong>${post.author}</strong> — ${post.date}</p>
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
    <article
      onClick={() => onOpen(post)}
      className="card cursor-pointer flex flex-col h-full group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}
        >
          <Icon name={post.icon} className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: 'var(--color-gold)' }}
          >
            {post.category}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(post.id);
          }}
          aria-label="Bookmark"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-black/5"
          style={{ color: bookmarked ? 'var(--color-gold)' : 'var(--color-text-soft)' }}
        >
          {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <h3 className="font-bold text-lg mb-2 leading-snug group-hover:text-primary transition-colors" style={{ color: 'var(--color-text)' }}>
        {language === 'ur' ? post.titleUrdu : post.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-soft)' }}>
        {language === 'ur' ? post.excerptUrdu : post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-4 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-text-soft)' }}>
          <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={speak}
            aria-label="Text to speech"
            className="w-7 h-7 rounded-md flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ color: speaking ? 'var(--color-primary)' : 'var(--color-text-soft)' }}
          >
            {speaking ? <Square size={14} /> : <Volume2 size={14} />}
          </button>
          <button
            onClick={downloadPdf}
            aria-label="Download"
            className="w-7 h-7 rounded-md flex items-center justify-center transition-colors hover:bg-black/5"
            style={{ color: 'var(--color-text-soft)' }}
          >
            <Download size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
