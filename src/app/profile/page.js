'use client';

import { useState } from 'react';
import { Settings, Search, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SavedSearches from '@/components/profile/SavedSearches';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('settings');

  const [profileData, setProfileData] = useState({
    name: 'John Martinez',
    email: 'john.martinez@email.com',
    phone: '+1 (809) 555-0123',
    userType: 'buyer',
    location: 'Santo Domingo',
    company: '',
    notifications: {
      email: true,
      sms: false,
      newListings: true,
      priceDrops: true,
      inquiries: true
    }
  });

  const tabs = [
    { id: 'settings', label: 'Account Settings', icon: Settings },
    { id: 'searches', label: 'Saved Searches', icon: Search },
    { id: 'alerts', label: 'Alerts', icon: Bell },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', profileData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">My Profile</h1>
          <p className="text-lg text-slate-600">Manage your account settings and preferences</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          {/* Tabs */}
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
                {tab.icon && <tab.icon className="w-4 h-4 mr-2 inline" />}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'settings' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                      />
                    </div>
                    {profileData.userType === 'seller' && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          value={profileData.company}
                          onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    {Object.entries(profileData.notifications).map(([key, value]) => (
                      <label key={key} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                          <div className="font-semibold text-slate-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="text-sm text-slate-500">Receive notifications for {key}</div>
                        </div>
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setProfileData({
                            ...profileData,
                            notifications: {...profileData.notifications, [key]: e.target.checked}
                          })}
                          className="w-5 h-5 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'searches' && <SavedSearches />}

            {activeTab === 'alerts' && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Inventory Alerts</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">New Excavators under $100k</div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Active</span>
                    </div>
                    <div className="text-sm text-slate-600 mb-3">Get notified when new excavators under $100,000 are listed</div>
                    <button className="px-4 py-2 rounded-lg bg-rose-100 text-rose-700 text-sm font-semibold hover:bg-rose-200 transition-all">
                      Delete Alert
                    </button>
                  </div>
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">Caterpillar Equipment</div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Active</span>
                    </div>
                    <div className="text-sm text-slate-600 mb-3">Notify me when new Caterpillar equipment is listed</div>
                    <button className="px-4 py-2 rounded-lg bg-rose-100 text-rose-700 text-sm font-semibold hover:bg-rose-200 transition-all">
                      Delete Alert
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

