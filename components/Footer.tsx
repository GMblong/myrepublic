
import React from 'react';
import logoSinarmas from '@assets/images/logo-sinarmas.png';
import { ROCKET_LOGO, getRegistrationWhatsAppLink, WHATSAPP_BASE_URL } from '../constants';
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#702283] p-12 md:p-20 text-center mb-20 relative overflow-hidden border-4 border-slate-900 rounded-[3rem] shadow-brutal-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pattern-bg pointer-events-none"></div>
          <h3 className="text-4xl md:text-7xl font-black text-white mb-8 relative z-10 tracking-tighter uppercase leading-none">
            SIAP UNTUK <br /><span className="text-orange-500">ROKET FAST</span> WIFI?
          </h3>
          <p className="text-white text-xl md:text-3xl max-w-2xl mx-auto mb-12 relative z-10 font-black opacity-90 uppercase">
             PROMO FLAT 12 BULAN TERBATAS!
          </p>
          <a
            href={getRegistrationWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-orange-500 text-white px-12 py-6 font-black text-2xl hover:bg-white hover:text-slate-900 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] border-4 border-slate-900 rounded-2xl"
          >
            <MessageCircle className="w-8 h-8" />
            ORDER VIA WHATSAPP <ArrowRight />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 text-center md:text-left">
          <div className="max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
              <div className="text-orange-500">{ROCKET_LOGO}</div>
              <span className="text-3xl font-black tracking-tighter uppercase">MYREPUBLIC</span>
            </div>
            <p className="text-slate-400 text-lg mb-8 font-bold">
              Pelopor internet fiber optik simetris 1:1 di Indonesia. Kecepatan tanpa batas, tanpa FUP.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl mb-8 border-2 border-slate-700">
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Member of</span>
               <img src={logoSinarmas} alt="Sinarmas Logo" className="h-4" />
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 border-2 border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all rounded-xl">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <h5 className="font-black text-orange-500 mb-8 uppercase tracking-[0.3em] text-xs">MENU</h5>
              <ul className="space-y-4 text-slate-400 font-black uppercase text-xs tracking-tighter">
                <li><a href="#packages-home" className="hover:text-white transition-colors">Paket Promo Home</a></li>
                <li><a href="#packages-gamer" className="hover:text-white transition-colors">Paket Promo Gamer</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Keunggulan</a></li>
                <li><a href="#how-to" className="hover:text-white transition-colors">Cara Daftar</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-orange-500 mb-8 uppercase tracking-[0.3em] text-xs">BANTUAN</h5>
              <ul className="space-y-4 text-slate-400 font-black uppercase text-xs tracking-tighter">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ / Tanya Jawab</a></li>
                <li><a href="#coverage" className="hover:text-white transition-colors">Cek Area Coverage</a></li>
                <li><a href="#requirements" className="hover:text-white transition-colors">Syarat Berlangganan</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-black text-[10px] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} MyRepublic Indonesia. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-slate-500 font-black text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <a
        href={getRegistrationWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-2xl shadow-brutal border-4 border-slate-900 hover:scale-105 transition-all flex items-center gap-3 font-black"
      >
        <MessageCircle size={32} />
        <span className="hidden sm:inline uppercase text-sm tracking-widest">Daftar Via WA</span>
      </a>
    </footer>
  );
};

export default Footer;
