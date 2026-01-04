'use client';

import { useState } from 'react';
import Link from 'next/link';

const SavedSearches = () => {
  const [searches, setSearches] = useState([
    {
      id: 1,
      name: 'Excavators under $100k',
      filters: {
        category: 'Excavators',
        maxPrice: 100000,
        condition: 'Excellent'
      },
      results: 12,
      lastChecked: '2026-01-15'
    },
    {
      id: 2,
      name: 'Caterpillar Equipment',
      filters: {
        brand: 'Caterpillar',
        category: 'All'
      },
      results: 8,
      lastChecked: '2026-01-14'
    },
    {
      id: 3,
      name: 'Wheel Loaders in Santiago',
      filters: {
        category: 'Wheel Loaders',
        location: 'Santiago'
      },
      results: 5,
      lastChecked: '2026-01-13'
    },
  ]);

  const handleDelete = (id) => {
    setSearches(searches.filter(search => search.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900">Saved Searches</h3>
        <Link
          href="/buy"
          className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-all text-sm"
        >
          + New Search
        </Link>
      </div>

      {searches.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl">
          <p className="text-slate-500 mb-4">No saved searches yet</p>
          <Link
            href="/buy"
            className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-all"
          >
            Start Searching
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {searches.map((search) => (
            <div
              key={search.id}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-2">{search.name}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {Object.entries(search.filters).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-slate-700 border border-slate-200"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold">{search.results}</span> results • Last checked: {search.lastChecked}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    href={`/buy?${new URLSearchParams(search.filters).toString()}`}
                    className="px-4 py-2 rounded-lg bg-yellow-500 text-slate-900 text-sm font-semibold hover:bg-yellow-600 transition-all"
                  >
                    View Results
                  </Link>
                  <button
                    onClick={() => handleDelete(search.id)}
                    className="px-4 py-2 rounded-lg bg-rose-100 text-rose-700 text-sm font-semibold hover:bg-rose-200 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedSearches;

