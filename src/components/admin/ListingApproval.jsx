'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ListingApproval = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Caterpillar 320D Excavator',
      seller: 'Construction Solutions Inc.',
      submittedDate: '2026-01-15',
      price: 125000,
      year: 2018,
      hours: 3200,
      condition: 'Excellent',
      images: ['/machinery-images/excavators.b19c4bba.webp'],
      status: 'pending',
      description: 'Well-maintained excavator with full service history.'
    },
    {
      id: 2,
      title: 'John Deere 872GP Wheel Loader',
      seller: 'Heavy Equipment Sales',
      submittedDate: '2026-01-14',
      price: 97500,
      year: 2019,
      hours: 2800,
      condition: 'Very Good',
      images: ['/machinery-images/wheel-loaders.b6bfac38.webp'],
      status: 'pending',
      description: 'Low hours, excellent condition, ready for work.'
    },
    {
      id: 3,
      title: 'Bobcat S570 Skid Steer',
      seller: 'Punta Cana Equipment',
      submittedDate: '2026-01-13',
      price: 35000,
      year: 2020,
      hours: 1200,
      condition: 'Excellent',
      images: ['/machinery-images/skid-steer-loaders.a630fec7.webp'],
      status: 'pending',
      description: 'Like-new condition, original owner.'
    },
  ]);

  const handleApprove = (id) => {
    setListings(listings.map(listing => 
      listing.id === id ? { ...listing, status: 'approved' } : listing
    ));
  };

  const handleReject = (id) => {
    setListings(listings.map(listing => 
      listing.id === id ? { ...listing, status: 'rejected' } : listing
    ));
  };

  const pendingListings = listings.filter(l => l.status === 'pending');

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900">
          Pending Listings ({pendingListings.length})
        </h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all">
            Export
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {pendingListings.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-xl">
            <p className="text-slate-500">No pending listings</p>
          </div>
        ) : (
          pendingListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="relative h-48 bg-white rounded-xl overflow-hidden">
                    <Image
                      src={listing.images[0]}
                      alt={listing.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{listing.title}</h4>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <span><strong>Seller:</strong> {listing.seller}</span>
                      <span><strong>Submitted:</strong> {listing.submittedDate}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span><strong>Year:</strong> {listing.year}</span>
                      <span><strong>Hours:</strong> {listing.hours.toLocaleString()}</span>
                      <span><strong>Condition:</strong> {listing.condition}</span>
                    </div>
                    <div>
                      <strong>Price:</strong> ${listing.price.toLocaleString()}
                    </div>
                    <div>
                      <strong>Description:</strong> {listing.description}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-4">
                    <button
                      onClick={() => handleApprove(listing.id)}
                      className="w-full px-4 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all"
                    >
                      ✓ Approve
                    </button>
                    <button
                      onClick={() => handleReject(listing.id)}
                      className="w-full px-4 py-3 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-all"
                    >
                      ✕ Reject
                    </button>
                    <Link
                      href={`/buy/${listing.id}`}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListingApproval;

