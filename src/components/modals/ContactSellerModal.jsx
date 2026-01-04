'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const ContactSellerModal = ({ isOpen, onClose, equipment }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted || !equipment) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Seller:', formData, equipment);
    // Handle form submission here
    onClose();
  };

  // Map categories to images
  const categoryImages = {
    'excavators': '/machinery-images/excavators.b19c4bba.webp',
    'wheel-loaders': '/machinery-images/wheel-loaders.b6bfac38.webp',
    'skid-steers': '/machinery-images/skid-steer-loaders.a630fec7.webp',
    'backhoes': '/machinery-images/backhoe-loaders.c7382a6d.webp',
    'bulldozers': '/machinery-images/bulldozers.a78608c2.webp',
    'forklifts': '/machinery-images/forklifts.db350043.webp',
    'track-loaders': '/machinery-images/track-loaders.7a4b0c1d.webp',
    'motor-graders': '/machinery-images/motor-graders.8b5c1d2e.webp',
  };

  const equipmentImage = categoryImages[equipment.category] || '/machinery-images/excavators.b19c4bba.webp';
  const monthlyPayment = equipment.price ? Math.round((equipment.price * 0.05) / 12) : 0;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 my-8 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Contact Seller</h2>
          <p className="text-sm text-slate-600">
            Or call us at{' '}
            <a href="tel:+18005551234" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              (800) 555-1234
            </a>
          </p>
        </div>

        {/* Equipment Info */}
        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex gap-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
              <Image
                src={equipmentImage}
                alt={equipment.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{equipment.title}</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {equipment.hours && (
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    {equipment.hours.toLocaleString()} hours
                  </li>
                )}
                {equipment.price && (
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Asking price: ${equipment.price.toLocaleString()}
                  </li>
                )}
                {equipment.price && (
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Est. payment: ${monthlyPayment.toLocaleString()}/mo
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
          >
            Submit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-slate-500 leading-relaxed">
          By clicking, you authorize MAQUINARIA RD and its sellers/partners to contact you by text/calls which may include marketing and be by autodialer. You also agree to our{' '}
          <a href="/privacy" className="text-yellow-600 hover:underline font-semibold">Privacy Notice</a>.
          {' '}Consent is not required to purchase goods/services.
        </p>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ContactSellerModal;

