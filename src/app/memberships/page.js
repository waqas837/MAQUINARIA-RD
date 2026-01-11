'use client';

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ChevronDown, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MembershipsPage() {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (groupName) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const membershipGroups = [
    {
      name: 'Operators',
      description: 'Find Better Jobs. Get Recognized. Build Your Career.',
      tiers: [
        {
          name: 'Operator Basic',
          price: 'Free',
          description: 'Start your professional presence.',
          features: [
            'Public operator profile',
            'Machines you operate',
            'Years of experience',
            'Access to job listings',
            'Apply directly to employers'
          ],
          bestFor: 'Operators starting out or exploring opportunities'
        },
        {
          name: 'Operator Pro',
          price: 'RD $500 / month',
          description: 'Stand out and get hired faster.',
          features: [
            'Everything in Basic, plus:',
            'Verified Operator badge',
            'Featured profile in search results',
            'Priority visibility to employers',
            'Skills and certification tags',
            'Curriculum build',
            'Upload licenses and certificates',
            'Personalized job alerts',
            'Discounts on trainings and certifications',
            'Access to raffles, merchandise, and digital resources'
          ],
          bestFor: 'Operators actively seeking better opportunities'
        },
        {
          name: 'Operator Elite',
          price: 'RD $1,000 / month',
          description: 'Accelerate your career.',
          features: [
            'Everything in Pro, plus:',
            'Direct introductions to employers',
            'Recommendation score and reviews',
            'Priority placement in urgent jobs',
            'Access to exclusive job offers',
            'Free or discounted entry to operator events',
            'Monthly performance insights'
          ],
          bestFor: 'Experienced operators who want premium opportunities'
        }
      ]
    },
    {
      name: 'Employers & Operations Managers',
      description: 'Hire Faster. Reduce Downtime. Build Reliable Teams.',
      tiers: [
        {
          name: 'Employer Basic',
          price: 'Free',
          description: 'Post jobs and receive applications.',
          features: [
            'Company profile',
            'Up to 2 job postings',
            'Receive operator applications',
            'Access to basic operator profiles'
          ],
          bestFor: 'Companies starting to hire operators'
        },
        {
          name: 'Employer Pro',
          price: 'USD $50 / month',
          description: 'Your hiring command center.',
          features: [
            'Everything in Basic, plus:',
            'Unlimited job postings',
            'Access to verified operators',
            'Advanced filters (machine type, experience, location)',
            'Direct contact with operators',
            'Hiring templates and safety checklists',
            'Promoted job listings'
          ],
          bestFor: 'Companies with ongoing operator needs'
        },
        {
          name: 'Employer Elite',
          price: 'USD $100 / month',
          description: 'White-glove hiring support.',
          features: [
            'Everything in Pro, plus:',
            'Dedicated hiring support from Maquinaria RD',
            'Pre-qualified operator shortlists',
            'Priority response SLA',
            'Background and reference coordination',
            'Bulk hiring campaigns',
            'Featured employer branding'
          ],
          bestFor: 'Large projects and high-volume hiring'
        }
      ]
    },
    {
      name: 'Individual Sellers',
      description: 'Sell Your Equipment Faster and at the Right Price.',
      tiers: [
        {
          name: 'Seller Basic',
          price: 'USD FREE · 10% commission',
          description: 'Simple exposure.',
          features: [
            '1 active listing',
            'Standard marketplace visibility',
            'Lead notifications',
            'Seller dashboard'
          ],
          bestFor: 'Individual sellers with occasional listings'
        },
        {
          name: 'Seller Pro',
          price: 'USD $50 / month · 8% commission',
          description: 'More visibility. More support.',
          features: [
            'Everything in Basic, plus:',
            'Up to 3 active listings',
            'Featured placement in category',
            'Price guidance and valuation support',
            'Lead qualification',
            'Document assistance'
          ],
          bestFor: 'Active individual sellers'
        },
        {
          name: 'Seller Elite',
          price: 'USD $100 / month · 6% commission',
          description: 'Hands-off selling.',
          features: [
            'Everything in Pro, plus:',
            'Unlimited listings',
            'Priority marketplace placement',
            'Inspection coordination',
            'Negotiation support',
            'Closing and delivery assistance',
            'Custom marketing assets'
          ],
          bestFor: 'High-volume individual sellers'
        }
      ]
    },
    {
      name: 'Dealerships',
      description: 'Increase Inventory Visibility. Close More Deals.',
      tiers: [
        {
          name: 'Dealer Basic',
          price: 'USD $600 / month · 0% commission',
          description: 'Predictable costs. Full control.',
          features: [
            'Up to 10 active listings',
            'Official Dealer badge',
            'Lead routing',
            'Analytics dashboard'
          ],
          bestFor: 'Small to medium dealerships'
        },
        {
          name: 'Dealer Pro',
          price: 'USD $800 / month',
          description: 'Boost your reach.',
          features: [
            'Everything in Basic, plus:',
            'Featured placement across the site',
            'Advanced performance analytics',
            'Social media promotion',
            'Priority lead delivery'
          ],
          bestFor: 'Growing dealerships'
        },
        {
          name: 'Dealer Elite',
          price: 'USD $1,200 / month',
          description: 'Maximum exposure and support.',
          features: [
            'Everything in Pro, plus:',
            'Unlimited listings',
            'Homepage banner placements',
            'Dedicated account manager',
            'Email and SMS campaigns'
          ],
          bestFor: 'Large dealerships and franchises'
        }
      ]
    },
    {
      name: 'Construction Companies (Fleet)',
      description: 'Turn Idle Equipment Into Capital.',
      tiers: [
        {
          name: 'Fleet Partner',
          price: 'FREE · 10% commission',
          description: 'Efficient fleet sales.',
          features: [
            'Unlimited listings',
            'Fleet valuation support',
            'Lead qualification',
            'Company profile'
          ],
          bestFor: 'Construction companies with occasional sales'
        },
        {
          name: 'Fleet Pro',
          price: 'USD $300 / month · 6% commission',
          description: 'Faster sales, higher certainty.',
          features: [
            'Everything in Partner, plus:',
            'Inspection coordination',
            'Negotiation support',
            'Premium placement',
            'Fleet performance reports'
          ],
          bestFor: 'Active fleet management'
        },
        {
          name: 'Enterprise Partner',
          price: 'USD $600 / month · 2.5% commission',
          description: 'Full-service fleet liquidation.',
          features: [
            'Everything in Pro, plus:',
            'Dedicated account manager',
            'Bulk sale and liquidation events',
            'Quarterly market intelligence',
            'Priority service level agreements'
          ],
          bestFor: 'Large enterprises and major fleet operators'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
            MAQUINARIA RD
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-2 max-w-3xl mx-auto">
            One Platform for Machines, Operators, and Companies That Build the Dominican Republic
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Maquinaria RD is the leading marketplace and operational platform for heavy equipment and certified operators in the Dominican Republic. We connect buyers, sellers, dealers, construction companies, operators, and operations managers in one professional, trusted ecosystem.
          </p>
        </div>

        {/* Membership Groups */}
        <div className="space-y-6">
          {membershipGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleGroup(group.name)}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{group.name}</h2>
                  <p className="text-slate-600">{group.description}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-slate-600 transition-transform ${
                    openGroups[group.name] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openGroups[group.name] && (
                <div className="border-t border-slate-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {group.tiers.map((tier, tierIndex) => (
                      <div
                        key={tierIndex}
                        className={`rounded-xl border-2 p-6 ${
                          tierIndex === 1
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-extrabold text-slate-900 mb-2">{tier.name}</h3>
                          <p className="text-2xl font-extrabold text-yellow-600 mb-2">{tier.price}</p>
                          <p className="text-sm text-slate-600">{tier.description}</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-slate-700 mb-2">What you get:</p>
                          <ul className="space-y-2">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-slate-200">
                          <p className="text-xs text-slate-500 mb-4">
                            <span className="font-semibold">Best for:</span> {tier.bestFor}
                          </p>
                          <button className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all">
                            Get Started
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-yellow-50 mb-6 max-w-2xl mx-auto">
            Choose your plan and start moving equipment, hiring operators, and closing deals with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-lg">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all border-2 border-white">
              Contact Sales
            </button>
            <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all border-2 border-white">
              Schedule a Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
