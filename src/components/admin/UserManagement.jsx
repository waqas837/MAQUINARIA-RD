'use client';

import { useState } from 'react';

const UserManagement = () => {
  const [filterRole, setFilterRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: 'John Martinez',
      email: 'john.martinez@email.com',
      role: 'buyer',
      status: 'active',
      joinedDate: '2025-11-15',
      listings: 0,
      inquiries: 3
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@email.com',
      role: 'buyer',
      status: 'active',
      joinedDate: '2025-10-20',
      listings: 0,
      inquiries: 2
    },
    {
      id: 3,
      name: 'Construction Solutions Inc.',
      email: 'info@constructionsolutions.com',
      role: 'seller',
      status: 'active',
      joinedDate: '2025-09-10',
      listings: 5,
      inquiries: 12
    },
    {
      id: 4,
      name: 'Heavy Equipment Sales',
      email: 'sales@heavyeq.com',
      role: 'seller',
      status: 'active',
      joinedDate: '2025-08-05',
      listings: 8,
      inquiries: 15
    },
    {
      id: 5,
      name: 'Alex Foreman',
      email: 'alex@maquinaria.rd',
      role: 'operator',
      status: 'active',
      joinedDate: '2025-01-01',
      listings: 0,
      inquiries: 45
    },
  ];

  const filteredUsers = users.filter(user => {
    const roleMatch = filterRole === 'all' || user.role === filterRole;
    const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return roleMatch && searchMatch;
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900">User Management</h3>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-yellow-500 outline-none"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-yellow-500 outline-none"
          >
            <option value="all">All Roles</option>
            <option value="buyer">Buyers</option>
            <option value="seller">Sellers</option>
            <option value="operator">Operators</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">User</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Role</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Joined</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Activity</th>
              <th className="text-left py-3 px-4 text-xs font-extrabold text-slate-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="font-bold text-slate-900">{user.name}</div>
                  <div className="text-xs text-slate-500">{user.email}</div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.role === 'buyer' ? 'bg-blue-100 text-blue-700' :
                    user.role === 'seller' ? 'bg-purple-100 text-purple-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-slate-600">{user.joinedDate}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-slate-600">
                    {user.listings > 0 && <div>{user.listings} listings</div>}
                    {user.inquiries > 0 && <div>{user.inquiries} inquiries</div>}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all">
                      Edit
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-rose-100 text-rose-700 text-xs font-semibold hover:bg-rose-200 transition-all">
                      Suspend
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;

