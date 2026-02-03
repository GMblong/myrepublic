
import React, { useState, useEffect } from 'react';
import logoMenu from '@assets/images/logo-menu.png';
import { getRegistrationWhatsAppLink } from '../constants';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Promo', href: '#packages' },
    { name: 'Bandingkan', href: '#comparison' },
    { name: 'Keunggulan', href: '#benefits' },
    { name: 'Cara Daftar', href: '#how-to' },
    { name: 'Cek Area', href: '#coverage' },
    { name: 'Testimoni', href: '#testimonials' },
  ];

  // Helper function to handle navigation and ensure visibility
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Reveal the element immediately so browser can calculate scroll position
      element.classList.add('opacity-100', 'translate-y-0');
      element.classList.remove('opacity-0', 'translate-y-10');
      
      // Scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-[60] transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b-2 border-slate-900/10 py-2 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            className="flex items-center gap-2 group cursor-pointer z-50"
          >
            <img src={logoMenu} alt="MyRepublic Logo" className={`transition-all duration-300 ${isScrolled ? 'w-48 [filter:drop-shadow(0_1px_0_white)_drop-shadow(0_-1px_0_white)_drop-shadow(1px_0_0_white)_drop-shadow(-1px_0_0_white)]' : 'w-48 [filter:drop-shadow(0_2px_0_white)_drop-shadow(0_-2px_0_white)_drop-shadow(2px_0_0_white)_drop-shadow(-2px_0_0_white)]'}`} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex gap-5 font-black text-[11px] uppercase tracking-widest transition-colors duration-300 ${
              isScrolled ? 'text-slate-600' : 'text-white/90'
            }`}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-orange-500 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full`}></span>
                </a>
              ))}
            </div>
            <a
              href={getRegistrationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-xl font-black transition-all border-2 uppercase text-[10px] ${
                isScrolled 
                  ? 'bg-orange-500 text-white border-slate-900 shadow-sm hover:shadow-md hover:-translate-y-0.5' 
                  : 'bg-white text-slate-900 border-white hover:bg-orange-500 hover:text-white hover:border-orange-500'
              }`}
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={`lg:hidden p-2 rounded-xl border-2 transition-all z-50 ${
              isScrolled 
                ? 'bg-slate-100 border-slate-200 text-slate-900' 
                : 'bg-white/10 border-white/20 text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[55] transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center p-8 pt-24 gap-1">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between text-slate-900 font-black text-3xl uppercase tracking-tighter border-b-2 border-slate-100 py-4 hover:text-[#702283] transition-colors"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
              }}
            >
              {link.name}
              <ChevronRight className="text-orange-500" size={24} />
            </a>
          ))}
          
          <div className="mt-8 space-y-4" style={{ 
            transitionDelay: '350ms',
            opacity: isMobileMenuOpen ? 1 : 0 
          }}>
            <a 
              href={getRegistrationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#702283] text-white text-center py-5 rounded-2xl font-black text-lg border-4 border-slate-900 shadow-brutal uppercase"
            >
              DAFTAR VIA WA
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
