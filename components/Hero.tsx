
import React from 'react';
import { ROCKET_LOGO, getRegistrationWhatsAppLink } from '../constants';
import { ChevronDown, Gift, Wifi, Zap, Star } from 'lucide-react';

import heroIcon from '@assets/images/hero-icon.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#702283] pt-32 pb-16 overflow-hidden pattern-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 skew-x-12 translate-x-1/2"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg font-bold text-[10px] md:text-xs mb-6 md:mb-8 tracking-[0.2em] uppercase">
              <Gift size={14} className="text-orange-400" /> Member of Sinarmas Group
            </div>
            
            <h1 className="text-5xl md:text-[100px] font-heading text-white leading-[0.9] mb-8 tracking-tighter relative">
              INTERNET <br />
              <span className="text-orange-500">ROKET</span> <br />
              TANPA FUP
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mb-8">
              Daftar sekarang dan nikmati koneaksi internet super cepat dan stabil untuk semua kebutuhan digitalmu.
              <br />
              Promo Special 2026: Harga Flat 12 Bulan, Sudah Termasuk PPN, dan <span className="text-orange-400 font-black italic underline decoration-2">BEBAS</span> Biaya Tambahan!
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 relative">
              {/* GRATIS INSTALASI BADGE */}
              <div className="absolute -top-16 sm:-top-12 -right-4 sm:-right-8 z-30 animate-pulse hidden md:block">
                 <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl font-black text-xs md:text-sm shadow-brutal border-2 border-black rotate-6 uppercase glow-orange">
                    Gratis<br/>Instalasi!
                 </div>
              </div>

              <a
                href={getRegistrationWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-orange-500 text-white px-8 md:px-10 py-5 md:py-6 font-black text-lg md:text-xl shadow-brutal border-2 border-black hover:bg-white hover:text-[#702283] transition-all flex items-center justify-center gap-3 uppercase group"
              >
                Langganan Sekarang 
                <img src={heroIcon} alt="Hero Icon" className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-8 md:px-10 py-5 md:py-6 font-black text-lg md:text-xl flex items-center justify-center gap-3">
                <Wifi className="text-orange-500" /> 100% FIBER
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 md:gap-8 border-t border-white/10 pt-8">
               <div className="flex flex-col">
                  <span className="text-orange-500 font-black text-2xl md:text-3xl">1 Gbps</span>
                  <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Max Speed</span>
               </div>
               <div className="w-px h-10 md:h-12 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-orange-500 font-black text-2xl md:text-3xl">0%</span>
                  <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Latency Lag</span>
               </div>
               <div className="w-px h-10 md:h-12 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-orange-500 font-black text-2xl md:text-3xl">PPN</span>
                  <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Included</span>
               </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-4 justify-center relative">
            <div className="animate-float relative z-10">
              <div className="bg-white p-12 rounded-[3rem] shadow-brutal-white transform rotate-3 relative overflow-hidden border-4 border-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                <Star className="absolute top-4 right-4 text-orange-400 opacity-20 animate-spin-slow" size={40} />
                <Star className="absolute bottom-4 left-4 text-purple-400 opacity-20 animate-spin-slow" size={32} />
                
                <div className="text-[#702283] scale-[3] relative z-10 transition-transform group-hover:scale-[3.2] duration-500">
                  {ROCKET_LOGO}
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-4 bg-purple-900 text-white px-4 py-2 rounded-xl font-bold text-[10px] shadow-lg border-2 border-slate-900 uppercase tracking-widest">
                Hemat Rp 500k!
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full border border-white/10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
