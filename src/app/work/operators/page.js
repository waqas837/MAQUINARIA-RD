'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { CheckCircle } from 'lucide-react';

export default function OperatorsPage() {
  const [showListModal, setShowListModal] = useState(false);

  // Sample operators data
  const operators = [
    {
      id: 1,
      name: 'Carlos Rodriguez',
      machines: ['Excavator', 'Bulldozer', 'Wheel Loader'],
      experience: '15 years',
      location: 'Santo Domingo',
      rating: 4.9,
      status: 'Elite',
      verified: true
    },
    {
      id: 2,
      name: 'Miguel Santos',
      machines: ['Backhoe', 'Skid Steer', 'Telehandler'],
      experience: '12 years',
      location: 'Santiago',
      rating: 4.8,
      status: 'Pro',
      verified: true
    },
    {
      id: 3,
      name: 'Juan Martinez',
      machines: ['Motor Grader', 'Compactor', 'Forklift'],
      experience: '18 years',
      location: 'La Romana',
      rating: 5.0,
      status: 'Elite',
      verified: true
    },
    {
      id: 4,
      name: 'Pedro Garcia',
      machines: ['Excavator', 'Wheel Loader'],
      experience: '8 years',
      location: 'Punta Cana',
      rating: 4.5,
      status: 'Basic',
      verified: false
    },
  ];

  const categories = [
    "All Operators",
    "Excavator Operators",
    "Bulldozer Operators",
    "Wheel Loader Operators",
    "Backhoe Operators",
    "Skid Steer Operators"
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Operators
              </h1>
              <p className="text-lg text-slate-600">
                Browse certified operators and the machines they operate
              </p>
            </div>
            <button
              onClick={() => setShowListModal(true)}
              className="px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 whitespace-nowrap"
            >
              List your services here
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search operators..."
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Machine Type</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Status</option>
                <option>Elite</option>
                <option>Pro</option>
                <option>Basic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Locations</option>
                <option>Santo Domingo</option>
                <option>Santiago</option>
                <option>La Romana</option>
                <option>Punta Cana</option>
              </select>
            </div>
          </div>
        </div>

        {/* Operators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {operators.map((operator) => (
            <Link
              key={operator.id}
              href={`/work/operators/${operator.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-yellow-600">{operator.name.split(' ').map(n => n[0]).join('')}</span>
                  {operator.verified && (
                    <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{operator.name}</h3>
                  <p className="text-sm text-slate-600">{operator.experience} experience</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  operator.status === 'Elite' ? 'bg-yellow-500 text-slate-900' : 
                  operator.status === 'Pro' ? 'bg-blue-500 text-white' : 
                  'bg-slate-200 text-slate-700'
                }`}>
                  {operator.status}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">Machines:</p>
                <div className="flex flex-wrap gap-2">
                  {operator.machines.map((machine, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                      {machine}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 font-bold">{operator.rating}</span>
                  <span className="text-slate-400">★</span>
                  <span className="text-xs text-slate-500 ml-2">{operator.location}</span>
                </div>
                <span className="text-xs font-semibold text-yellow-600">View Profile →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
            Load More Operators
          </button>
        </div>
      </main>

      {/* List Services Modal */}
      {showListModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowListModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowListModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">List Your Services</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Machines You Operate</label>
                <input type="text" placeholder="e.g., Excavator, Bulldozer, Wheel Loader" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Years of Experience</label>
                <input type="number" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all">
                Submit Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
