
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import NotFound from './components/NotFound';

const MainLayout: React.FC = () => {
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
        
        <section id="packages" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <Pricing />
        </section>

        <section id="comparison" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <PackageComparison />
        </section>
        
        <section id="benefits" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Advantages />
        </section>

        <section id="how-to" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <HowToSubscribe />
        </section>

        <section id="entertainment" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Entertainment />
        </section>

        <section id="testimonials" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Testimonials />
        </section>
        
        <section id="coverage" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Coverage />
        </section>

        <section id="requirements" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <Requirements />
        </section>

        <section id="faq" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
