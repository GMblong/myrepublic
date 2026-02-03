
import React, { useState, useEffect } from 'react';
import { PACKAGES, getRegistrationWhatsAppLink, ExtendedPackage } from '../constants';
import { ThumbsUp, Tv, ArrowRight, Zap, Gamepad2, Laptop, Timer } from 'lucide-react';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'gamer'>('home');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#packages-gamer') {
        setActiveTab('gamer');
      } else if (hash === '#packages-home' || hash === '#packages') {
        setActiveTab('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const filteredPackages = PACKAGES.filter(pkg => 
    activeTab === 'gamer' ? pkg.isGamer : !pkg.isGamer
  );

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-black text-xs tracking-widest uppercase mb-6 border border-orange-200">
            <Timer size={14} /> Penawaran Terbatas Januari 2024
          </div>
          <h2 className="text-4xl md:text-7xl font-heading text-slate-900 leading-none mb-12">
            PROMO <span className="text-brand-purple">PAKET</span> WIFI
          </h2>
          
          <div className="inline-flex bg-slate-100 p-2 rounded-2xl border-4 border-slate-900 shadow-brutal mb-12 overflow-hidden">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-6 md:px-10 py-4 rounded-xl font-black text-sm md:text-lg transition-all ${
                activeTab === 'home' ? 'bg-[#702283] text-white shadow-lg' : 'text-slate-500 hover:text-[#702283]'
              }`}
            >
              <Laptop size={20} className="hidden sm:block" /> HOME
            </button>
            <button 
              onClick={() => setActiveTab('gamer')}
              className={`flex items-center gap-2 px-6 md:px-10 py-4 rounded-xl font-black text-sm md:text-lg transition-all ${
                activeTab === 'gamer' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-500 hover:text-orange-500'
              }`}
            >
              <Gamepad2 size={24} className="hidden sm:block" /> GAMER
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {filteredPackages.map((pkg: ExtendedPackage) => (
            <div 
              key={pkg.id}
              className={`group relative flex flex-col lg:flex-row items-stretch border-4 border-slate-900 rounded-[2.5rem] overflow-hidden transition-all hover:-translate-y-1 shadow-brutal ${
                pkg.isGamer ? 'bg-slate-950 border-orange-500 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]' : (pkg.isRecommend ? 'bg-purple-50 border-[#702283]' : 'bg-white')
              }`}
            >
              <div className={`lg:w-80 p-10 flex flex-col items-center justify-center text-center relative ${
                pkg.isGamer ? 'bg-orange-500 text-white' : 'bg-[#702283] text-white'
              }`}>
                {pkg.isRecommend && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-[#702283] px-4 py-1 rounded-b-xl font-black text-[10px] uppercase border-x-2 border-b-2 border-slate-900">
                    BEST VALUE
                  </div>
                )}
                <h4 className="text-3xl font-heading mb-4 leading-none">{pkg.name}</h4>
                <div className={`px-6 py-2 rounded-full font-black text-2xl shadow-lg flex items-center gap-2 border-2 border-white/20 ${
                  pkg.isGamer ? 'bg-slate-900 text-white' : 'bg-orange-500 text-white'
                }`}>
                  <Zap size={20} fill="currentColor" />
                  {pkg.speed >= 1000 ? '1 GBPS' : `${pkg.speed} MBPS`}
                </div>
              </div>

              <div className="flex-grow p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-xl font-bold italic ${pkg.isGamer ? 'text-orange-500/50' : 'text-slate-400'}`}>IDR</span>
                      <span className={`text-6xl font-black tracking-tighter ${pkg.isGamer ? 'text-white' : 'text-slate-900'}`}>
                        {pkg.price.toLocaleString('id-ID')}
                      </span>
                      <span className={`text-xl font-bold italic ${pkg.isGamer ? 'text-orange-500/50' : 'text-slate-400'}`}>/bln</span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      {pkg.hasVidio && (
                        <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs">
                          <Tv size={14} /> FREE VIDIO PLATINUM
                        </div>
                      )}
                      <div className={`px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase border ${
                        pkg.isGamer ? 'bg-slate-800 text-orange-400 border-orange-500/30' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        Flat 12 Bulan
                      </div>
                      <div className={`px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase border ${
                        pkg.isGamer ? 'bg-slate-800 text-orange-400 border-orange-500/30' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        PPN Included
                      </div>
                    </div>
                 </div>

                 <div className="flex items-center gap-6">
                    <a 
                      href={getRegistrationWhatsAppLink(`${pkg.name} ${pkg.speed} Mbps`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 md:px-10 py-5 md:py-6 font-black text-lg md:text-xl transition-all flex items-center gap-3 border-4 border-slate-900 shadow-brutal-white ${
                        pkg.isGamer ? 'bg-orange-500 text-white hover:bg-white hover:text-orange-500' : 'bg-[#702283] text-white hover:bg-orange-500'
                      }`}
                    >
                      DAFTAR SEKARANG <ArrowRight size={20} />
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] border-4 border-[#702283] shadow-brutal flex items-center gap-6">
             <div className="bg-[#702283] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-lg">!</div>
             <p className="font-bold leading-tight uppercase text-sm tracking-tight">Harga flat 12 bulan pertama. Penyesuaian harga berlaku di bulan ke-13 sesuai kebijakan.</p>
          </div>
          <div className="bg-slate-100 text-slate-900 p-8 rounded-[2.5rem] border-4 border-slate-900 shadow-brutal flex items-center gap-6">
             <div className="bg-orange-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-2xl shadow-lg">%</div>
             <p className="font-bold leading-tight uppercase text-sm tracking-tight">Gratis biaya instalasi & administrasi untuk pendaftaran via sales online bulan ini.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
