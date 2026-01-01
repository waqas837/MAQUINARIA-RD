import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Buy Equipment - MAQUINARIA RD",
  description: "Browse and buy used heavy equipment",
};

export default function BuyPage() {
  // Sample equipment data
  const equipment = [
    {
      id: 1,
      title: "Caterpillar 320D Excavator",
      year: 2018,
      hours: 3200,
      price: 125000,
      location: "Santo Domingo",
      category: "excavators",
      condition: "Excellent"
    },
    {
      id: 2,
      title: "John Deere 872GP Wheel Loader",
      year: 2019,
      hours: 2800,
      price: 97500,
      location: "Santiago",
      category: "wheel-loaders",
      condition: "Very Good"
    },
    {
      id: 3,
      title: "Komatsu PC210LC-10 Excavator",
      year: 2015,
      hours: 4500,
      price: 47000,
      location: "La Romana",
      category: "excavators",
      condition: "Good"
    },
    {
      id: 4,
      title: "Bobcat S570 Skid Steer",
      year: 2020,
      hours: 1200,
      price: 35000,
      location: "Punta Cana",
      category: "skid-steers",
      condition: "Excellent"
    },
    {
      id: 5,
      title: "Case 580N Backhoe Loader",
      year: 2017,
      hours: 3800,
      price: 42000,
      location: "San Cristóbal",
      category: "backhoes",
      condition: "Very Good"
    },
    {
      id: 6,
      title: "Volvo EC220E Excavator",
      year: 2019,
      hours: 2500,
      price: 89000,
      location: "Santo Domingo",
      category: "excavators",
      condition: "Excellent"
    },
  ];

  // Map categories to images
  const categoryImages = {
    'excavators': '/machinery-images/excavators.b19c4bba.webp',
    'wheel-loaders': '/machinery-images/wheel-loaders.b6bfac38.webp',
    'skid-steers': '/machinery-images/skid-steer-loaders.a630fec7.webp',
    'backhoes': '/machinery-images/backhoe-loaders.c7382a6d.webp',
    'bulldozers': '/machinery-images/bulldozers.a78608c2.webp',
    'forklifts': '/machinery-images/forklifts.db350043.webp',
  };

  const categories = [
    "All Equipment",
    "Excavators",
    "Bulldozers",
    "Skid Steers",
    "Wheel Loaders",
    "Dump Trucks",
    "Forklifts",
    "Backhoes"
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Buy Equipment
          </h1>
          <p className="text-lg text-slate-600">
            Browse our inventory of verified heavy equipment
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Prices</option>
                <option>Under $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $250,000</option>
                <option>Over $250,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none">
                <option>All Locations</option>
                <option>Santo Domingo</option>
                <option>Santiago</option>
                <option>La Romana</option>
                <option>Punta Cana</option>
              </select>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <Link
              key={item.id}
              href={`/buy/${item.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
                {categoryImages[item.category] ? (
                  <Image
                    src={categoryImages[item.category]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.condition === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
                    item.condition === 'Very Good' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {item.condition}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span>{item.year}</span>
                  <span>{item.hours.toLocaleString()} hrs</span>
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-slate-900">
                    ${item.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-yellow-600">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
            Load More Equipment
          </button>
        </div>
      </main>
    </div>
  );
}


