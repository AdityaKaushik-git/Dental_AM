import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-textDark">Invalid Structural Matrix Path</h2>
        <p className="text-sm text-slate-500 max-w-md font-light">
          The page or asset path you requested does not exist or has been shifted across our clinical ecosystem index.
        </p>
        <Link to="/" className="px-6 py-2.5 bg-primary text-white text-xs font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm">
          Return to Hub Matrix
        </Link>
      </div>
    </>
  );
}