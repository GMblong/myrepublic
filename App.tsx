
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Requirements from './components/Requirements';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import HowToSubscribe from './components/HowToSubscribe';
import Coverage from './components/Coverage';
import Entertainment from './components/Entertainment';
import PackageComparison from './components/PackageComparison';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElement = (el: HTMLElement) => {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-10');
    };

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Handle initial hash on load
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.split('-')[0].replace('#', ''); // Handle sub-hashes like #packages-gamer
        const target = document.getElementById(targetId);
        if (target) {
          revealElement(target);
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Global click interceptor for hash links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
        const fullHash = link.hash;
        const targetId = fullHash.split('-')[0].replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
          e.preventDefault();
          revealElement(element);
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', fullHash);
          
          // Trigger a custom event for components like Pricing to react to hash changes
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        }
      }
    };

    window.addEventListener('click', handleLinkClick);
    window.addEventListener('load', handleInitialHash);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleLinkClick);
      window.removeEventListener('load', handleInitialHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="packages" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <Pricing />
        </div>

        <div id="comparison" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <PackageComparison />
        </div>
        
        <div id="benefits" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Advantages />
        </div>

        <div id="how-to" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <HowToSubscribe />
        </div>

        <div id="entertainment" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Entertainment />
        </div>

        <div id="testimonials" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Testimonials />
        </div>
        
        <div id="coverage" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Coverage />
        </div>

        <div id="requirements" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Requirements />
        </div>

        <div id="faq" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
