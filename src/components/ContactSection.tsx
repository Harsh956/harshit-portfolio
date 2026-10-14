'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Harshit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:saxenah003@gmail.com?subject=${subject}&body=${body}`;
  };

  const getGmailWebLink = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Harshit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=saxenah003@gmail.com&su=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      // Fallback
    }

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Automatically trigger mailto link so it directly opens the email client
    window.location.href = getMailtoLink();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-sky-300 shadow-md">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Direct Email & Contact Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-vibrant">Touch</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing an Android development opportunity or have a technical project?
            Send an email directly to <strong className="text-sky-300 font-mono">saxenah003@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Email Card with Direct mailto */}
            <div className="luxury-card p-5 sm:p-7 rounded-3xl border border-sky-500/30 hover:border-sky-400 relative group transition-all duration-300 shadow-lg shadow-sky-500/10">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-md shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold">Email Address</div>
                    <a
                      href="mailto:saxenah003@gmail.com"
                      className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      saxenah003@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('saxenah003@gmail.com', 'email')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition shrink-0"
                  title="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct mailbox:</span>
                <a
                  href="mailto:saxenah003@gmail.com"
                  className="text-sky-400 hover:text-sky-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Open Mail App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="luxury-card p-5 sm:p-7 rounded-3xl border border-emerald-500/30 hover:border-emerald-400 relative group transition-all duration-300 shadow-lg shadow-emerald-500/10">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-md shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold">Phone Number</div>
                    <a
                      href="tel:+919634081401"
                      className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-emerald-300 transition-colors truncate block font-mono"
                    >
                      +91-9634081401
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+919634081401', 'phone')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition shrink-0"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">WhatsApp / Call:</span>
                <a
                  href="https://wa.me/919634081401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Address / Location Card (Strictly from CV) */}
            <div className="luxury-card p-5 sm:p-7 rounded-3xl border border-purple-500/30 relative shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-md shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 font-semibold">Address (from CV)</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    34, Sector 4, Greater Noida, India
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Message Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="luxury-glass p-5 sm:p-8 lg:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/25 border border-emerald-500 text-emerald-300 flex items-center justify-center mx-auto shadow-xl">
                    <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Email Prepared for saxenah003@gmail.com!
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Your email client should have opened with your message. If it didn't, click the button below to send directly via Gmail Web:
                  </p>
                  
                  {/* Direct Gmail Web Fallback Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getGmailWebLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open & Send in Gmail Web</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-sky-400" />
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Send Email to Harshit
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-sky-300 font-bold">
                      To: saxenah003@gmail.com
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Android Developer Role / Project Discussion"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Harshit, I saw your Android apps and would like to discuss..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-2xl font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 text-white hover:opacity-95 shadow-xl shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] text-xs sm:text-sm"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message Directly to saxenah003@gmail.com</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
