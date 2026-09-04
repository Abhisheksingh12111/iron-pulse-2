import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (planOrProgram?: string) => {
    setSelectedPlanForModal(planOrProgram);
    setJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setJoinModalOpen(false);
    setSelectedPlanForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] font-sans antialiased selection:bg-[#ccff00] selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      <main>
        {/* 1. Hero Section: Bold gym image/background, headline, tagline, Join Now button, fade-in + slide-up on load */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal('3-Day Free Trial')} />

        {/* 2. About Section: Smooth fade-in scroll-triggered animation */}
        <About onOpenJoinModal={() => handleOpenJoinModal('Facility Tour')} />

        {/* 3. Services/Programs Section: 4 cards with scale up + shadow effect on hover */}
        <Programs onOpenJoinModal={handleOpenJoinModal} />

        {/* 4. Gallery/Photos Section: Animated image grid with staggered fade-in as user scrolls */}
        <Gallery />

        {/* 5. Testimonials Section: Sliding/carousel testimonials with smooth transition animation */}
        <Testimonials />

        {/* 6. Contact/CTA Section: Animated button with pulse/glow effect to grab attention */}
        <ContactCTA onOpenJoinModal={handleOpenJoinModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Joining / Claiming Free Trial Pass */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={handleCloseJoinModal}
        initialSelection={selectedPlanForModal}
      />
    </div>
  );
}
