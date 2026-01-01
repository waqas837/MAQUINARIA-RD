'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is MAQUINARIA RD?",
          a: "MAQUINARIA RD is the leading online marketplace for buying and selling heavy equipment in the Dominican Republic. We connect buyers and sellers of construction machinery, agricultural equipment, and industrial vehicles."
        },
        {
          q: "How do I create an account?",
          a: "Click on 'Sign Up' in the top navigation, fill in your information, choose whether you're a buyer or seller, and verify your email address. It only takes a few minutes!"
        },
        {
          q: "Is it free to list equipment?",
          a: "Yes, creating an account and listing your equipment is completely free. We only charge a small commission when a sale is completed through our platform."
        }
      ]
    },
    {
      category: "Buying",
      questions: [
        {
          q: "How do I know the equipment is in good condition?",
          a: "All equipment listed on our platform undergoes a verification process. We provide detailed inspection reports, photos, and condition ratings. You can also request additional inspections before purchase."
        },
        {
          q: "Can I finance equipment purchases?",
          a: "Yes! We offer financing options through our partner lenders. Visit our Finance page to learn more about available options and apply for pre-approval."
        },
        {
          q: "What if the equipment doesn't match the description?",
          a: "We have a buyer protection policy. If equipment doesn't match the listing description, you can request a refund within 7 days of delivery. Contact our support team immediately if you encounter any issues."
        }
      ]
    },
    {
      category: "Selling",
      questions: [
        {
          q: "How do I list my equipment?",
          a: "Click 'Sell Equipment' in the navigation, fill out the equipment submission form with details, photos, and pricing. Our team will review and approve your listing, usually within 24 hours."
        },
        {
          q: "What information do I need to provide?",
          a: "You'll need equipment type, manufacturer, model, year, hours/miles, condition, price, location, photos, and a description. The more details you provide, the better your listing will perform."
        },
        {
          q: "How long does it take to sell?",
          a: "It varies depending on equipment type, price, and market demand. On average, well-priced equipment sells within 2-4 weeks. Our team can help you optimize your listing for faster sales."
        }
      ]
    },
    {
      category: "Payments & Fees",
      questions: [
        {
          q: "What are your fees?",
          a: "Listing is free. We charge a 5% commission on completed sales, which covers platform maintenance, payment processing, and buyer protection services."
        },
        {
          q: "How do I receive payment?",
          a: "Once a sale is completed and the buyer confirms receipt, payment is processed securely through our platform. You can receive funds via bank transfer, typically within 3-5 business days."
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees. The commission is clearly stated upfront, and all transaction costs are transparent. We believe in full transparency with our users."
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">
            Find answers to the most common questions about MAQUINARIA RD
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-yellow-50 px-6 py-4 border-b border-yellow-100">
                <h2 className="text-xl font-bold text-slate-900">{category.category}</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 py-4 bg-slate-50">
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-yellow-50 rounded-2xl border border-yellow-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6">Our support team is ready to help</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}


