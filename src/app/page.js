import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CategoryDropdown from "@/components/CategoryDropdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Buy used equipment
            <span className="block text-yellow-500">effortlessly</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Find the perfect heavy equipment for your business. Browse thousands of verified listings from trusted sellers.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 p-1.5 sm:p-2">
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by equipment type, brand, or model..."
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 bg-transparent border-none outline-none focus:ring-0"
                  />
                </div>
                <div className="flex gap-2 sm:border-l sm:border-slate-200 sm:pl-2">
                  <div className="hidden sm:block">
                    <CategoryDropdown />
                  </div>
                  <Link
                    href="/buy"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-yellow-500 text-slate-900 font-semibold sm:font-bold text-sm sm:text-base hover:bg-yellow-600 transition-all shadow-md shadow-yellow-500/20 active:scale-95 whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search</span>
                  </Link>
                </div>
              </form>
            </div>
            
            {/* Quick Search Tags */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Popular searches:</span>
              {['Caterpillar', 'John Deere', 'Komatsu', 'Bobcat', 'Under $50k'].map((tag) => (
                <Link
                  key={tag}
                  href={`/buy?search=${tag.toLowerCase()}`}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Browse by Category Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Browse by Category</h3>
            <Link 
              href="/buy" 
              className="text-sm sm:text-base font-semibold text-yellow-600 hover:text-yellow-700 transition-colors flex items-center"
            >
              See all
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 sm:gap-3">
            {[
              { name: 'Skid steers', slug: 'skid-steers', image: 'skid-steer-loaders.a630fec7.webp' },
              { name: 'Bulldozers', slug: 'bulldozers', image: 'bulldozers.a78608c2.webp' },
              { name: 'Excavators', slug: 'excavators', image: 'excavators.b19c4bba.webp' },
              { name: 'Track loaders', slug: 'track-loaders', image: 'compact-track-loaders.b49c3306.webp' },
              { name: 'Wheel loaders', slug: 'wheel-loaders', image: 'wheel-loaders.b6bfac38.webp' },
              { name: 'Motor Graders', slug: 'motor-graders', image: 'motor-graders.00e1657a.webp' },
              { name: 'Backhoe loaders', slug: 'backhoes', image: 'backhoe-loaders.c7382a6d.webp' },
              { name: 'Bucket trucks', slug: 'bucket-trucks', image: 'bucket-trucks.8883f191.webp' },
              { name: 'Telehandlers', slug: 'telehandlers', image: 'telehandlers.0dfab854.webp' },
              { name: 'Service trucks', slug: 'service-trucks', image: 'service-trucks.a3cc7c24.webp' },
              { name: 'Forklifts', slug: 'forklifts', image: 'forklifts.db350043.webp' },
              { name: 'Lifts', slug: 'lifts', image: 'lifts.96f74904.webp' },
              { name: 'Forestry', slug: 'forestry', image: 'forestry-equipment.b9e01146.webp' },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/buy?category=${category.slug}`}
                className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all group overflow-hidden"
              >
                <div className="relative w-full h-16 sm:h-20 md:h-24 overflow-hidden bg-slate-50 flex items-center justify-center">
            <Image
                    src={`/machinery-images/${category.image}`}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-contain max-w-[70px] sm:max-w-[80px] md:max-w-[90px] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-1.5 sm:p-2 text-center">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-700 group-hover:text-yellow-600 transition-colors leading-tight">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Features */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-6 sm:mb-10">Buy with Confidence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Full Transparency</h4>
              <p className="text-sm text-slate-600">150+ Point Inspection Reports • Oil Samples • Verified Equipment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">No Hidden Costs</h4>
              <p className="text-sm text-slate-600">No Buyers Premium • Contractor First Financing • All Fees Included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quality Assurance</h4>
              <p className="text-sm text-slate-600">7-Day Delivery • US DOT Certified Shipper • On-Call Logistics Team</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-2xl sm:rounded-3xl border-2 border-yellow-200 shadow-lg p-8 sm:p-12 md:p-16 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Amazing Features Coming Soon
          </h3>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We're constantly working to improve your experience. Here's what's on the horizon:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Advanced Inspection Reports</h4>
              <p className="text-sm text-slate-600">AI-powered condition analysis and detailed inspection documentation</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Instant Financing</h4>
              <p className="text-sm text-slate-600">Get pre-approved financing in minutes with our integrated lending partners</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Operator Dashboard</h4>
              <p className="text-sm text-slate-600">Manage leads, conversations, and equipment inquiries all in one place</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Live Chat Support</h4>
              <p className="text-sm text-slate-600">Real-time messaging between buyers and sellers with instant notifications</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Market Analytics</h4>
              <p className="text-sm text-slate-600">Price trends, market insights, and equipment valuation tools</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-slate-600">Round-the-clock customer support and equipment assistance</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">Buyers</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/buy" className="hover:text-white transition-colors">Find Equipment</Link></li>
                <li><Link href="/finance" className="hover:text-white transition-colors">Finance</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Sellers</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sell" className="hover:text-white transition-colors">Sell Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white transition-colors">Help</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© MAQUINARIA RD {new Date().getFullYear()} • Privacy policy • Terms of service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
