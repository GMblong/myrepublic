
import React from 'react';
import { REQUIREMENTS, getAreaCheckWhatsAppLink } from '../constants';
import { Send } from 'lucide-react';

const Requirements: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <p className="text-[#702283] font-black text-lg uppercase tracking-widest mb-4 tracking-tighter">Onboarding</p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase">
              Syarat <br />
              <span className="text-orange-500">Pendaftaran.</span>
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg font-bold">
              Proses pendaftaran sangat praktis. Cukup kirimkan data berikut melalui WhatsApp untuk verifikasi area dan instalasi.
            </p>
            
            <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-[#702283]">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Send className="w-32 h-32" size={120} />
               </div>
              <h4 className="font-bold text-3xl text-white mb-4 uppercase tracking-tighter">Cek Area Coverage</h4>
              <p className="text-slate-400 mb-8 text-lg font-bold uppercase tracking-tight">
                Tersedia di Jakarta, Bandung, Surabaya, Medan, Bali & kota besar lainnya.
              </p>
              <a 
                href={getAreaCheckWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] uppercase flex items-center justify-center gap-3 border-4 border-slate-900"
              >
                Cek Ketersediaan Sekarang <Send size={24} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
            {REQUIREMENTS.map((req) => (
              <div key={req.id} className="flex gap-6 p-8 bg-slate-50 rounded-3xl border-4 border-slate-100 hover:border-[#702283] transition-all group shadow-sm hover:shadow-xl">
                <div className="flex-shrink-0 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md text-orange-500 group-hover:bg-[#702283] group-hover:text-white transition-all duration-500">
                  {req.icon}
                </div>
                <div>
                  <h5 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">{req.title}</h5>
                  <p className="text-slate-500 text-lg leading-relaxed font-bold">
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
