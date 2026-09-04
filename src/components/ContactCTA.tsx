import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MEMBERSHIP_TIERS } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, Check, Sparkles, ArrowRight, ShieldCheck, Dumbbell, Send } from 'lucide-react';

interface ContactCTAProps {
  onOpenJoinModal: (tierId?: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenJoinModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Strength & Muscle Building',
    preferredTime: 'Morning (6am - 10am)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pricing Tiers Preview */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-[#ccff00] font-mono font-bold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
              // MEMBERSHIP PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tighter">
              CHOOSE YOUR <span className="text-[#ccff00]">DISCIPLINE</span> LEVEL
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Transparent tier structures. No hidden administrative fees. Zero lock-in traps. Cancel anytime with 14 days notice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  boxShadow: tier.popular
                    ? '0 30px 50px -12px rgba(0, 0, 0, 0.95), 0 0 35px rgba(204, 255, 0, 0.3)'
                    : '0 25px 45px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(204, 255, 0, 0.15)',
                  borderColor: tier.popular ? '#ccff00' : '#3f3f46',
                }}
                className={`rounded-3xl p-7 flex flex-col justify-between relative transition-colors duration-300 bg-zinc-900 ${
                  tier.popular
                    ? 'border-2 border-[#ccff00] shadow-2xl shadow-[#ccff00]/15'
                    : 'border border-zinc-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ccff00] text-black font-mono font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    POPULAR ATHLETE CHOICE
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 min-h-[34px] leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1.5 font-mono">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      {tier.period}
                    </span>
                  </div>

                  <div className="mt-6 space-y-2.5 pt-5 border-t border-zinc-800">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <motion.button
                    onClick={() => onOpenJoinModal(tier.name)}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: '0 0 20px rgba(204, 255, 0, 0.4)',
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full py-3.5 rounded-full font-mono font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? 'bg-[#ccff00] hover:bg-[#b8e600] text-black shadow-lg shadow-[#ccff00]/25'
                        : 'bg-zinc-800 hover:bg-[#ccff00] hover:text-black text-white'
                    }`}
                  >
                    <span>Select {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Hero Banner with Pulsing/Glowing Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 sm:p-12 mb-16 shadow-2xl text-center flex flex-col items-center"
        >
          {/* Subtle grid backdrop pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[#ccff00] text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
            LIMITED TRIAL ALLOCATION
          </span>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase max-w-3xl leading-tight tracking-tight">
            YOUR PEAK PR STARTS WITH <span className="text-[#ccff00]">DAY ONE</span>.
          </h3>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base max-w-2xl font-light">
            Claim an all-inclusive 3-day guest pass. Experience Olympic platforms, cold plunge contrast suites, and turf sprint lanes for zero cost.
          </p>

          {/* Animated Button with Pulse & Glow Effect */}
          <div className="mt-8 relative group">
            {/* Ambient pulsating glow layer */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-2 rounded-full bg-[#ccff00] blur-xl"
            />

            {/* Glowing button itself with hover scale & glow */}
            <motion.button
              id="cta-pulsing-join-button"
              onClick={() => onOpenJoinModal()}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 0 35px rgba(204, 255, 0, 0.6)',
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative px-10 py-5 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono font-black text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-[#ccff00]/40 flex items-center gap-3 cursor-pointer"
            >
              <Dumbbell className="w-5 h-5 fill-black transform -rotate-12" />
              <span>Claim Free 3-Day Pass Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
              Instant digital pass to mobile
            </span>
            <span>•</span>
            <span>Zero credit card required for trial</span>
            <span>•</span>
            <span>Valid across all arena floors</span>
          </div>
        </motion.div>

        {/* 2-Column: Contact Form & Location / Hours Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left Column: Direct Inquiry / Pass Form */}
          <div className="lg:col-span-7 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-xl">
            <div className="mb-6">
              <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-1">
                // ONBOARDING INTAKE
              </span>
              <h4 className="text-2xl font-heading font-black text-white uppercase tracking-tight">
                Send an Inquiry or Book Walkthrough
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Our athletic director will reach out within 2 hours to confirm your scheduled slot and prep your gear pass.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl bg-zinc-950 border border-[#ccff00]/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ccff00] text-black flex items-center justify-center mx-auto shadow-lg shadow-[#ccff00]/30">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h5 className="text-xl font-heading font-black text-white uppercase tracking-tight">
                    Inquiry Received, {formData.name}!
                  </h5>
                  <p className="text-sm text-zinc-300">
                    We've emailed your digital confirmation pass to <strong className="text-[#ccff00]">{formData.email}</strong>. Our team looks forward to meeting you on the floor!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-[#ccff00] hover:text-black text-xs text-white uppercase tracking-wider font-mono font-bold transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Phone (for SMS pass)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Primary Fitness Mission
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors cursor-pointer"
                      >
                        <option>Strength & Muscle Building</option>
                        <option>Cardio & Athletic Conditioning</option>
                        <option>Powerlifting & Heavy Olympic</option>
                        <option>Mobility & Longevity / Yoga</option>
                        <option>1-on-1 Personal Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Preferred Tour Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#ccff00] transition-colors cursor-pointer"
                    >
                      <option>Morning (6am - 10am)</option>
                      <option>Midday (11am - 2pm)</option>
                      <option>Evening (4pm - 8pm)</option>
                      <option>Weekend Morning</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 0 25px rgba(204, 255, 0, 0.45)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-4 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-[#ccff00]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Reserve Pass</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Location, Facility Hours, Direct Hotline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-zinc-900 p-7 rounded-3xl border border-zinc-800 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-1">
                  // LOGISTICS
                </span>
                <h4 className="text-xl font-heading font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#ccff00]" />
                  Facility & Access Info
                </h4>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">IronPulse Apex Flagship</strong>
                    <span className="text-zinc-400">742 Iron Forge Blvd, District 4</span>
                    <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Complimentary 2-hour underground athlete parking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Arena Schedule</strong>
                    <span className="text-zinc-300">Members: <strong className="text-[#ccff00]">24/7 / 365 Days</strong> with RFID</span>
                    <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Staffed Front Desk: Mon–Fri 5:00am–11:00pm, Sat–Sun 7:00am–9:00pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Direct Hotline</strong>
                    <a href="tel:+18005554766" className="text-zinc-300 hover:text-[#ccff00] transition-colors font-mono">
                      +1 (800) 555-IRON (4766)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Concierge Inquiries</strong>
                    <a href="mailto:membership@ironpulse.gym" className="text-zinc-300 hover:text-[#ccff00] transition-colors font-mono">
                      membership@ironpulse.gym
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative h-36 rounded-2xl overflow-hidden border border-zinc-800 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="IronPulse District Map"
                  className="w-full h-full object-cover filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-xs text-white font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ccff00] animate-bounce" />
                    <span>Open in Navigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

