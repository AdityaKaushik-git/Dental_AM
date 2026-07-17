import React from 'react';
import SEO from '../components/common/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" />
      <div className="py-16 px-4 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-textDark tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: July 17, 2026</p>
        
        <div className="text-xs sm:text-sm text-slate-600 space-y-4 font-light leading-relaxed">
          <p>
            At A M Dent Dental Solutions, your privacy is a priority. This document outlines how we collect, protect, and handle data within our clinic.
          </p>
          <h3 className="font-bold text-textDark text-base pt-2">1. Patient Medical Records</h3>
          <p>
            All clinical records, 3D intraoral scans, and x-ray matrices are kept secure in our clinical management system, accessible only by authorized staff.
          </p>
          <h3 className="font-bold text-textDark text-base pt-2">2. Scheduling Information</h3>
          <p>
            The names, phone numbers, and time slots shared through our booking system are used solely to coordinate your clinic visits. We never trade or sell your contact details to third-party marketing networks.
          </p>
          <h3 className="font-bold text-textDark text-base pt-2">3. Updates</h3>
          <p>
            We may occasionally update this privacy policy to match new healthcare compliance guidelines.
          </p>
        </div>
      </div>
    </>
  );
}