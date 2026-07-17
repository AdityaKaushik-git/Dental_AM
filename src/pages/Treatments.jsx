import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShieldCheck, HeartPulse, ChevronRight, HelpCircle, Activity } from 'lucide-react';
import SEO from '../components/common/SEO';
import { TREATMENTS_DATA } from '../constants/data';

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(TREATMENTS_DATA[0].id);
  const current = TREATMENTS_DATA.find(t => t.id === activeTab) || TREATMENTS_DATA[0];

  return (
    <>
      <SEO title="Clinical Treatments Framework" description="Explore our clinical solutions, covering root canals, implants, cosmetic smile styling, and orthodontics." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full uppercase">Clinical Capabilities</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark">Our Treatment Protocols</h1>
          <p className="text-slate-500 font-light text-sm">Select a treatment below to view its benefits, procedures, and estimated recovery times.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Navigation Matrix */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none shrink-0">
            {TREATMENTS_DATA.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`w-full text-left px-5 py-4 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 lg:shrink flex items-center justify-between whitespace-nowrap lg:whitespace-normal ${
                  activeTab === t.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'glass-card text-slate-600 hover:bg-white'
                }`}
              >
                <span>{t.title}</span>
                <ChevronRight size={16} className={`hidden lg:block ${activeTab === t.id ? 'text-white' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          {/* Right Dynamic Focus Block Container */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-10 rounded-[2rem] space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-textDark mb-3">{current.title}</h2>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">{current.description}</p>
                </div>

                {/* Logistics Profile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
                  <div className="flex items-center space-x-3 text-xs font-medium text-slate-600">
                    <Clock size={16} className="text-primary" />
                    <span><strong>Duration:</strong> {current.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-medium text-slate-600">
                    <HeartPulse size={16} className="text-primary" />
                    <span><strong>Recovery:</strong> {current.recovery}</span>
                  </div>
                </div>

                {/* Split lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-textDark uppercase tracking-wider flex items-center space-x-2">
                      <ShieldCheck size={16} className="text-emerald-500" />
                      <span>Key Benefits</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-500 font-light">
                      {current.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-textDark uppercase tracking-wider flex items-center space-x-2">
                      <Activity size={16} className="text-primary" />
                      <span>The Procedure</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{current.procedure}</p>
                  </div>
                </div>

                {/* Treatment FAQ subset component */}
                {current.faqs && current.faqs.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <h4 className="text-sm font-bold text-textDark flex items-center space-x-2">
                      <HelpCircle size={16} className="text-accent" />
                      <span>Treatment FAQ</span>
                    </h4>
                    {current.faqs.map((f, idx) => (
                      <div key={idx} className="bg-white/50 p-4 rounded-xl space-y-1 text-xs border border-slate-100">
                        <p className="font-semibold text-textDark">Q: {f.q}</p>
                        <p className="text-slate-500 font-light">{f.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}