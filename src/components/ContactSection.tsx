'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-sky-700 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-sky-600" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In <span className="text-gradient-vibrant">Touch</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Interested in discussing an Android development opportunity or have a technical project?
            Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 text-left">
            
            {/* Email Card with Simple Copy */}
            <div className="luxury-card p-4 sm:p-5 rounded-3xl border border-sky-200 hover:border-sky-400 relative group transition-all duration-300 shadow-xs">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Email Address</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 truncate block font-mono">
                      saxenah003@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('saxenah003@gmail.com', 'email')}
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-slate-700 hover:bg-stone-200 transition shrink-0"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card with Simple Copy */}
            <div className="luxury-card p-4 sm:p-5 rounded-3xl border border-emerald-200 hover:border-emerald-400 relative group transition-all duration-300 shadow-xs">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Phone / WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 truncate block font-mono">
                      +91-9634081401
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+919634081401', 'phone')}
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-slate-700 hover:bg-stone-200 transition shrink-0"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">Instant Message:</span>
                <a
                  href="https://wa.me/919634081401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Address / Location Card (Strictly from CV) */}
            <div className="luxury-card p-4 sm:p-5 rounded-3xl border border-purple-200 relative shadow-xs">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shadow-xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Location (from CV)</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    34, Sector 4, Greater Noida, India
                  </div>
                </div>
              </div>
            </div>

            {/* Status Pill */}
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center gap-2.5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="text-xs text-slate-700 font-mono">
                Open to Full-Time Android Developer Roles & Immediate Joining
              </div>
            </div>

          </div>

          {/* Contact Message Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-7 lg:p-9 rounded-3xl border border-stone-200 relative overflow-hidden shadow-lg text-left">
              
              {submitted ? (
                /* Clean Confirmation Screen */
                <div className="py-8 sm:py-12 text-center space-y-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been sent directly to Harshit Saxena. He will review your message and reply back to your email (<span className="text-indigo-600 font-mono font-semibold">{formData.email}</span>) shortly.
                  </p>
                  
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-sky-600" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Send a Direct Message
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Response within 24 hours</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-700 block font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-700 block font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 block font-semibold">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Android Developer Opportunity / Project Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-700 block font-semibold">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Harshit about your organization, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-3.5 rounded-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Message</span>
                      </>
                    )}
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
