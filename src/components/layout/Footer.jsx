import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">
              AM
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              A M
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Premium luxury clinical dental ecosystem providing state-of-the-art biological smile architecture and advanced non-invasive restoration workflows.
          </p>
          <div className="flex items-center space-x-2 text-xs bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50 w-fit">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400">Rating: 4.8 ★ Nearby Lalaji Chaat Corner</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Treatments</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Root Canal Treatment</Link></li>
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Dental Implants</Link></li>
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Smile Designing</Link></li>
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Cosmetic Dentistry</Link></li>
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Teeth Whitening</Link></li>
            <li><Link to="/treatments" className="hover:text-secondary transition-colors">Orthodontics (Braces)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Our Clinic</Link></li>
            <li><Link to="/doctors" className="hover:text-secondary transition-colors">Our Doctors</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary transition-colors">Clinic Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Details</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <span>Rohini Sector 24, Near Lalaji Chaat Corner, Delhi, India</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:+919999999999" className="hover:text-white transition-colors">+91 99999 99999</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:info@amdentdental.com" className="hover:text-white transition-colors">info@amdentdental.com</a>
            </li>
            <li className="flex items-start space-x-2.5">
              <Clock size={16} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p>Mon - Sat: 10:00 AM - 8:30 PM</p>
                <p>Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} A M Dent Dental Solutions. All rights reserved.</p>
        <p class="flex items-center mt-2 sm:mt-0">
          Designed by Aditya Kaushik(Arknex) <Heart size={10} className="text-red-500 mx-1 fill-red-500" />
        </p>
      </div>
    </footer>
  );
}