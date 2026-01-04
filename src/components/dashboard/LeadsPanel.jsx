'use client';

import { useState } from 'react';

const LeadsPanel = ({ onSelectLead, selectedLead }) => {
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample leads data
  const leads = [
    {
      id: 1,
      name: 'John Martinez',
      email: 'john.martinez@email.com',
      phone: '+1 (809) 555-0123',
      equipment: 'Caterpillar 320D Excavator',
      equipmentId: 1,
      message: 'I\'m interested in this excavator. Can you provide more details about its maintenance history?',
      status: 'new',
      date: '2026-01-15',
      time: '10:30 AM'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@email.com',
      phone: '+1 (809) 555-0124',
      equipment: 'John Deere 872GP Wheel Loader',
      equipmentId: 2,
      message: 'What is the best price you can offer? I\'m ready to purchase this week.',
      status: 'contacted',
      date: '2026-01-14',
      time: '2:15 PM'
    },
    {
      id: 3,
      name: 'Carlos Sanchez',
      email: 'carlos.sanchez@email.com',
      phone: '+1 (809) 555-0125',
      equipment: 'Bobcat S570 Skid Steer',
      equipmentId: 4,
      message: 'Is financing available for this equipment?',
      status: 'new',
      date: '2026-01-15',
      time: '9:00 AM'
    },
    {
      id: 4,
      name: 'Ana Garcia',
      email: 'ana.garcia@email.com',
      phone: '+1 (809) 555-0126',
      equipment: 'Komatsu PC210LC-10 Excavator',
      equipmentId: 3,
      message: 'Can I schedule an inspection?',
      status: 'contacted',
      date: '2026-01-13',
      time: '4:45 PM'
    },
    {
      id: 5,
      name: 'Roberto Fernandez',
      email: 'roberto.fernandez@email.com',
      phone: '+1 (809) 555-0127',
      equipment: 'Volvo EC220E Excavator',
      equipmentId: 6,
      message: 'Thank you for the information. I\'ll get back to you soon.',
      status: 'closed',
      date: '2026-01-10',
      time: '11:20 AM'
    },
    {
      id: 6,
      name: 'Laura Jimenez',
      email: 'laura.jimenez@email.com',
      phone: '+1 (809) 555-0128',
      equipment: 'Case 580N Backhoe Loader',
      equipmentId: 5,
      message: 'What is the delivery time to Santiago?',
      status: 'new',
      date: '2026-01-15',
      time: '1:30 PM'
    },
  ];

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filterStatus);

  const getStatusBadge = (status) => {
    const styles = {
      new: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      contacted: 'bg-blue-100 text-blue-700 border-blue-200',
      closed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    };
    return styles[status] || styles.new;
  };

  const handleStatusChange = (leadId, newStatus) => {
    // In real app, this would update the lead status via API
    console.log(`Lead ${leadId} status changed to ${newStatus}`);
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {['all', 'new', 'contacted', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filterStatus === status
                  ? 'bg-yellow-500 text-slate-900'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        <div className="text-sm text-slate-600">
          <span className="font-semibold">{filteredLeads.length}</span> leads found
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Buyer</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Equipment</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Message</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <div className="text-slate-400">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="font-medium">No leads found</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr 
                  key={lead.id} 
                  className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                    selectedLead?.id === lead.id ? 'bg-yellow-50' : ''
                  }`}
                  onClick={() => onSelectLead(lead)}
                >
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <div className="text-xs text-slate-500">{lead.email}</div>
                      <div className="text-xs text-slate-500">{lead.phone}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-700">{lead.equipment}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm text-slate-600 max-w-md line-clamp-2">{lead.message}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm text-slate-600">
                      <div>{lead.date}</div>
                      <div className="text-xs text-slate-500">{lead.time}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${getStatusBadge(lead.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectLead(lead);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-yellow-500 text-slate-900 text-xs font-semibold hover:bg-yellow-600 transition-all"
                      >
                        Reply
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsPanel;

