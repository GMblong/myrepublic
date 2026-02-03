
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading text-slate-900 leading-none mb-6">
            PERTANYAAN <span className="text-[#702283]">POPULER</span>
          </h2>
          <p className="text-slate-500 font-bold text-lg uppercase tracking-widest">Pertanyaan populer seputar paket internet MyRepublic</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-4 border-slate-900 rounded-[2rem] overflow-hidden transition-all shadow-brutal bg-white ${openIndex === idx ? 'bg-white' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-4">
                  <HelpCircle className="text-orange-500" /> {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-[#702283] text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-8 pt-0 text-slate-500 font-bold text-lg leading-relaxed border-t-2 border-slate-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
