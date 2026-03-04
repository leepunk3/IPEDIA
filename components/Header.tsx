import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate({ pathname: '/', hash: `#${sectionId}` });
      // Fallback for immediate navigation if hash doesn't trigger effect in time (though MainPage handles it)
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-3 md:px-8 py-3 md:py-4 flex justify-between items-center ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Link 
        to="/" 
        className="flex items-center gap-1 md:gap-3"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Logo Icon: Orange Square */}
        <div className="w-3.5 h-3.5 md:w-6 md:h-6 bg-[#FF5A00] flex-shrink-0"></div>
        
        {/* Logo Text: IPEDIA. */}
        <div className={`flex items-baseline text-base md:text-3xl font-bold-heavy tracking-tighter`}>
          <span className="text-[#FF5A00]">IPEDIA</span>
          <span className={`w-1 h-1 md:w-2 md:h-2 rounded-full ml-0.5 md:ml-1 ${scrolled ? 'bg-[#1F2F6E]' : 'bg-white'}`}></span>
        </div>
      </Link>

      <div className="flex items-center space-x-1 md:space-x-6">
        <Link 
          to="/attorney"
          className={`text-[9px] md:text-[14px] font-bold-heavy tracking-tighter transition-colors hover:text-[#FF5A00] whitespace-nowrap ${
            scrolled ? 'text-[#1F2F6E]' : 'text-white'
          }`}
        >
          변리사 소개
        </Link>
        <a 
          href="/activities"
          className={`text-[9px] md:text-[14px] font-bold-heavy tracking-tighter transition-colors hover:text-[#FF5A00] whitespace-nowrap ${
            scrolled ? 'text-[#1F2F6E]' : 'text-white'
          }`}
        >
          WE DO
        </a>
        <Link 
          to="/work-portfolio"
          className={`text-[9px] md:text-[14px] font-bold-heavy tracking-tighter transition-colors hover:text-[#FF5A00] whitespace-nowrap ${
            scrolled ? 'text-[#1F2F6E]' : 'text-white'
          }`}
        >
          업무포트폴리오
        </Link>
        <button 
          onClick={() => handleScrollToSection('we-provide')}
          className={`text-[9px] md:text-[13px] font-bold-heavy px-1.5 py-1 md:px-6 md:py-3 rounded-sm transition-all shadow-lg block text-center whitespace-nowrap ${
            scrolled 
              ? 'bg-[#FF5A00] text-white' 
              : 'bg-[#FF5A00] text-white hover:bg-[#FF5C0A]'
          }`}
        >
          대표 서비스
        </button>
      </div>
    </header>
  );
};