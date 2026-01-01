'use client';

import React from 'react';

const BudgetSummary = ({ stats }) => {
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const percentageUsed = (stats.totalApprovedChanges / stats.originalContract) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Original Contract */}
      <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
          <svg className="w-24 h-24 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
        </div>
        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2">Original Contract</p>
        <div className="flex items-baseline space-x-2">
           <p className="text-3xl font-extrabold text-slate-900">{formatCurrency(stats.originalContract)}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium">Locked baseline value</p>
        </div>
      </div>
      
      {/* Approved Changes */}
      <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
          <svg className="w-24 h-24 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
        <p className="text-yellow-500 text-[11px] font-bold uppercase tracking-[0.15em] mb-2">Approved Changes</p>
        <p className="text-3xl font-extrabold text-slate-900">{formatCurrency(stats.totalApprovedChanges)}</p>
        <div className="mt-4 space-y-2">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-yellow-500 h-full rounded-full transition-all duration-1000" 
              style={{ width: `${Math.min(percentageUsed * 2, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-yellow-500 font-bold">+{percentageUsed.toFixed(2)}% on original</p>
        </div>
      </div>
      
      {/* Revised Total */}
      <div className="bg-yellow-500 p-7 rounded-3xl border border-yellow-600 shadow-xl shadow-yellow-500/20 text-slate-900 relative overflow-hidden transform hover:scale-[1.01] transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
        </div>
        <p className="text-yellow-900 text-[11px] font-bold uppercase tracking-[0.15em] mb-2">Revised Total Cost</p>
        <p className="text-3xl font-extrabold">{formatCurrency(stats.revisedTotal)}</p>
        <div className="mt-4 pt-4 border-t border-yellow-600/30">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 rounded-full bg-yellow-700 animate-pulse"></span>
            <p className="text-xs text-yellow-900 font-medium">Real-time project forecast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;

