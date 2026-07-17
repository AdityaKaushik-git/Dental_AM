import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const toggle = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      {/* WhatsApp Interface Link */}
      <a 
        href="https://wa.me/919999999999?text=Hello%20A%20M%20Dent%20Solutions,%20I'd%20like%20to%20schedule%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={22} fill="currentColor" />
      </a>

      {/* Quick Booking Anchor */}
      <Link 
        to="/contact"
        className="px-4 h-12 rounded-full bg-primary text-white flex items-center space-x-2 shadow-lg hover:bg-accent transition-colors duration-300 font-medium text-xs tracking-wide uppercase"
      >
        <Calendar size={16} />
        <span className="hidden sm:inline">Book Appt</span>
      </Link>

      {/* Dynamic Back to Top */}
      {showTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full glass-card text-textDark flex items-center justify-center shadow-md hover:bg-slate-100 transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}