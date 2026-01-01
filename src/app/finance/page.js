import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Financing - MAQUINARIA RD",
  description: "Equipment financing options for buyers",
};

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Equipment Financing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flexible financing solutions to help you acquire the equipment you need
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Rates</h3>
            <p className="text-slate-600">Get the best financing rates from our trusted partners</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Approval</h3>
            <p className="text-slate-600">Fast application process with decisions in as little as 24 hours</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Terms</h3>
            <p className="text-slate-600">Choose payment terms that work for your business</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply Online", desc: "Fill out our simple application form" },
              { step: "2", title: "Get Pre-Approved", desc: "Receive a decision within 24 hours" },
              { step: "3", title: "Choose Equipment", desc: "Browse and select the equipment you need" },
              { step: "4", title: "Complete Purchase", desc: "Finalize financing and take delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-extrabold text-slate-900">{item.step}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-slate-900">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Apply for financing today and get pre-approved to start shopping for equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              Apply for Financing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


