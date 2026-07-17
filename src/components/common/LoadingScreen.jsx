import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-bgLight z-[100] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-2xl border-4 border-slate-200 border-t-primary animate-spin" />
        <div className="absolute font-bold text-xs text-primary">AM</div>
      </div>
      <p className="text-xs tracking-widest uppercase font-medium text-slate-400 animate-pulse">
        Optimizing Canvas...
      </p>
    </div>
  );
}