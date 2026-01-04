'use client';

import { useState } from 'react';
import { ClipboardList, MessageSquare, Tractor } from 'lucide-react';
import Navbar from '@/components/Navbar';
import LeadsPanel from '@/components/dashboard/LeadsPanel';
import ConversationHub from '@/components/dashboard/ConversationHub';
import EquipmentManagement from '@/components/dashboard/EquipmentManagement';
import LoginModal from '@/components/modals/LoginModal';
import SignupModal from '@/components/modals/SignupModal';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('leads');
  const [unreadLeads] = useState(3); // Sample unread leads count
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoggedIn] = useState(false); // In real app, check from auth context
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const tabs = [
    { id: 'leads', label: 'My Leads', icon: ClipboardList, badge: unreadLeads },
    { id: 'conversations', label: 'Conversations', icon: MessageSquare, badge: 2 },
    { id: 'equipment', label: 'Equipment', icon: Tractor, badge: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
            Operator Dashboard
          </h1>
          <p className="text-lg text-slate-600">
            Manage your leads, conversations, and equipment inquiries
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">New Leads</span>
              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-slate-900">12</div>
            <div className="text-xs text-slate-500 mt-1">+3 from last week</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Active Conversations</span>
              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-slate-900">8</div>
            <div className="text-xs text-slate-500 mt-1">2 unread messages</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600">Equipment Listings</span>
              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Tractor className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-slate-900">24</div>
            <div className="text-xs text-slate-500 mt-1">5 pending inquiries</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-wrap border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 sm:flex-none px-6 py-4 font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'text-yellow-600 border-b-2 border-yellow-500 bg-yellow-50/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.icon && <tab.icon className="w-4 h-4 mr-2 inline" />}
                {tab.label}
                {tab.badge > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-yellow-500 text-slate-900 text-[10px] font-bold rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'leads' && (
              <LeadsPanel 
                onSelectLead={setSelectedLead}
                selectedLead={selectedLead}
              />
            )}
            {activeTab === 'conversations' && (
              <ConversationHub 
                selectedLead={selectedLead}
                onSelectLead={setSelectedLead}
              />
            )}
            {activeTab === 'equipment' && (
              <EquipmentManagement />
            )}
          </div>
        </div>
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </div>
  );
}

