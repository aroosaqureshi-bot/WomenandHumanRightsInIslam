import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import { supabase } from '@/lib/supabase';

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Contact() {
  const { language } = useApp();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setError(language === 'ur' ? 'براہ کرم تمام خانے پُر کریں۔' : 'Please fill in all fields.');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      if (!supabase) throw new Error('Database not configured');
      const { error: insertError } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      if (insertError) throw insertError;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setError(
        language === 'ur'
          ? 'پیغام بھیجنے میں مسئلہ ہوا۔ براہ کرم بعد میں کوشش کریں۔'
          : 'There was a problem sending your message. Please try again later.'
      );
    }
  };

  const t = {
    name: language === 'ur' ? 'نام' : 'Name',
    email: language === 'ur' ? 'ای میل' : 'Email',
    subject: language === 'ur' ? 'موضوع' : 'Subject',
    message: language === 'ur' ? 'پیغام' : 'Message',
    send: language === 'ur' ? 'پیغام بھیجیں' : 'Send Message',
    sending: language === 'ur' ? 'بھیجا جا رہا ہے...' : 'Sending...',
    success: language === 'ur' ? 'شکریہ! آپ کا پیغام موصول ہو گیا۔' : 'Thank you! Your message has been received.',
    placeholder: {
      name: language === 'ur' ? 'آپ کا نام' : 'Your name',
      email: language === 'ur' ? 'آپ کا ای میل' : 'you@example.com',
      subject: language === 'ur' ? 'موضوع' : 'How can we help?',
      message: language === 'ur' ? 'اپنا پیغام یہاں لکھیں...' : 'Write your message here...',
    },
  };

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Get in Touch', ur: 'رابطہ کریں' }}
        title={{ en: 'Contact Us', ur: 'ہم سے رابطہ' }}
        subtitle={{
          en: 'Have a question or suggestion? We\u2019d love to hear from you. Reach out using the form or our contact details.',
          ur: 'کوئی سوال یا تجویز ہے؟ ہم آپ سے سننا چاہیں گے۔ فارم یا ہماری رابطہ تفصیلات استعمال کریں۔',
        }}
        icon={<Mail className="text-white" size={28} />}
      />

      <section className="container-page py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={submit} className="card space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--color-text-soft)' }}>
                    {t.name}
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.placeholder.name}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--color-text-soft)' }}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.placeholder.email}
                    className="input-field"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--color-text-soft)' }}>
                  {t.subject}
                </label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.placeholder.subject}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--color-text-soft)' }}>
                  {t.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.placeholder.message}
                  rows={5}
                  className="input-field resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                  <CheckCircle2 size={16} />
                  {t.success}
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-xl text-sm" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#DC2626' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.send}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-soft)' }}>
                    {language === 'ur' ? 'ای میل' : 'Email'}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>info@islamicrights.org</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-soft)' }}>
                    {language === 'ur' ? 'فون' : 'Phone'}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>+1 (800) 555-0199</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(46,125,50,0.1)', color: 'var(--color-primary)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-soft)' }}>
                    {language === 'ur' ? 'مقام' : 'Location'}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    {language === 'ur' ? 'عالمی دفتر، آن لائن' : 'Global Office, Online'}
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: 'var(--color-text-soft)' }}>
                {language === 'ur' ? 'سوشل میڈیا' : 'Social Media'}
              </div>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(46,125,50,0.08)' }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
