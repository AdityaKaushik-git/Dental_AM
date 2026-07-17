import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Mimic API delay execution sequence
    await new Promise(resolve => setTimeout(resolve, 1200));
    toast.success(`Thank you, ${data.name}. Your slot request has been sent! Our desk will WhatsApp/Call you in under 15 minutes.`);
    reset();
  };

  return (
    <>
      <SEO title="Schedule Consultation Visit" description="Book your appointment at A M Dent Dental Solutions in Rohini Sector 24. Fill out our contact portal for instant booking." />
      
      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Card Pane */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full">Scheduling Desk</span>
            <h1 className="text-4xl font-bold tracking-tight text-textDark mt-3">Connect With Us</h1>
            <p className="text-slate-500 font-light text-sm mt-2 leading-relaxed">
              Have questions or want to request a visit? Contact us directly or use our real-time scheduling portal.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4 text-sm text-slate-600">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-textDark">Our Address</p>
                <p className="font-light text-xs mt-0.5">Rohini Sector 24, Near Lalaji Chaat Corner, Delhi, 110085</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-primary shrink-0" />
              <div>
                <p className="font-semibold text-textDark">Call / WhatsApp Desk</p>
                <p className="font-light text-xs mt-0.5"><a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a></p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-primary shrink-0" />
              <div>
                <p className="font-semibold text-textDark">Email Channels</p>
                <p className="font-light text-xs mt-0.5"><a href="mailto:info@amdentdental.com" className="hover:underline">info@amdentdental.com</a></p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-textDark">Operating Windows</p>
                <p className="font-light text-xs mt-0.5">Mon - Sat: 10:00 AM - 8:30 PM</p>
                <p className="font-light text-xs">Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Fallback Static Map Area Holder Embed Map */}
          <div className="w-full aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative">
            <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center p-4 text-center">
              <div className="text-xs font-medium text-slate-600">
                <p className="font-bold text-textDark">Interactive Map Interface</p>
                <p className="text-[11px] font-light mt-1">Rohini Sector 24 Core Grid Area • Near Lalaji Chaat Corner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Component Card Block Container */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-[2rem]">
          <h3 className="text-xl font-bold text-textDark mb-6">Request Your Priority Appointment</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-textDark mb-1">Full Patient Name *</label>
              <input 
                type="text" 
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="e.g. Rahul Verma"
              />
              {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-textDark mb-1">Contact Phone Number *</label>
                <input 
                  type="tel" 
                  {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit number" } })}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="10-digit mobile number"
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-textDark mb-1">Target Treatment Category</label>
                <select 
                  {...register("treatment")}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="general">General Inspection / Cleaning</option>
                  <option value="rct">Root Canal Therapy</option>
                  <option value="implants">Dental Implants</option>
                  <option value="cosmetic">Smile Makeover / Veneers</option>
                  <option value="ortho">Orthodontics / Aligners</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-textDark mb-1">Preferred Date</label>
                <input 
                  type="date" 
                  {...register("date")}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-textDark mb-1">Preferred Time Block</label>
                <select 
                  {...register("timeBlock")}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:30 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-textDark mb-1">Additional Notes (Optional)</label>
              <textarea 
                rows="3"
                {...register("notes")}
                className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe any active symptoms, structural concerns, or general inquiries..."
              />
            </div>

            <div className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <ShieldAlert size={14} className="text-primary mt-0.5 shrink-0" />
              <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                By submitting this form, you authorize our desk to connect via WhatsApp/Call to confirm your exact slot. Your records are strictly kept private.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-white font-medium text-sm rounded-xl hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              {isSubmitting ? 'Transmitting Data Array...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}