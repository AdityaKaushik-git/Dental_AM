import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Shield, Sparkles, Activity, Star, ArrowRight, CheckCircle2, Clock, MapPin, Zap } from 'lucide-react';
import SEO from '../components/common/SEO';
import { TREATMENTS_DATA, TESTIMONIALS_DATA } from '../constants/data';

// Component mapping for rendering dynamic lucide icons safely
const iconMap = { Activity, Shield, Sparkles, Zap };

export default function Home() {
  return (
    <>
      <SEO title="Luxury Healthcare & Smile Architecture" />

      {/* Hero Core */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-bgLight">
        {/* Apple-styled Ambient Background Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full filter blur-[120px]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/60 shadow-sm text-xs font-semibold text-primary">
              <Star size={14} className="fill-current" />
              <span>4.8 ★ Rated Best Dental Clinic in Rohini</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-textDark leading-[1.1]">
              Healthy Smiles.<br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Modern Dental Care.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience dental excellence at A M Dent Dental Solutions near Lalaji Chaat Corner, Rohini. We combine state-of-the-art clinical tech with an elegant, patient-first setting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-all text-center">
                Book Appointment
              </Link>
              <a href="tel:+919999999999" className="w-full sm:w-auto px-8 py-4 glass-card text-textDark font-medium rounded-full hover:bg-white/90 transition-all flex items-center justify-center space-x-2">
                <span>Call +91 99999 99999</span>
              </a>
            </div>
          </motion.div>

          {/* Right Floating Hero Card Matrix */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600" 
                alt="Modern Medical Laboratory Environment"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Glass Elements */}
              <div className="absolute top-6 right-6 glass-card p-4 rounded-2xl flex items-center space-x-3 shadow-lg max-w-[200px]">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-textDark">Sterilized Tech</h4>
                  <p className="text-[10px] text-slate-500">100% Secure Process</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-textDark">A M Dent Clinic Excellence</span>
                  <span className="text-xs text-primary font-semibold">4.8 ★</span>
                </div>
                <p className="text-[11px] text-slate-500 font-light">Rohini Sector 24, Near Lalaji Chaat Corner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Counter Banner */}
      <section className="py-12 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: 1000, suffix: "+", label: "Happy Patients" },
            { value: 500, suffix: "+", label: "Root Canals Completed" },
            { value: 300, suffix: "+", label: "Smile Makeovers" },
            { value: 10, suffix: "+", label: "Years Experience" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />{stat.suffix}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Specialties Panel */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full">Our Framework</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textDark">Advanced Biological Diagnostics</h2>
          <p className="text-slate-500 font-light text-sm sm:text-base">Explore our range of modern dental care treatments, from cleanings to complex smile transformations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS_DATA.slice(0, 6).map((treatment) => {
            const IconComponent = iconMap[treatment.icon] || Activity;
            return (
              <div key={treatment.id} className="glass-card p-8 rounded-3xl group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-textDark group-hover:text-primary transition-colors">{treatment.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{treatment.shortDesc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link to={`/treatments`} className="text-xs font-semibold text-primary inline-flex items-center space-x-1 group-hover:underline">
                    <span>Explore Treatment</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value Differentiation Pillar Matrix */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden rounded-[2.5rem] mx-4 my-12 max-w-7xl lg:mx-auto px-6 sm:px-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full filter blur-[100px]" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Uncompromising Clinical Excellence</h2>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              We focus on premium, pain-free care with zero guesswork. From sterilized tools to advanced digital planning, your health is our priority.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-sm"><Clock size={16} className="text-secondary" /> <span>Emergency support & Sunday hours</span></div>
              <div className="flex items-start space-x-3 text-sm"><MapPin size={16} className="text-secondary mt-0.5" /> <span>Rohini Sector 24, near Lalaji Chaat Corner</span></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Pain-Free System", d: "Precise local numbing keeps your treatments smooth and comfortable." },
              { t: "Modern Facility", d: "Equipped with intraoral cameras and 3D imaging for exact tracking." },
              { t: "Clear, Honest Pricing", d: "Transparent treatment plans upfront with no hidden fees." },
              { t: "Sterilized Equipment", d: "Strict multi-stage cleaning protocols keep our space safe." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-2">
                <h4 className="font-semibold text-white text-base">{item.t}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews Grid Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-primary bg-blue-50 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl font-bold text-textDark tracking-tight">Real Reviews From Our Patients</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 font-light italic leading-relaxed">"{item.text}"</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-textDark">{item.name}</h4>
                <p className="text-[11px] text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Panel */}
      <section className="bg-gradient-to-tr from-primary to-accent text-white py-20 px-6 rounded-[2.5rem] max-w-7xl mx-auto my-16 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-pulse" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Re-Architect Your Smile?</h2>
          <p className="text-white/80 font-light text-sm sm:text-base">
            Book your professional assessment today. Get custom, high-tech care at A M Dent Dental Solutions in Rohini.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-slate-50 transition-all">
              Schedule Your Visit
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 transition-all flex items-center justify-center space-x-2">
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}