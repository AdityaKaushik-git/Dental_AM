import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Briefcase, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';
import { DOCTORS_DATA } from '../constants/data';

export default function Doctors() {
  return (
    <>
      <SEO title="Our Specialized Dentists" description="Meet Dr. Anand Mishra and Dr. Shreya Sharma, our lead dental experts in implants, cosmetic work, and root canals." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-20">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full uppercase">Medical Experts</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark">Meet Our Specialists</h1>
          <p className="text-slate-500 font-light text-sm">Experienced clinicians providing precise, high-tech dental care in Rohini.</p>
        </div>

        <div className="space-y-16">
          {DOCTORS_DATA.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className={`glass-card p-6 sm:p-10 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Profile image vector holder */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    {/* High aesthetic visual backup placeholder mapping */}
                    <img 
                      src={index === 0 
                        ? "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" 
                        : "https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=400"
                      } 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-textDark">{doctor.name}</h2>
                  <p className="text-xs text-primary font-medium mt-0.5">{doctor.title}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{doctor.experience}</p>
                </div>
              </div>

              {/* Data payload content */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Clinical Profile</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{doctor.bio}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-textDark uppercase tracking-wider flex items-center space-x-1.5">
                      <GraduationCap size={16} className="text-primary" />
                      <span>Education & Training</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-slate-500 font-light">
                      {doctor.education.map((edu, i) => <li key={i}>• {edu}</li>)}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-textDark uppercase tracking-wider flex items-center space-x-1.5">
                      <Award size={16} className="text-primary" />
                      <span>Key Accomplishments</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-slate-500 font-light">
                      {doctor.achievements.map((ach, i) => <li key={i}>• {ach}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {doctor.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full flex items-center space-x-1">
                        <CheckCircle size={10} className="text-emerald-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className="w-full sm:w-auto px-6 py-2.5 bg-textDark text-white text-xs font-medium rounded-full text-center hover:bg-primary transition-colors shrink-0">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}