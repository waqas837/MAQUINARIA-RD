'use client';

import React from 'react';
import { ICONS } from '../constants';

const navItems = [
  { name: 'Overview', icon: ICONS.Overview, active: true },
  { name: 'Change Orders', icon: ICONS.ChangeOrders, active: false },
  { name: 'Approvals', icon: ICONS.Approvals, active: false },
  { name: 'Reports', icon: ICONS.FileText, active: false },
  { name: 'Settings', icon: ICONS.Settings, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#0b1222] h-screen text-slate-400 flex flex-col border-r border-slate-800/50 shadow-2xl z-20">
      <div className="p-8">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-900/40 group-hover:scale-105 transition-transform">
            <svg className="text-slate-900 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight leading-none">MAQUINARIA<span className="text-yellow-500">RD</span></h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">El mercado de las maquinarias</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
              item.active 
              ? 'bg-yellow-500/10 text-yellow-400 font-semibold border border-yellow-500/20' 
              : 'hover:bg-slate-800/40 hover:text-slate-200'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-colors ${item.active ? 'text-yellow-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
            <span className="text-sm">{item.name}</span>
            {item.name === 'Approvals' && (
              <span className="ml-auto bg-amber-500/20 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/20">2</span>
            )}
          </button>
        ))}
      </nav>
      
      <div className="p-4 mx-4 mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="User" 
              className="w-11 h-11 rounded-xl bg-slate-700 ring-2 ring-slate-800 shadow-xl"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0b1222] rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Alex Foreman</p>
            <p className="text-[10px] text-slate-500 font-medium uppercase truncate">Project Executive</p>
          </div>
          <button className="text-slate-500 hover:text-slate-300 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

