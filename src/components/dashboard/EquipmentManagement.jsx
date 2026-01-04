'use client';

import Link from 'next/link';
import Image from 'next/image';

const EquipmentManagement = () => {
  // Sample equipment with inquiries
  const equipment = [
    {
      id: 1,
      title: 'Caterpillar 320D Excavator',
      price: 125000,
      inquiries: 3,
      status: 'active',
      image: '/machinery-images/excavators.b19c4bba.webp'
    },
    {
      id: 2,
      title: 'John Deere 872GP Wheel Loader',
      price: 97500,
      inquiries: 2,
      status: 'active',
      image: '/machinery-images/wheel-loaders.b6bfac38.webp'
    },
    {
      id: 3,
      title: 'Bobcat S570 Skid Steer',
      price: 35000,
      inquiries: 1,
      status: 'active',
      image: '/machinery-images/skid-steer-loaders.a630fec7.webp'
    },
    {
      id: 4,
      title: 'Komatsu PC210LC-10 Excavator',
      price: 47000,
      inquiries: 0,
      status: 'pending',
      image: '/machinery-images/excavators.b19c4bba.webp'
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900">Your Equipment Listings</h3>
        <Link
          href="/sell"
          className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-600 transition-all"
        >
          + Add New Listing
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
          >
            <Link href={`/buy/${item.id}`}>
              <div className="relative h-48 bg-slate-100 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain max-w-full max-h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {item.status === 'active' ? 'Active' : 'Pending'}
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-6">
              <Link href={`/buy/${item.id}`}>
                <h4 className="font-bold text-slate-900 mb-2 hover:text-yellow-600 transition-colors">
                  {item.title}
                </h4>
              </Link>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-extrabold text-slate-900">
                  ${item.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-1 text-sm text-slate-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>{item.inquiries} inquiries</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/buy/${item.id}`}
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all text-center"
                >
                  View
                </Link>
                <button className="flex-1 px-4 py-2 rounded-lg bg-yellow-500 text-slate-900 font-semibold text-sm hover:bg-yellow-600 transition-all">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentManagement;

