import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg' : 'bg-transparent'}`}>
          <a href="#" className="text-xl font-bold font-serif text-white tracking-tight">
            UX<span className="text-blue-500">.</span>Writer
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">소개</a>
            <a href="#work" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">프로젝트</a>
            <a href="mailto:hello@uxwriter.com" className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              문의하기
            </a>
          </div>
          
          {/* Mobile Menu Icon Placeholder */}
          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;