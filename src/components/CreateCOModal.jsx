'use client';

import React, { useState } from 'react';
import { ChangeOrderStatus } from '../types';

const CreateCOModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    scope: '',
    cost: '',
    scheduleImpact: '',
    requestedBy: 'Alex Foreman'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      scope: formData.scope,
      cost: parseFloat(formData.cost) || 0,
      scheduleImpact: parseInt(formData.scheduleImpact) || 0,
      requestedBy: formData.requestedBy,
      status: ChangeOrderStatus.PENDING,
      date: new Date().toISOString().split('T')[0]
    });
    setFormData({ title: '', scope: '', cost: '', scheduleImpact: '', requestedBy: 'Alex Foreman' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 className="text-lg font-bold text-slate-900">Create New Change Order</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Title</label>
            <input 
              required
              type="text"
              placeholder="e.g. Electrical Panel Relocation"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Scope of Work</label>
            <textarea 
              required
              rows={3}
              placeholder="Detailed description of the changes required..."
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              value={formData.scope}
              onChange={(e) => setFormData({...formData, scope: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Cost Impact ($)</label>
              <input 
                required
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                value={formData.cost}
                onChange={(e) => setFormData({...formData, cost: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Schedule Impact (Days)</label>
              <input 
                required
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                value={formData.scheduleImpact}
                onChange={(e) => setFormData({...formData, scheduleImpact: e.target.value})}
              />
            </div>
          </div>
          
          <div className="pt-4 flex space-x-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-lg bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/20"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCOModal;

