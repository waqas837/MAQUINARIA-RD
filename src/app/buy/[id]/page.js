'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import SignupModal from '@/components/modals/SignupModal';
import ContactSellerModal from '@/components/modals/ContactSellerModal';

export default function EquipmentDetailPage({ params }) {
  const { id } = use(params);
  const [isLoggedIn] = useState(false); // In real app, check from auth context
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  
  // Sample equipment data - in real app, fetch from API
  const equipmentData = {
    1: {
      id: 1,
      title: "Caterpillar 320D Excavator",
      year: 2018,
      hours: 3200,
      price: 125000,
      location: "Santo Domingo",
      category: "excavators",
      condition: "Excellent",
      description: "Well-maintained Caterpillar 320D Excavator in excellent condition. This machine has been regularly serviced and is ready for immediate use. Perfect for construction projects, excavation work, and general earthmoving operations.",
      specifications: {
        "Engine": "Caterpillar C4.4 ACERT",
        "Horsepower": "138 HP",
        "Operating Weight": "20,200 kg",
        "Bucket Capacity": "0.8 - 1.2 m³",
        "Max Digging Depth": "6.5 m",
        "Max Reach": "10.2 m"
      },
      features: [
        "Air conditioning",
        "Auxiliary hydraulics",
        "Quick coupler",
        "Radio/CD player",
        "Recent service records",
        "New tracks installed 2023"
      ],
      seller: {
        name: "Construction Equipment Solutions",
        rating: 4.8,
        location: "Santo Domingo",
        verified: true
      }
    },
    2: {
      id: 2,
      title: "John Deere 872GP Wheel Loader",
      year: 2019,
      hours: 2800,
      price: 97500,
      location: "Santiago",
      category: "wheel-loaders",
      condition: "Very Good",
      description: "Excellent John Deere 872GP Wheel Loader with low hours. This machine is in very good condition and has been well maintained. Ideal for material handling, loading, and construction applications.",
      specifications: {
        "Engine": "John Deere PowerTech 6068",
        "Horsepower": "200 HP",
        "Operating Weight": "15,800 kg",
        "Bucket Capacity": "2.3 m³",
        "Lift Capacity": "7,500 kg",
        "Max Dump Height": "3.2 m"
      },
      features: [
        "4-wheel drive",
        "Enclosed cab with AC",
        "Tilt steering wheel",
        "Backup alarm",
        "Service records available",
        "Excellent tires"
      ],
      seller: {
        name: "Heavy Equipment Sales",
        rating: 4.9,
        location: "Santiago",
        verified: true
      }
    },
    3: {
      id: 3,
      title: "Komatsu PC210LC-10 Excavator",
      year: 2015,
      hours: 4500,
      price: 47000,
      location: "La Romana",
      category: "excavators",
      condition: "Good",
      description: "Reliable Komatsu PC210LC-10 Excavator in good working condition. This machine has been used for various construction projects and is ready for continued operation.",
      specifications: {
        "Engine": "Komatsu SAA6D107E-1",
        "Horsepower": "140 HP",
        "Operating Weight": "21,500 kg",
        "Bucket Capacity": "0.9 - 1.3 m³",
        "Max Digging Depth": "6.7 m",
        "Max Reach": "10.4 m"
      },
      features: [
        "Air conditioning",
        "Auxiliary hydraulics",
        "Radio",
        "Service history available"
      ],
      seller: {
        name: "Equipment Depot",
        rating: 4.6,
        location: "La Romana",
        verified: true
      }
    },
    4: {
      id: 4,
      title: "Bobcat S570 Skid Steer",
      year: 2020,
      hours: 1200,
      price: 35000,
      location: "Punta Cana",
      category: "skid-steers",
      condition: "Excellent",
      description: "Like-new Bobcat S570 Skid Steer with very low hours. This machine is in excellent condition and has been lightly used. Perfect for landscaping, construction, and material handling.",
      specifications: {
        "Engine": "Kubota V3307",
        "Horsepower": "61 HP",
        "Operating Weight": "3,200 kg",
        "Rated Operating Capacity": "1,400 kg",
        "Lift Height": "3.0 m",
        "Bucket Width": "1.8 m"
      },
      features: [
        "Enclosed cab with AC",
        "Joystick controls",
        "Auxiliary hydraulics",
        "Like-new condition",
        "Full service records",
        "Original owner"
      ],
      seller: {
        name: "Punta Cana Equipment",
        rating: 5.0,
        location: "Punta Cana",
        verified: true
      }
    },
    5: {
      id: 5,
      title: "Case 580N Backhoe Loader",
      year: 2017,
      hours: 3800,
      price: 42000,
      location: "San Cristóbal",
      category: "backhoes",
      condition: "Very Good",
      description: "Well-maintained Case 580N Backhoe Loader in very good condition. This versatile machine is perfect for digging, loading, and material handling applications.",
      specifications: {
        "Engine": "Case 4.5L",
        "Horsepower": "85 HP",
        "Operating Weight": "7,800 kg",
        "Backhoe Digging Depth": "5.5 m",
        "Loader Bucket Capacity": "1.2 m³",
        "Max Lift Capacity": "2,500 kg"
      },
      features: [
        "4-wheel drive",
        "Enclosed cab",
        "Extendable dipper",
        "Auxiliary hydraulics",
        "Service records available"
      ],
      seller: {
        name: "San Cristóbal Machinery",
        rating: 4.7,
        location: "San Cristóbal",
        verified: true
      }
    },
    6: {
      id: 6,
      title: "Volvo EC220E Excavator",
      year: 2019,
      hours: 2500,
      price: 89000,
      location: "Santo Domingo",
      category: "excavators",
      condition: "Excellent",
      description: "Excellent condition Volvo EC220E Excavator with low hours. This premium machine has been meticulously maintained and is ready for immediate use.",
      specifications: {
        "Engine": "Volvo D6E",
        "Horsepower": "162 HP",
        "Operating Weight": "22,000 kg",
        "Bucket Capacity": "0.8 - 1.4 m³",
        "Max Digging Depth": "6.8 m",
        "Max Reach": "10.6 m"
      },
      features: [
        "Climate control cab",
        "Advanced hydraulics",
        "Quick coupler",
        "GPS ready",
        "Full service history",
        "Excellent condition"
      ],
      seller: {
        name: "Premium Equipment Sales",
        rating: 4.9,
        location: "Santo Domingo",
        verified: true
      }
    }
  };

  const equipment = equipmentData[id] || equipmentData[1];
  
  // Map categories to images
  const categoryImages = {
    'excavators': '/machinery-images/excavators.b19c4bba.webp',
    'wheel-loaders': '/machinery-images/wheel-loaders.b6bfac38.webp',
    'skid-steers': '/machinery-images/skid-steer-loaders.a630fec7.webp',
    'backhoes': '/machinery-images/backhoe-loaders.c7382a6d.webp',
    'bulldozers': '/machinery-images/bulldozers.a78608c2.webp',
    'forklifts': '/machinery-images/forklifts.db350043.webp',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <div className="flex items-center space-x-2 text-slate-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/buy" className="hover:text-yellow-600 transition-colors">Buy Equipment</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{equipment.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-slate-100 flex items-center justify-center">
                {categoryImages[equipment.category] ? (
                  <Image
                    src={categoryImages[equipment.category]}
                    alt={equipment.title}
                    width={400}
                    height={400}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    equipment.condition === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
                    equipment.condition === 'Very Good' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {equipment.condition}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Description</h2>
              <p className="text-slate-600 leading-relaxed">{equipment.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">{key}</span>
                    <span className="text-slate-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {equipment.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspection Report */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Inspection Report</h2>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                  ✓ Verified
                </span>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm font-semibold text-slate-600 mb-1">Overall Score</div>
                    <div className="text-3xl font-extrabold text-slate-900">92/100</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm font-semibold text-slate-600 mb-1">Inspection Date</div>
                    <div className="text-lg font-bold text-slate-900">Jan 10, 2026</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm font-semibold text-slate-600 mb-1">Inspector</div>
                    <div className="text-lg font-bold text-slate-900">Certified Inspector</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Inspection Categories</h3>
                  <div className="space-y-3">
                    {[
                      { category: 'Engine & Powertrain', score: 95, status: 'Excellent' },
                      { category: 'Hydraulics', score: 90, status: 'Very Good' },
                      { category: 'Undercarriage', score: 88, status: 'Very Good' },
                      { category: 'Cab & Controls', score: 94, status: 'Excellent' },
                      { category: 'Attachments', score: 92, status: 'Excellent' },
                    ].map((item, index) => (
                      <div key={index} className="border border-slate-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-900">{item.category}</span>
                          <span className="text-sm font-bold text-slate-700">{item.score}/100</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-yellow-500 h-full rounded-full transition-all"
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{item.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">150+ Point Inspection</div>
                      <div className="text-sm text-slate-600">This equipment has undergone a comprehensive 150+ point inspection. Full report available upon request.</div>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all">
                  Download Full Inspection Report (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">
                  ${equipment.price.toLocaleString()}
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <span>{equipment.year}</span>
                  <span>•</span>
                  <span>{equipment.hours.toLocaleString()} hrs</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowLoginModal(true);
                    } else {
                      setShowContactModal(true);
                    }
                  }}
                  className="w-full px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 text-center"
                >
                  Contact Seller
                </button>
                <button className="w-full px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all">
                  Request More Info
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-700">Location</span>
                  <span className="text-sm text-slate-600">{equipment.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Condition</span>
                  <span className={`text-sm font-bold ${
                    equipment.condition === 'Excellent' ? 'text-emerald-700' :
                    equipment.condition === 'Very Good' ? 'text-blue-700' :
                    'text-amber-700'
                  }`}>
                    {equipment.condition}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Seller Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Name</span>
                  <span className="text-sm text-slate-600">{equipment.seller.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-yellow-500">{equipment.seller.rating}</span>
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Location</span>
                  <span className="text-sm text-slate-600">{equipment.seller.location}</span>
                </div>
                {equipment.seller.verified && (
                  <div className="flex items-center space-x-2 pt-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-semibold text-emerald-700">Verified Seller</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
      <ContactSellerModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        equipment={equipment}
      />
    </div>
  );
}

