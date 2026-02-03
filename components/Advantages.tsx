
import React from 'react';
import { ADVANTAGES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 text-slate-200/50 font-black text-[120px] leading-none select-none pointer-events-none -rotate-12 z-0 uppercase tracking-tighter">
        SUPERIOR
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h3 className="text-5xl md:text-8xl font-heading text-slate-900 leading-[0.85] tracking-tighter mb-4">
              MENGAPA <br /> <span className="text-[#702283]">KAMI?</span>
            </h3>
            <div className="h-4 w-48 bg-orange-500"></div>
          </div>
          <p className="text-slate-500 text-xl font-bold max-w-md leading-tight uppercase tracking-tighter italic">
            Internet bukan sekadar kencang, tapi harus stabil dan benar-benar tanpa batas kuota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-white p-10 md:p-12 border-4 border-slate-900 rounded-[3rem] shadow-brutal relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-orange-100 transition-colors">
              <ArrowUpRight size={80} strokeWidth={4} />
            </div>
            <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border-2 border-[#702283]/10 text-orange-500">
               {ADVANTAGES[0].icon}
            </div>
            <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900 leading-none">{ADVANTAGES[0].title}</h4>
            <p className="text-lg md:text-xl text-slate-500 font-bold leading-tight max-w-sm">
              {ADVANTAGES[0].description}
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-3 bg-[#702283] p-10 md:p-12 border-4 border-slate-900 rounded-[3rem] shadow-brutal text-white group overflow-hidden relative">
             <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
               {ADVANTAGES[1].icon}
            </div>
            <div className="bg-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border-4 border-white/20 text-white">
               {ADVANTAGES[1].icon}
            </div>
            <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter leading-none">{ADVANTAGES[1].title}</h4>
            <p className="text-lg md:text-xl text-purple-100 font-bold leading-tight max-w-sm">
              {ADVANTAGES[1].description}
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-orange-500 p-10 border-4 border-slate-900 rounded-[3rem] shadow-brutal text-white hover:bg-white hover:text-orange-500 transition-colors group">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
               {ADVANTAGES[2].icon}
            </div>
            <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter leading-tight">{ADVANTAGES[2].title}</h4>
            <p className="text-white/80 group-hover:text-slate-500 font-bold leading-tight">{ADVANTAGES[2].description}</p>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-white p-10 border-4 border-slate-900 rounded-[3rem] shadow-brutal text-slate-900 hover:bg-[#702283] hover:text-white transition-colors group">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-white transition-colors">
               {ADVANTAGES[3].icon}
            </div>
            <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter leading-tight">{ADVANTAGES[3].title}</h4>
            <p className="text-slate-500 group-hover:text-purple-100 font-bold leading-tight">{ADVANTAGES[3].description}</p>
          </div>

          <div className="md:col-span-4 lg:col-span-2 bg-slate-900 p-10 border-4 border-slate-900 rounded-[3rem] shadow-brutal text-white">
            <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
               {ADVANTAGES[4].icon}
            </div>
            <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter leading-tight">{ADVANTAGES[4].title}</h4>
            <p className="text-slate-400 font-bold leading-tight">{ADVANTAGES[4].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
