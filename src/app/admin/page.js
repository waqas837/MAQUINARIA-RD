'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ListingApproval from '@/components/admin/ListingApproval';
import AllLeadsView from '@/components/admin/AllLeadsView';
import UserManagement from '@/components/admin/UserManagement';
import ContentManagement from '@/components/admin/ContentManagement';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('listings');

  const tabs = [
    { id: 'listings', label: 'Listing Approval', icon: '📋' },
    { id: 'leads', label: 'All Leads', icon: '📊' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'content', label: 'Content Management', icon: '📝' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Admin Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                Admin Control Panel
              </h1>
              <p className="text-lg text-slate-600">
                Manage platform listings, leads, users, and content
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-yellow-50 rounded-xl border border-yellow-200">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-yellow-700">Admin Mode</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-2">Pending Listings</div>
            <div className="text-3xl font-extrabold text-slate-900">8</div>
            <div className="text-xs text-amber-600 mt-1 font-semibold">Requires review</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-2">Total Leads</div>
            <div className="text-3xl font-extrabold text-slate-900">156</div>
            <div className="text-xs text-slate-500 mt-1">+12 this week</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-2">Active Users</div>
            <div className="text-3xl font-extrabold text-slate-900">1,247</div>
            <div className="text-xs text-slate-500 mt-1">892 buyers, 355 sellers</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-2">Platform Revenue</div>
            <div className="text-3xl font-extrabold text-slate-900">$2.4M</div>
            <div className="text-xs text-slate-500 mt-1">This month</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-wrap border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none px-6 py-4 font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'text-yellow-600 border-b-2 border-yellow-500 bg-yellow-50/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'listings' && <ListingApproval />}
            {activeTab === 'leads' && <AllLeadsView />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'content' && <ContentManagement />}
          </div>
        </div>
      </main>
    </div>
  );
}

