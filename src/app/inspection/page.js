'use client';

import { useState } from 'react';
import { CheckCircle, Zap, ClipboardCheck, Lock, DollarSign, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function InspectionPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Inspection',
      price: 299,
      description: 'Essential inspection for standard equipment evaluation',
      features: [
        'Visual inspection of equipment',
        'Basic condition assessment',
        '50+ point checklist',
        'Digital inspection report',
        'Photos of key components',
        'Condition rating (Good/Fair/Poor)',
        'Basic recommendations',
        'Report delivery within 48 hours'
      ],
      popular: false,
      color: 'slate'
    },
    {
      id: 'pro',
      name: 'Pro Inspection',
      price: 599,
      description: 'Comprehensive inspection with detailed analysis',
      features: [
        'Everything in Basic',
        '150+ point comprehensive checklist',
        'Detailed condition assessment',
        'Performance testing',
        'Hydraulic system analysis',
        'Engine diagnostics',
        'Undercarriage evaluation',
        'Detailed photo documentation (50+ photos)',
        'Maintenance history review',
        'Estimated remaining lifespan',
        'Priority report delivery (24 hours)',
        'Follow-up consultation call'
      ],
      popular: true,
      color: 'yellow'
    },
    {
      id: 'full',
      name: 'Full Inspection',
      price: 999,
      description: 'Complete professional inspection with certification',
      features: [
        'Everything in Pro',
        '200+ point exhaustive inspection',
        'Certified inspector on-site',
        'Full mechanical inspection',
        'Electronic system diagnostics',
        'Load testing and performance verification',
        'Comprehensive video documentation',
        'Third-party certification document',
        'Insurance-grade report',
        'Market value assessment',
        'Detailed repair cost estimates',
        'Priority report delivery (12 hours)',
        '30-day inspection guarantee',
        'Post-inspection support (30 days)'
      ],
      popular: false,
      color: 'emerald'
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    // Scroll to booking form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
            Professional Equipment Inspection
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-6">
            Get peace of mind with our certified inspection services. Choose the plan that fits your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Certified Inspectors</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Detailed Reports</span>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border-2 shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                plan.popular
                  ? 'border-yellow-500 scale-105 md:scale-110'
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-slate-900 text-center py-2 text-xs font-extrabold">
                  MOST POPULAR
                </div>
              )}
              <div className={`p-6 sm:p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500 ml-2">per inspection</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-yellow-500' : 'text-emerald-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Select {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div id="booking-form" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Request Inspection
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Fill out the form below to schedule your equipment inspection
            </p>

            <form className="space-y-6">
              {/* Selected Plan Display */}
              {selectedPlan && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">
                        Selected Plan: {plans.find(p => p.id === selectedPlan)?.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        ${plans.find(p => p.id === selectedPlan)?.price} per inspection
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(null)}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    placeholder="John Martinez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    placeholder="+1 (809) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Inspection Plan *
                  </label>
                  <select
                    required
                    value={selectedPlan || ''}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select a plan</option>
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - ${plan.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Equipment Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select equipment type</option>
                    <option value="excavator">Excavator</option>
                    <option value="wheel-loader">Wheel Loader</option>
                    <option value="skid-steer">Skid Steer Loader</option>
                    <option value="bulldozer">Bulldozer</option>
                    <option value="backhoe">Backhoe</option>
                    <option value="crane">Crane</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Equipment Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    placeholder="Enter full address where equipment is located"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Equipment Details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    placeholder="Brand, model, year, serial number, or any specific concerns..."
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <label className="text-sm text-slate-700">
                    I agree to the <Link href="/terms" className="text-yellow-600 hover:underline font-semibold">Terms of Service</Link> and <Link href="/privacy" className="text-yellow-600 hover:underline font-semibold">Privacy Policy</Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-yellow-500 text-slate-900 font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/30"
              >
                Submit Inspection Request
              </button>
            </form>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Why Choose Our Inspection Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Certified Inspectors',
                description: 'All our inspectors are certified professionals with years of experience in heavy equipment evaluation.'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description: 'Get your detailed inspection report within 12-48 hours depending on your selected plan.'
              },
              {
                icon: ClipboardCheck,
                title: 'Comprehensive Reports',
                description: 'Receive detailed, professional reports with photos, recommendations, and condition assessments.'
              },
              {
                icon: Lock,
                title: 'Trusted & Reliable',
                description: 'Our inspection reports are trusted by buyers, sellers, and insurance companies nationwide.'
              },
              {
                icon: DollarSign,
                title: 'Fair Pricing',
                description: 'Transparent pricing with no hidden fees. Choose the plan that fits your needs and budget.'
              },
              {
                icon: Phone,
                title: 'Ongoing Support',
                description: 'Get post-inspection support and consultation to help you make informed decisions.'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

