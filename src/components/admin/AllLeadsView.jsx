'use client';

import { useState } from 'react';

const AllLeadsView = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterOperator, setFilterOperator] = useState('all');

  const allLeads = [
    {
      id: 1,
      buyerName: 'John Martinez',
      buyerEmail: 'john.martinez@email.com',
      equipment: 'Caterpillar 320D Excavator',
      operator: 'Alex Foreman',
      status: 'new',
      date: '2026-01-15',
      time: '10:30 AM'
    },
    {
      id: 2,
      buyerName: 'Maria Rodriguez',
      buyerEmail: 'maria.rodriguez@email.com',
      equipment: 'John Deere 872GP Wheel Loader',
      operator: 'Sarah Johnson',
      status: 'contacted',
      date: '2026-01-14',
      time: '2:15 PM'
    },
    {
      id: 3,
      buyerName: 'Carlos Sanchez',
      buyerEmail: 'carlos.sanchez@email.com',
      equipment: 'Bobcat S570 Skid Steer',
      operator: 'Alex Foreman',
      status: 'new',
      date: '2026-01-15',
      time: '9:00 AM'
    },
    {
      id: 4,
      buyerName: 'Ana Garcia',
      buyerEmail: 'ana.garcia@email.com',
      equipment: 'Komatsu PC210LC-10 Excavator',
      operator: 'Mike Davis',
      status: 'contacted',
      date: '2026-01-13',
      time: '4:45 PM'
    },
    {
      id: 5,
      buyerName: 'Roberto Fernandez',
      buyerEmail: 'roberto.fernandez@email.com',
      equipment: 'Volvo EC220E Excavator',
      operator: 'Sarah Johnson',
      status: 'closed',
      date: '2026-01-10',
      time: '11:20 AM'
    },
  ];

  const operators = ['All Operators', 'Alex Foreman', 'Sarah Johnson', 'Mike Davis'];

  const filteredLeads = allLeads.filter(lead => {
    const statusMatch = filterStatus === 'all' || lead.status === filterStatus;
    const operatorMatch = filterOperator === 'all' || lead.operator === filterOperator;
    return statusMatch && operatorMatch;
  });

  const getStatusBadge = (status) => {
    const styles = {
      new: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      contacted: 'bg-blue-100 text-blue-700 border-blue-200',
      closed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    };
    return styles[status] || styles.new;
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900">All Platform Leads</h3>
        <div className="flex flex-wrap gap-2">
          <select
            value={filterOperator}
            onChange={(e) => setFilterOperator(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-yellow-500 outline-none"
          >
            {operators.map((op) => (
              <option key={op} value={op === 'All Operators' ? 'all' : op}>{op}</option>
            ))}
          </select>
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
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Buyer</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Equipment</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Operator</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Date</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="font-bold text-slate-900">{lead.buyerName}</div>
                  <div className="text-xs text-slate-500">{lead.buyerEmail}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="font-semibold text-slate-700">{lead.equipment}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-slate-600">{lead.operator}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-slate-600">
                    <div>{lead.date}</div>
                    <div className="text-xs text-slate-500">{lead.time}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(lead.status)}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="px-3 py-1.5 rounded-lg bg-yellow-500 text-slate-900 text-xs font-semibold hover:bg-yellow-600 transition-all">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLeadsView;

