import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Target, Award, Heart } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function About() {
  return (
    <>
      <SEO title="About Our Clinic & Philosophy" description="Learn about the values and milestones driving A M Dent Dental Solutions, Rohini's top clinical smile architecture provider." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Core Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full">Our Identity</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark sm:text-5xl">Architecting Dental Excellence</h1>
          <p className="text-slate-500 font-light text-base leading-relaxed">
            A M Dent Dental Solutions combines modern diagnostic care with comfortable treatments, serving the Rohini community with high-tech dentistry.
          </p>
        </div>

        {/* Mission and Vision Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-primary">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-textDark">Our Mission</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Our mission is to offer premium, biological dental treatments using advanced technology, making every visit stress-free, accurate, and completely comfortable.
            </p>
          </div>
          <div className="glass-card p-8 rounded-3xl space-y-4 border-l-4 border-l-secondary">
            <div className="w-12 h-12 bg-sky-50 text-secondary rounded-xl flex items-center justify-center">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-textDark">Our Vision</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              We want to set the standard for clinical care in Delhi—redefining the dentist visit through luxury, modern workspaces, and expert treatment outcomes.
            </p>
          </div>
        </div>

        {/* Chronological Progressive Timeline Tracker */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-textDark tracking-tight">Our Journey & Milestones</h2>
            <p className="text-xs text-slate-400 mt-2">A history of continuous clinical upgrades</p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
            {[
              { year: "2014", title: "Foundation in Rohini", desc: "Launched our first setup focused on gentle care and basic digital diagnosis." },
              { year: "2018", title: "Advanced Implant Integration", desc: "Upgraded our facility with high-end tools for accurate computer-guided root canal and titanium implant procedures." },
              { year: "2022", title: "Luxury Clinic Upgrade", desc: "Moved into our premium glassmorphic facility near Lalaji Chaat Corner, optimizing comfort and sterilization systems." },
              { year: "2026", title: "Digital Aligner & 3D Scanning Network", desc: "Deployed intraoral digital workflows, completely removing messy physical bite impressions." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm transition-transform group-hover:scale-125" />
                <span className="text-xs font-bold text-primary block mb-1">{milestone.year}</span>
                <h4 className="text-base font-bold text-textDark">{milestone.title}</h4>
                <p className="text-sm text-slate-500 font-light mt-1 max-w-2xl leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Foundational Core Values Row */}
        <div className="glass-card p-8 sm:p-12 rounded-[2rem] bg-gradient-to-tr from-slate-50 to-white">
          <h3 className="text-2xl font-bold text-textDark mb-8 text-center">Our Pillars of Care</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto"><ShieldCheck size={20} /></div>
              <h5 className="font-bold text-sm text-textDark">Total Safety</h5>
              <p className="text-xs text-slate-500 font-light">Strict multi-stage cleaning protocols keep our environment completely pathogen-free.</p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto"><Heart size={20} /></div>
              <h5 className="font-bold text-sm text-textDark">Patient-First Comfort</h5>
              <p className="text-xs text-slate-500 font-light">We focus on minimal discomfort, detailed tracking, and calm, welcoming clinical spaces.</p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto"><Award size={20} /></div>
              <h5 className="font-bold text-sm text-textDark">Continuous Learning</h5>
              <p className="text-xs text-slate-500 font-light">Our doctors continuously update their training to bring you the best modern medical care.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}