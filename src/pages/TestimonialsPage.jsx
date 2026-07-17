import React from 'react';
import { Star, Quote } from 'lucide-react';
import SEO from '../components/common/SEO';
import { TESTIMONIALS_DATA } from '../constants/data';

export default function TestimonialsPage() {
  return (
    <>
      <SEO title="Patient Testimonials" description="Read real, verified reviews from patients who experienced our high-tech root canal, implant, and aligner care." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full uppercase">Patient Feedback</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark">Verified Experiences</h1>
          <p className="text-slate-500 font-light text-sm">Honest reviews from patients who chose us for our precise treatments and comfortable clinic experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl relative flex flex-col justify-between space-y-6">
              <Quote size={40} className="absolute top-6 right-6 text-slate-200/60 pointer-events-none" />
              
              <div className="space-y-3 relative z-10">
                <div className="flex items-center text-amber-500">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-light italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-textDark">{item.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.role}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified Patient</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}