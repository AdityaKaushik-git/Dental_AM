import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FAQS_DATA } from '../constants/data';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <SEO title="Frequently Asked Questions" description="Find answers regarding our location in Rohini Sector 24, Sunday operational times, sterilization setup, and appointments." />
      
      <div className="py-16 px-4 max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full uppercase">Support Center</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark">Common Questions</h1>
          <p className="text-slate-500 font-light text-sm">Everything you need to know about our clinic parameters, directions, and safety policies.</p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden transition-colors border border-slate-200/40">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-medium text-sm sm:text-base text-textDark hover:bg-white/40 transition-colors"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle size={18} className="text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 font-light leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}