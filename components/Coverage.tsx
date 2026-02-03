
import React from 'react';
import { CITIES, getAreaCheckWhatsAppLink } from '../constants';
import { MapPin, Search, Globe, Navigation } from 'lucide-react';

const Coverage: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(112,34,131,0.2),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg font-black text-xs uppercase tracking-[0.2em] mb-8 text-orange-500">
              <Globe size={16} /> Jangkauan Nasional
            </div>
            <h2 className="text-5xl md:text-8xl font-heading text-white leading-[0.85] tracking-tighter mb-8 uppercase">
              CEK <span className="text-orange-500">AREA</span> <br /> COVERAGE
            </h2>
            <p className="text-slate-400 text-xl font-bold leading-relaxed uppercase tracking-tighter">
              Tim kami siap membantu pengecekan titik kabel Full Fiber Optic di lokasi Anda. Klik tombol di bawah untuk cek detail alamat.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <a 
              href={getAreaCheckWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full lg:w-auto bg-white text-slate-900 px-12 py-7 rounded-[2rem] font-black text-xl md:text-2xl border-4 border-orange-500 shadow-brutal-white hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-4 uppercase"
            >
              <Search size={28} className="group-hover:scale-125 transition-transform" /> 
              Cek Alamat Saya
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CITIES.map((city) => (
            <div 
              key={city} 
              className="bg-white/5 backdrop-blur-sm border-2 border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:border-orange-500 hover:bg-white hover:text-slate-900 transition-all group cursor-pointer"
              onClick={() => window.open(getAreaCheckWhatsAppLink(), '_blank')}
            >
              <div className="bg-orange-500/10 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors">
                <MapPin className="text-orange-500 group-hover:text-white transition-colors" size={24} />
              </div>
              <span className="font-black uppercase tracking-tighter text-xl">{city}</span>
              <div className="text-[10px] font-black opacity-30 uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                Tersedia Sekarang
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/20 text-center">
           <div className="flex items-center justify-center gap-3 mb-4 text-orange-500">
              <Navigation size={24} />
              <span className="font-black uppercase tracking-widest">Update Jaringan</span>
           </div>
           <p className="text-slate-400 font-bold text-lg mb-0 uppercase tracking-tighter">
             Lokasi Anda belum ada di daftar? Silakan Hubungi tim kami karena jaringan MyRepublic terus berekspansi ke puluhan kelurahan baru setiap bulannya!
           </p>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
