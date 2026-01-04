'use client';

import Link from 'next/link';
import { Rocket, ShoppingCart, DollarSign, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: Rocket,
      articles: [
        "How to create an account",
        "How to list equipment",
        "How to search for equipment",
        "Understanding the platform"
      ]
    },
    {
      title: "Buying Equipment",
      icon: ShoppingCart,
      articles: [
        "How to make an offer",
        "Financing options",
        "Inspection process",
        "Shipping and delivery"
      ]
    },
    {
      title: "Selling Equipment",
      icon: DollarSign,
      articles: [
        "Creating effective listings",
        "Setting the right price",
        "Managing inquiries",
        "Closing the sale"
      ]
    },
    {
      title: "Account & Settings",
      icon: Settings,
      articles: [
        "Managing your profile",
        "Notification settings",
        "Payment methods",
        "Privacy settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Help Center</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of MAQUINARIA RD
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 pl-12 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none text-lg"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                {category.icon && <category.icon className="w-10 h-10 text-yellow-500" />}
                <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.articles.map((article, i) => (
                  <li key={i}>
                    <Link href={`/help/${article.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-600 hover:text-yellow-600 transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {article}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-yellow-50 rounded-2xl sm:rounded-3xl border border-yellow-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Still need help?</h2>
          <p className="text-slate-600 mb-6">Our support team is here to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
            >
              Contact Support
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-white transition-all"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


