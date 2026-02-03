
import React from 'react';
import { Tv, Play, Film, Sparkles, MonitorPlay } from 'lucide-react';

const Entertainment: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest mb-8">
              <Sparkles size={16} /> Exclusive Partnership
            </div>
            <h2 className="text-5xl md:text-8xl font-heading leading-[0.85] tracking-tighter mb-8">
              HIBURAN <br /> <span className="text-red-600">TANPA BATAS</span>
            </h2>
            <p className="text-slate-400 text-xl font-bold leading-relaxed mb-10 max-w-xl">
              Dapatkan akses gratis <span className="text-white">Vidio Platinum</span> untuk setiap langganan paket PRIME ke atas. Nikmati ribuan film, series, dan pertandingan bola live dalam kualitas 4K.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex gap-4 items-start">
                <div className="bg-red-600 p-3 rounded-xl text-white">
                  <MonitorPlay size={24} />
                </div>
                <div>
                  <h5 className="font-black text-lg uppercase mb-1">STB Android 4K</h5>
                  <p className="text-slate-500 text-sm font-bold">Ubah TV biasa menjadi Smart TV dengan ribuan aplikasi.</p>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex gap-4 items-start">
                <div className="bg-orange-500 p-3 rounded-xl text-white">
                  <Play size={24} />
                </div>
                <div>
                  <h5 className="font-black text-lg uppercase mb-1">Multi Device</h5>
                  <p className="text-slate-500 text-sm font-bold">Tonton di HP, Tablet, Laptop atau Smart TV sekaligus.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-red-600 to-orange-500 p-1 rounded-[3rem] shadow-2xl rotate-2">
              <div className="bg-slate-900 rounded-[2.8rem] overflow-hidden aspect-video relative group">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 shadow-xl">
                     <Play size={40} fill="currentColor" />
                   </div>
                </div>
                <div className="p-12 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="bg-white text-red-600 px-4 py-2 rounded-lg font-black text-2xl">Vidio</div>
                     <span className="font-black text-xl">Platinum</span>
                  </div>
                  <p className="font-bold text-white/60">Sports, Movies, Original Series</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black shadow-brutal border-2 border-slate-900 -rotate-12">
              FREE<br/>ACCESS
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-6 py-4 rounded-2xl font-black shadow-brutal border-2 border-slate-900 rotate-6">
              100+<br/>CHANNELS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
