'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { MapPin, Clock, DollarSign } from 'lucide-react';

export default function PostJobPage() {
  const [showPostModal, setShowPostModal] = useState(false);

  // Sample jobs data
  const jobs = [
    {
      id: 1,
      title: 'Excavator Operator Needed',
      company: 'Construction Co. DR',
      location: 'Santo Domingo',
      duration: '3 months',
      rate: '$25/hour',
      posted: '2 days ago',
      machines: ['Excavator', 'Bulldozer']
    },
    {
      id: 2,
      title: 'Wheel Loader Operator',
      company: 'Mining Solutions',
      location: 'Santiago',
      duration: '6 months',
      rate: '$30/hour',
      posted: '5 days ago',
      machines: ['Wheel Loader', 'Skid Steer']
    },
    {
      id: 3,
      title: 'Backhoe Operator - Urgent',
      company: 'Infrastructure Pro',
      location: 'La Romana',
      duration: '1 month',
      rate: '$28/hour',
      posted: '1 day ago',
      machines: ['Backhoe', 'Telehandler']
    },
  ];

  const categories = [
    "All Jobs",
    "Excavator Jobs",
    "Bulldozer Jobs",
    "Wheel Loader Jobs",
    "Backhoe Jobs",
    "Skid Steer Jobs"
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
                Post a Job
              </h1>
              <p className="text-lg text-slate-600">
                Browse available job postings for operators
              </p>
            </div>
            <button
              onClick={() => setShowPostModal(true)}
              className="px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 whitespace-nowrap"
            >
              Post a job
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
                placeholder="Search jobs..."
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Locations</option>
                <option>Santo Domingo</option>
                <option>Santiago</option>
                <option>La Romana</option>
                <option>Punta Cana</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Rate</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Rates</option>
                <option>Under $20/hour</option>
                <option>$20 - $30/hour</option>
                <option>Over $30/hour</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/work/post-job/${job.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-slate-600 mb-1">{job.company}</p>
                <p className="text-xs text-slate-500">Posted {job.posted}</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.rate}</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-700 mb-2">Machines Required:</p>
                <div className="flex flex-wrap gap-2">
                  {job.machines.map((machine, i) => (
                    <span key={i} className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded font-semibold">
                      {machine}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-semibold text-yellow-600">View Details →</span>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
            Load More Jobs
          </button>
        </div>
      </main>

      {/* Post Job Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowPostModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPostModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Post a Job</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Machines Required</label>
                <input type="text" placeholder="e.g., Excavator, Bulldozer" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Duration</label>
                <input type="text" placeholder="e.g., 3 months" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Rate per Hour</label>
                <input type="number" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all">
                Post Job
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
