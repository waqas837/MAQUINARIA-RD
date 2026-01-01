'use client';

import React from 'react';
import { ChangeOrderStatus } from '../types';

const ChangeOrderTable = ({ data, onApprove, onReject }) => {
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-8 py-5 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Identifier</th>
              <th className="px-8 py-5 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Title & Description</th>
              <th className="px-8 py-5 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Cost Impact</th>
              <th className="px-8 py-5 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Status</th>
              <th className="px-8 py-5 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-4 bg-slate-50 rounded-full">
                       <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="text-slate-500 font-medium">No active change orders found</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="group hover:bg-slate-50/80 transition-all duration-150">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-bold text-slate-400 mb-1">{item.coNumber}</span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide italic">{item.date}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="max-w-md">
                      <div className="font-bold text-slate-900 mb-0.5 group-hover:text-yellow-600 transition-colors">{item.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.scope}</div>
                      <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        {item.requestedBy}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-extrabold text-slate-900">{formatCurrency(item.cost)}</span>
                      <span className={`text-[10px] font-bold ${item.scheduleImpact > 0 ? 'text-amber-600' : 'text-slate-400'}`}>
                        {item.scheduleImpact} days delay
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border transition-all ${
                      item.status === ChangeOrderStatus.APPROVED 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : item.status === ChangeOrderStatus.REJECTED 
                        ? 'bg-rose-50 text-rose-700 border-rose-100' 
                        : 'bg-amber-50 text-amber-700 border-amber-100 animate-pulse-subtle'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        item.status === ChangeOrderStatus.APPROVED ? 'bg-emerald-500' : 
                        item.status === ChangeOrderStatus.REJECTED ? 'bg-rose-500' : 'bg-amber-500'
                      }`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    {item.status === ChangeOrderStatus.PENDING ? (
                      <div className="flex justify-end space-x-3">
                        <button 
                          onClick={() => onApprove(item.id)}
                          className="flex items-center px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-xl hover:bg-yellow-500 hover:text-slate-900 hover:shadow-lg hover:shadow-yellow-500/30 transition-all active:scale-95"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => onReject(item.id)}
                          className="px-4 py-2 text-xs font-bold text-slate-500 bg-slate-100 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-all border border-transparent hover:border-rose-100 active:scale-95"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(0.98); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ChangeOrderTable;

