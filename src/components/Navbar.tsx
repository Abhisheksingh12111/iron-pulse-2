import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X, ArrowRight, Shield, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facility & Gallery', href: '#gallery' },
    { name: 'Members & Results', href: '#testimonials' },
    { name: 'Pricing & Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          id="nav-logo"
        >
          <div className="w-8 h-8 bg-[#ccff00] rounded-sm flex items-center justify-center text-black font-black italic shadow-md shadow-[#ccff00]/20 group-hover:scale-105 transition-transform duration-200">
            <Dumbbell className="w-4 h-4 text-black transform -rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-black tracking-tighter text-white flex items-center gap-1 leading-none uppercase">
              IRON<span className="text-[#ccff00]">PULSE</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-zinc-500 font-mono font-bold uppercase mt-0.5">
              // APEX PERFORMANCE
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ y: -1, color: '#ccff00' }}
              transition={{ duration: 0.15 }}
              className="hover:text-[#ccff00] transition-colors duration-200 relative py-1"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18005554766"
            className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-[#ccff00] transition-colors"
          >
            (800) 555-IRON
          </a>
          <motion.button
            id="nav-join-button"
            onClick={() => onOpenJoinModal()}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(204, 255, 0, 0.45)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="bg-[#ccff00] text-black px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#ccff00]/25"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            onClick={() => onOpenJoinModal()}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(204, 255, 0, 0.35)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#ccff00] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black cursor-pointer"
          >
            Join
          </motion.button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ccff00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-zinc-800 bg-[#0c0c0e]/98 backdrop-blur-xl px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-bold uppercase tracking-widest text-zinc-300 hover:text-[#ccff00] py-2 border-b border-zinc-800/80 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  id="mobile-nav-join-button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-3.5 rounded-full bg-[#ccff00] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/30"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Claim 3-Day Free Pass / Join</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 font-mono">
                  <Shield className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>24/7 Access • No Lock-in Contracts</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
