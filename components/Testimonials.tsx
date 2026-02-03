
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#702283] relative overflow-hidden pattern-bg">
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-6">
             {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-orange-500 fill-orange-500" />
             ))}
          </div>
          <h3 className="text-4xl md:text-7xl font-heading text-white leading-none mb-6">
            KATA <span className="text-orange-500">MEREKA</span>
          </h3>
          <p className="text-purple-200 font-bold text-lg uppercase tracking-widest max-w-xl mx-auto">Telah Dipercaya Ribuan Rumah di Indonesia untuk Menunjang Aktivitas Digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] border-4 border-slate-900 shadow-brutal-white relative group flex flex-col h-full transition-transform hover:-translate-y-2">
              <Quote className="absolute top-6 right-8 text-slate-100 w-16 h-16 group-hover:text-orange-100 transition-colors pointer-events-none" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg md:text-xl font-bold italic leading-relaxed mb-10 flex-grow relative z-10">
                "{t.comment}"
              </p>
              
              <div className="flex items-center gap-4 border-t-2 border-slate-50 pt-6">
                <div className="w-14 h-14 bg-[#702283] rounded-2xl flex items-center justify-center font-black text-2xl text-white border-2 border-slate-900 uppercase shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-black text-slate-900 uppercase tracking-tighter text-sm md:text-base flex items-center gap-2">
                    {t.name} <CheckCircle2 size={14} className="text-blue-500" />
                  </h5>
                  <p className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <div className="bg-white/10 backdrop-blur-md inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 text-white font-black uppercase tracking-tighter">
              <span className="text-orange-500 text-2xl">4.9/5</span> Rating Berdasarkan 10,000+ Ulasan Google
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
