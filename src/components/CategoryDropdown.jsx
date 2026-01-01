'use client';

import { useState, useRef, useEffect } from 'react';

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const dropdownRef = useRef(null);

  const categories = [
    { value: '', label: 'All Categories', available: true },
    { value: 'excavators', label: 'Excavators', available: true },
    { value: 'bulldozers', label: 'Bulldozers', available: true },
    { value: 'skid-steers', label: 'Skid Steers', available: true },
    { value: 'wheel-loaders', label: 'Wheel Loaders', available: true },
    { value: 'motor-graders', label: 'Motor Graders', available: true },
    { value: 'backhoes', label: 'Backhoe Loaders', available: true },
    { value: 'bucket-trucks', label: 'Bucket Trucks', available: true },
    { value: 'telehandlers', label: 'Telehandlers', available: true },
    { value: 'service-trucks', label: 'Service Trucks', available: true },
    { value: 'forklifts', label: 'Forklifts', available: true },
    { value: 'lifts', label: 'Lifts', available: true },
    { value: 'forestry', label: 'Forestry Equipment', available: true },
    { value: 'dump-trucks', label: 'Dump Trucks', available: false },
    { value: 'cranes', label: 'Cranes', available: false },
    { value: 'compactors', label: 'Compactors', available: false },
    { value: 'pavers', label: 'Pavers', available: false },
    { value: 'generators', label: 'Generators', available: false },
    { value: 'trailers', label: 'Trailers', available: false },
    { value: 'articulated-trucks', label: 'Articulated Trucks', available: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (category) => {
    setSelectedCategory(category.label);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer flex items-center justify-between min-w-[140px] sm:min-w-[160px] hover:bg-slate-50 rounded-lg transition-colors"
      >
        <span className="font-semibold">{selectedCategory}</span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:right-auto mt-2 bg-white rounded-xl border border-slate-200 shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleSelect(category)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedCategory === category.label
                    ? 'bg-yellow-50 text-yellow-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base">{category.label}</span>
                  {selectedCategory === category.label && (
                    <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;

