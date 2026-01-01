import Navbar from '@/components/Navbar';
import Image from 'next/image';

export const metadata = {
  title: "About Us - MAQUINARIA RD",
  description: "Learn about MAQUINARIA RD - El mercado de las maquinarias",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            About MAQUINARIA RD
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            El mercado de las maquinarias - Connecting buyers and sellers of heavy equipment across the Dominican Republic
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            At MAQUINARIA RD, we're revolutionizing the way heavy equipment is bought and sold in the Dominican Republic. 
            Our platform provides a trusted marketplace where construction companies, contractors, and equipment owners 
            can connect, transact, and grow their businesses.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe in transparency, quality, and building lasting relationships. Every piece of equipment on our 
            platform is verified, and every transaction is backed by our commitment to excellence.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Trust & Transparency</h3>
            <p className="text-slate-600">
              Every listing is verified and inspected. We provide detailed reports so you can buy with confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Speed & Efficiency</h3>
            <p className="text-slate-600">
              List your equipment in minutes. Find what you need quickly with our advanced search and filters.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Community First</h3>
            <p className="text-slate-600">
              We're building a community of equipment professionals who value quality, integrity, and mutual success.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-yellow-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-slate-900">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">500+</div>
              <div className="text-sm font-semibold">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">1,200+</div>
              <div className="text-sm font-semibold">Registered Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">350+</div>
              <div className="text-sm font-semibold">Completed Sales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">98%</div>
              <div className="text-sm font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


