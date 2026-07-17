import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import { GALLERY_DATA } from '../constants/data';

const categories = [
  { value: 'all', label: 'All Displays' },
  { value: 'clinic', label: 'The Clinic' },
  { value: 'equipment', label: 'Advanced Tech' },
  { value: 'treatments', label: 'Clinical Settings' },
  { value: 'patients', label: 'Digital Metrics' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(item => item.tag === filter);

  return (
    <>
      <SEO title="Clinic Gallery & Technology" description="Browse our premium clinical facilities, advanced sterilization tools, and dental equipment in Rohini." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full uppercase">Visual Tour</span>
          <h1 className="text-4xl font-bold tracking-tight text-textDark">Inside A M Dent</h1>
          <p className="text-slate-500 font-light text-sm">Take a visual tour of our clean, sterile workspaces and premium diagnostics area.</p>
        </div>

        {/* Filter Navigation Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === cat.value 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'glass-card text-slate-600 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Photo Masonry Panel Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((img, idx) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-100 glass-card"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-xs tracking-wide">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}