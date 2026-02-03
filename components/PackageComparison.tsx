
import React from 'react';
import { PACKAGES, getRegistrationWhatsAppLink } from '../constants';
import { Check, X, Zap, ShieldCheck } from 'lucide-react';

const PackageComparison: React.FC = () => {
  const comparisonTiers = PACKAGES.filter(p => 
    ['jet', 'neo', 'nexus', 'gamer250', 'prime', 'ultra'].includes(p.id)
  );

  const features = [
    { name: 'Kecepatan', key: 'speed', icon: <Zap size={18} /> },
    { name: 'Harga (Inc. PPN)', key: 'price', icon: <ShieldCheck size={18} /> },
    { name: 'Tanpa FUP', key: 'fup', always: true },
    { name: 'Upload:Download 1:1', key: 'symmetry', always: true },
    { name: 'Optimasi Game', key: 'gamer' },
    { name: 'Vidio Platinum', key: 'vidio' },
    { name: 'IP Public Static', key: 'ip', onlyGamer: true },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-heading text-slate-900 leading-none mb-6">
            BANDINGKAN <span className="text-brand-purple">PAKET</span>
          </h2>
          <p className="text-slate-500 font-bold text-lg uppercase tracking-widest">Bandingkan paket internet yang tersedia dan temukan yang paling pas untuk kebutuhan Anda</p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[1000px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left bg-slate-50 border-4 border-slate-900 rounded-tl-[2rem] w-64">
                  <span className="text-slate-400 font-black uppercase tracking-widest text-xs">Fitur & Layanan</span>
                </th>
                {comparisonTiers.map((pkg, idx) => (
                  <th 
                    key={pkg.id} 
                    className={`p-6 border-4 border-slate-900 text-center transition-all ${
                      pkg.isRecommend ? 'bg-purple-50' : (pkg.isGamer ? 'bg-slate-950 text-white' : 'bg-white')
                    } ${idx === comparisonTiers.length - 1 ? 'rounded-tr-[2rem]' : ''}`}
                  >
                    <div className="text-xs font-black uppercase tracking-widest mb-2 opacity-50">Paket</div>
                    <div className="text-2xl font-black uppercase tracking-tighter mb-1">{pkg.name}</div>
                    <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black border-2 border-slate-900 ${
                      pkg.isGamer ? 'bg-orange-500 text-white' : 'bg-white text-[#702283]'
                    }`}>
                      {pkg.speed >= 1000 ? '1 GBPS' : `${pkg.speed} MBPS`}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fIdx) => (
                <tr key={feature.name}>
                  <td className="p-6 border-4 border-slate-900 bg-slate-50 font-black uppercase text-xs tracking-tighter flex items-center gap-3">
                    <span className="text-orange-500">{feature.icon}</span>
                    {feature.name}
                  </td>
                  {comparisonTiers.map((pkg) => (
                    <td key={pkg.id} className={`p-6 border-4 border-slate-900 text-center font-bold ${
                      pkg.isGamer ? 'bg-slate-900 text-white/80' : 'text-slate-600'
                    }`}>
                      {feature.key === 'speed' && (
                        <span className="text-xl font-black">
                          {pkg.speed} <small className="text-[10px]">Mbps</small>
                        </span>
                      )}
                      {feature.key === 'price' && (
                        <span className="text-xl font-black text-[#702283] dark:text-orange-500">
                          {Math.floor(pkg.price / 1000)}k
                        </span>
                      )}
                      {feature.always && <Check className="mx-auto text-green-500" strokeWidth={4} />}
                      {feature.key === 'gamer' && (
                        pkg.isGamer ? <Check className="mx-auto text-orange-500" strokeWidth={4} /> : <X className="mx-auto text-slate-200" />
                      )}
                      {feature.key === 'vidio' && (
                        pkg.hasVidio ? <Check className="mx-auto text-red-500" strokeWidth={4} /> : <X className="mx-auto text-slate-200" />
                      )}
                      {feature.key === 'ip' && (
                        pkg.isGamer ? <Check className="mx-auto text-orange-500" strokeWidth={4} /> : <X className="mx-auto text-slate-200" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6 border-4 border-slate-900 bg-slate-50 rounded-bl-[2rem]"></td>
                {comparisonTiers.map((pkg, idx) => (
                  <td 
                    key={pkg.id} 
                    className={`p-6 border-4 border-slate-900 text-center ${
                      pkg.isGamer ? 'bg-slate-950' : 'bg-white'
                    } ${idx === comparisonTiers.length - 1 ? 'rounded-br-[2rem]' : ''}`}
                  >
                    <a 
                      href={getRegistrationWhatsAppLink(`${pkg.name} ${pkg.speed} Mbps`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-3 font-black text-xs uppercase border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${
                        pkg.isGamer ? 'bg-orange-500 text-white' : 'bg-[#702283] text-white'
                      }`}
                    >
                      Pilih Paket
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;
