import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Dumbbell, Shield, Sparkles, ArrowRight, QrCode } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  initialSelection,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(
    initialSelection || 'Performance All-Access'
  );
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Top Header */}
        <div className="relative p-6 sm:p-7 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccff00] text-black flex items-center justify-center shadow-lg shadow-[#ccff00]/25">
              <Dumbbell className="w-5 h-5 -rotate-12" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#ccff00] block">
                // PASS ONBOARDING
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-tight">
                {step === 'form' ? 'Activate Athlete Pass' : 'Arena Authorization Granted'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {step === 'form' ? (
              <motion.form
                key="form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Plan Selector */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Select Your Protocol Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <motion.button
                      type="button"
                      onClick={() => setSelectedPlan('3-Day Free Trial')}
                      whileHover={{ scale: 1.02, borderColor: '#ccff00' }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                        selectedPlan === '3-Day Free Trial'
                          ? 'bg-[#ccff00]/10 border-[#ccff00] text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div className="text-[10px] font-mono font-bold uppercase text-[#ccff00]">Free Trial</div>
                      <div className="text-sm font-heading font-black text-white mt-0.5">$0 PASS</div>
                      <div className="text-[10px] font-mono text-zinc-400 mt-0.5">3 Days Full Arena</div>
                    </motion.button>

                    {MEMBERSHIP_TIERS.slice(0, 2).map((tier) => (
                      <motion.button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedPlan(tier.name)}
                        whileHover={{ scale: 1.02, borderColor: '#ccff00' }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                          selectedPlan === tier.name
                            ? 'bg-[#ccff00]/10 border-[#ccff00] text-white shadow-md'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <div className="text-[10px] font-mono font-bold uppercase text-[#ccff00] truncate">{tier.name}</div>
                        <div className="text-sm font-heading font-black text-white mt-0.5">{tier.price} <span className="text-[10px] font-normal text-zinc-400">{tier.period}</span></div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Cancel anytime</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 font-mono">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Athlete Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Hayes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Mobile Phone (SMS Entry)
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ccff00]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3 text-xs text-zinc-400 font-mono">
                  <Shield className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span>Passes activate instantly with biometric turnstile barcode.</span>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 25px rgba(204, 255, 0, 0.45)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="w-full py-4 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#ccff00]/25 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Activate {selectedPlan}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                {/* Simulated Digital Athlete Pass */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mx-auto max-w-sm p-6 rounded-3xl bg-zinc-950 border-2 border-[#ccff00] shadow-2xl shadow-[#ccff00]/20 text-left font-mono transition-transform"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#ccff00] block tracking-widest">
                        // DIGITAL ARENA PASS
                      </span>
                      <h4 className="text-xl font-heading font-black text-white uppercase tracking-tight mt-0.5">
                        {formData.name || 'Athlete'}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-black">
                      <Dumbbell className="w-5 h-5 -rotate-12" />
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Tier:</span>
                      <span className="font-bold text-white">{selectedPlan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Status:</span>
                      <span className="text-[#ccff00] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" /> Active (Ready for Entry)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Facility ID:</span>
                      <span className="font-mono text-[#ccff00] font-semibold">IP-89241</span>
                    </div>
                  </div>

                  {/* QR Graphic */}
                  <div className="mt-5 p-4 rounded-2xl bg-white text-black flex flex-col items-center justify-center">
                    <QrCode className="w-24 h-24 text-black" />
                    <span className="text-[9px] font-mono tracking-widest font-bold uppercase mt-1">
                      SCAN AT TURNSTILE
                    </span>
                  </div>
                </motion.div>

                <p className="text-xs font-mono text-zinc-300">
                  Confirmation and biometric activation credentials have been dispatched to{' '}
                  <strong className="text-[#ccff00]">{formData.email}</strong>.
                </p>

                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(204, 255, 0, 0.4)' }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3 rounded-full bg-zinc-800 hover:bg-[#ccff00] hover:text-black text-white font-mono font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Done & Return to Arena
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

