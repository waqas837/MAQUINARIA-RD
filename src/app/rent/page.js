'use client';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function RentPage() {
  const [showListModal, setShowListModal] = useState(false);

  // Sample rental equipment data
  const equipment = [
    {
      id: 1,
      title: "Caterpillar 320D Excavator",
      year: 2018,
      hours: 3200,
      price: 1250,
      location: "Santo Domingo",
      category: "excavators",
      available: true,
      availableUntil: "2024-12-31"
    },
    {
      id: 2,
      title: "John Deere 872GP Wheel Loader",
      year: 2019,
      hours: 2800,
      price: 950,
      location: "Santiago",
      category: "wheel-loaders",
      available: true,
      availableUntil: "2024-11-30"
    },
    {
      id: 3,
      title: "Komatsu PC210LC-10 Excavator",
      year: 2015,
      hours: 4500,
      price: 800,
      location: "La Romana",
      category: "excavators",
      available: false,
      availableUntil: null
    },
  ];

  const categoryImages = {
    'excavators': '/machinery-images/excavators.b19c4bba.webp',
    'wheel-loaders': '/machinery-images/wheel-loaders.b6bfac38.webp',
    'skid-steers': '/machinery-images/skid-steer-loaders.a630fec7.webp',
    'backhoes': '/machinery-images/backhoe-loaders.c7382a6d.webp',
  };

  const categories = [
    "All Equipment",
    "Excavators",
    "Bulldozers",
    "Skid Steers",
    "Wheel Loaders",
    "Dump Trucks",
    "Forklifts",
    "Backhoes"
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
                Rent Equipment
              </h1>
              <p className="text-lg text-slate-600">
                Browse our inventory of available equipment for rent
              </p>
            </div>
            <button
              onClick={() => setShowListModal(true)}
              className="px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 whitespace-nowrap"
            >
              List your equipment for rent
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
                placeholder="Search equipment..."
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Prices</option>
                <option>Under $500/day</option>
                <option>$500 - $1,000/day</option>
                <option>$1,000 - $2,000/day</option>
                <option>Over $2,000/day</option>
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

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <Link
              key={item.id}
              href={`/rent/${item.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
                {categoryImages[item.category] ? (
                  <Image
                    src={categoryImages[item.category]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.available ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>{item.year}</span>
                  <span>{item.hours.toLocaleString()} hrs</span>
                  <span>{item.location}</span>
                </div>
                {item.available && item.availableUntil && (
                  <p className="text-xs text-slate-500 mb-2">Available until: {new Date(item.availableUntil).toLocaleDateString()}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-slate-900">
                    ${item.price.toLocaleString()}/day
                  </span>
                  <span className="text-sm font-semibold text-yellow-600">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
            Load More Equipment
          </button>
        </div>
      </main>

      {/* List Equipment Modal */}
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
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">List Your Equipment for Rent</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Equipment Type</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Machine Available or Working?</label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none">
                  <option>Available</option>
                  <option>Working</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Available Until (if working)</label>
                <input type="date" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Daily Rate</label>
                <input type="number" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all">
                Submit Listing
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
