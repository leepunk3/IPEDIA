import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Hero } from './Hero';
import { Philosophy } from './Philosophy';
import { Vision } from './Vision';
import { CorporateExperience } from './CorporateExperience';
import { StrategyRisk } from './StrategyRisk';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const MainPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on mount or location change
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Increased timeout to ensure rendering
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]); // Added location dependency

  return (
    <div className="relative min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Philosophy />
        <Vision />
        <CorporateExperience />
        <StrategyRisk />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
