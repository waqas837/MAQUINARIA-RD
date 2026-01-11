'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const CategoryDropdown = () => {
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dropdownRef = useRef(null);

  const categories = useMemo(() => [
    { value: '', labelKey: 'common.allCategories', available: true },
    { value: 'excavators', labelKey: 'categories.excavators', available: true },
    { value: 'bulldozers', labelKey: 'categories.bulldozers', available: true },
    { value: 'skid-steers', labelKey: 'categories.skidSteers', available: true },
    { value: 'wheel-loaders', labelKey: 'categories.wheelLoaders', available: true },
    { value: 'motor-graders', labelKey: 'categories.motorGraders', available: true },
    { value: 'backhoes', labelKey: 'categories.backhoeLoaders', available: true },
    { value: 'bucket-trucks', labelKey: 'categories.bucketTrucks', available: true },
    { value: 'telehandlers', labelKey: 'categories.telehandlers', available: true },
    { value: 'service-trucks', labelKey: 'categories.serviceTrucks', available: true },
    { value: 'forklifts', labelKey: 'categories.forklifts', available: true },
    { value: 'lifts', labelKey: 'categories.lifts', available: true },
    { value: 'forestry', labelKey: 'categories.forestry', available: true },
    { value: 'dump-trucks', labelKey: 'categories.dumpTrucks', available: false },
    { value: 'cranes', labelKey: 'categories.cranes', available: false },
    { value: 'compactors', labelKey: 'categories.compactors', available: false },
    { value: 'pavers', labelKey: 'categories.pavers', available: false },
    { value: 'generators', labelKey: 'categories.generators', available: false },
    { value: 'trailers', labelKey: 'categories.trailers', available: false },
    { value: 'articulated-trucks', labelKey: 'categories.articulatedTrucks', available: false },
  ], []);

  const getCategoryLabel = (category) => t(category.labelKey);

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
    setSelectedCategory(category.value);
    setIsOpen(false);
  };

  const selectedCategoryLabel = selectedCategory 
    ? getCategoryLabel(categories.find(c => c.value === selectedCategory) || categories[0])
    : getCategoryLabel(categories[0]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer flex items-center justify-between min-w-[140px] sm:min-w-[160px] hover:bg-slate-50 rounded-lg transition-colors"
      >
        <span className="font-semibold">{selectedCategoryLabel}</span>
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
                  selectedCategory === category.value
                    ? 'bg-yellow-50 text-yellow-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base">{getCategoryLabel(category)}</span>
                  {selectedCategory === category.value && (
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

