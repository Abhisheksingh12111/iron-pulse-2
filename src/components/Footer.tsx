import React, { useState } from 'react';
import { Dumbbell, ArrowUp, Mail, Check, Shield, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-800 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#ccff00] flex items-center justify-center text-black shadow-md shadow-[#ccff00]/20">
                <Dumbbell className="w-4 h-4 -rotate-12" />
              </div>
              <span className="font-heading text-xl font-black tracking-tight text-white uppercase">
                IRON<span className="text-[#ccff00]">PULSE</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Engineered for maximal neural output, power development, and systemic longevity. Built for athletes who measure progress in numbers, not sentiments.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="IronPulse Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="IronPulse YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="IronPulse Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                aria-label="IronPulse X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-3">
              // DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-[#ccff00] transition-colors">
                  01. Arena Architecture
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#ccff00] transition-colors">
                  02. Discipline Matrix
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#ccff00] transition-colors">
                  03. Facility Archive
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#ccff00] transition-colors">
                  04. Athlete Metrics
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ccff00] transition-colors">
                  05. Protocol Access
                </a>
              </li>
            </ul>
          </div>

          {/* Facility Hours Column */}
          <div>
            <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-3">
              // SCHEDULE
            </span>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <span className="text-white font-bold block">Biometric RFID Access</span>
                <span className="text-[#ccff00]">24/7/365 Nonstop</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-500 block">Coaching & Front Desk</span>
                <span className="text-zinc-300">05:00 - 23:00 M-F</span>
                <span className="text-zinc-300 block">07:00 - 21:00 S-S</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-500 block">Hydrotherapy Contrast</span>
                <span className="text-zinc-300">06:00 - 22:00 Daily</span>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-3">
              // DISPATCH
            </span>
            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
              Bi-weekly athletic physiology briefs, biomechanics research, and event access.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-2xl bg-zinc-900 border border-[#ccff00]/40 text-[#ccff00] text-xs flex items-center gap-2 font-mono">
                <Check className="w-4 h-4 shrink-0" />
                <span>Enrolled. Guide dispatched to inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 font-mono">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="athlete@email.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#ccff00]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#ccff00] hover:bg-[#b8e600] text-black text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-zinc-600 block">Pure sports science. Zero marketing fluff.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} IronPulse Performance Club. All rights reserved. Precision-engineered for athletes.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#ccff00] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

