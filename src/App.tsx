import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import ChatAssistant from '@/components/ChatAssistant';
import Home from '@/pages/Home';
import HumanRights from '@/pages/HumanRights';
import WomenRights from '@/pages/WomenRights';
import QuranHadith from '@/pages/QuranHadith';
import MythsFacts from '@/pages/MythsFacts';
import FAQs from '@/pages/FAQs';
import Blog from '@/pages/Blog';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';

function AppContent() {
  const [page, setPage] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut: Cmd/Ctrl + K for search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home onNavigate={navigate} onOpenChat={() => setChatOpen(true)} />;
      case 'human-rights': return <HumanRights />;
      case 'women-rights': return <WomenRights />;
      case 'quran-hadith': return <QuranHadith />;
      case 'myths-facts': return <MythsFacts />;
      case 'faqs': return <FAQs />;
      case 'blog': return <Blog />;
      case 'resources': return <Resources />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} onOpenChat={() => setChatOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={page}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenChat={() => setChatOpen(true)}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />

      {/* Floating chat button */}
      <button
        onClick={() => setChatOpen(true)}
        aria-label="AI Assistant"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110 animate-pulse-glow sm:hidden"
        style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
      >
        <Bot size={24} />
      </button>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={navigate} />
      <ChatAssistant open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
