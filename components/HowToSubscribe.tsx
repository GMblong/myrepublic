
import React from 'react';
import { STEPS, getRegistrationWhatsAppLink } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HowToSubscribe: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-7xl font-heading text-slate-900 leading-none mb-6">
            ALUR <span className="text-[#702283]">DAFTAR</span>
          </h3>
          <p className="text-slate-500 font-bold text-lg uppercase tracking-widest">Cepat, Mudah, dan Tanpa Ribet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-[30%] -translate-y-12 z-0 text-slate-200">
             <ArrowRight size={48} />
          </div>
          <div className="hidden lg:block absolute top-1/2 left-[64%] -translate-y-12 z-0 text-slate-200">
             <ArrowRight size={48} />
          </div>
          
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group relative z-10">
              <div className="w-24 h-24 bg-white border-4 border-slate-900 rounded-[2.5rem] flex items-center justify-center text-[#702283] mb-8 shadow-brutal transition-all group-hover:bg-[#702283] group-hover:text-white group-hover:-rotate-6 group-hover:scale-110">
                {step.icon}
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border-4 border-slate-100 group-hover:border-[#702283] group-hover:bg-white transition-all w-full shadow-sm">
                <span className="text-orange-500 font-black text-6xl mb-4 block opacity-10 group-hover:opacity-20 transition-opacity leading-none">0{step.id}</span>
                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{step.title}</h4>
                <p className="text-slate-500 font-bold leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
           <a 
            href={getRegistrationWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-3xl font-black text-xl md:text-2xl border-4 border-slate-900 shadow-brutal hover:bg-white hover:text-slate-900 transition-all uppercase"
           >
             <MessageCircle className="w-8 h-8 group-hover:scale-125 transition-transform" />
             Klik Untuk Daftar Sekarang
           </a>
        </div>
      </div>
    </section>
  );
};

export default HowToSubscribe;
