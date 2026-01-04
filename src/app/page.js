'use client';

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ClipboardCheck, FlaskConical, Lock, MessageCircle, BarChart3, Clock, Zap, MapPin, TrendingUp, Award, Play, ArrowRight, DollarSign, Truck, Building2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import Navbar from "@/components/Navbar";
import CategoryDropdown from "@/components/CategoryDropdown";

export default function Home() {
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t('home.title')}
            <span className="block text-yellow-500">{t('home.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            {t('home.subtitle')}
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
                    placeholder={t('home.searchPlaceholder')}
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
                    <span>{t('common.search')}</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-4">
            <span className="text-sm text-slate-500 font-semibold">{t('home.popularSearches')}:</span>
            {['Excavators', 'Wheel Loaders', 'Bulldozers', 'Cranes'].map((tag) => (
              <Link
                key={tag}
                href="/buy"
                className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            {t('home.browseByCategory')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: 'Skid Steers', image: '/machinery-images/skid-steer-loaders.a630fec7.webp', href: '/buy?category=skid-steers' },
              { name: 'Bulldozers', image: '/machinery-images/bulldozers.a78608c2.webp', href: '/buy?category=bulldozers' },
              { name: 'Excavators', image: '/machinery-images/excavators.b19c4bba.webp', href: '/buy?category=excavators' },
              { name: 'Track Loaders', image: '/machinery-images/compact-track-loaders.b49c3306.webp', href: '/buy?category=track-loaders' },
              { name: 'Wheel Loaders', image: '/machinery-images/wheel-loaders.b6bfac38.webp', href: '/buy?category=wheel-loaders' },
              { name: 'Motor Graders', image: '/machinery-images/motor-graders.00e1657a.webp', href: '/buy?category=motor-graders' },
              { name: 'Backhoe Loaders', image: '/machinery-images/backhoe-loaders.c7382a6d.webp', href: '/buy?category=backhoes' },
              { name: 'Bucket Trucks', image: '/machinery-images/bucket-trucks.8883f191.webp', href: '/buy?category=bucket-trucks' },
              { name: 'Telehandlers', image: '/machinery-images/telehandlers.0dfab854.webp', href: '/buy?category=telehandlers' },
              { name: 'Service Trucks', image: '/machinery-images/service-trucks.a3cc7c24.webp', href: '/buy?category=service-trucks' },
              { name: 'Forklifts', image: '/machinery-images/forklifts.db350043.webp', href: '/buy?category=forklifts' },
              { name: 'Lifts', image: '/machinery-images/lifts.96f74904.webp', href: '/buy?category=lifts' },
              { name: 'Forestry', image: '/machinery-images/forestry-equipment.b9e01146.webp', href: '/buy?category=forestry' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden hover:border-yellow-300"
              >
                <div className="relative h-32 sm:h-40 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Buy with Confidence */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            {t('home.buyWithConfidence')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { icon: CheckCircle, text: t('home.trustFeatures.verified') },
              { icon: ClipboardCheck, text: t('home.trustFeatures.inspection') },
              { icon: FlaskConical, text: t('home.trustFeatures.oilSamples') },
              { icon: Lock, text: t('home.trustFeatures.secure') },
              { icon: MessageCircle, text: t('home.trustFeatures.support') },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-semibold">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Deals Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Promotional Banner */}
            <div className="lg:col-span-1 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl p-6 sm:p-8 text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                  Special Offer
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Featured Equipment</h3>
                <p className="text-yellow-50 text-sm sm:text-base mb-4">
                  Premium listings with verified inspections and competitive pricing
                </p>
              </div>
              <Link
                href="/buy?featured=true"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-lg"
              >
                View Featured
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Featured Equipment Cards */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Priced to Sell</h3>
                <Link href="/buy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center gap-1">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-slate-600 text-sm mb-4">These items are priced to move fast. Don't miss out on these incredible deals.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: '2016 Komatsu PC210LC-10', price: '$105,000', image: '/machinery-images/excavators.b19c4bba.webp' },
                  { name: '2018 Caterpillar 950M', price: '$89,500', image: '/machinery-images/wheel-loaders.b6bfac38.webp' },
                  { name: '2017 John Deere 772GP', price: '$125,000', image: '/machinery-images/motor-graders.00e1657a.webp' },
                ].map((item, index) => (
                  <Link key={index} href="/buy/1" className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                    <div className="relative h-32 bg-slate-100 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.name}</h4>
                      <p className="text-lg font-extrabold text-yellow-600 mb-3">{item.price}</p>
                      <span className="text-xs text-slate-600 group-hover:text-yellow-600 transition-colors font-semibold">
                        View Details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shop by Price Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Shop by Price
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { range: 'Under $25K', image: '/machinery-images/forklifts.db350043.webp', count: '1,234' },
              { range: 'Under $50K', image: '/machinery-images/skid-steer-loaders.a630fec7.webp', count: '856' },
              { range: 'Under $100K', image: '/machinery-images/service-trucks.a3cc7c24.webp', count: '542' },
              { range: 'Under $250K', image: '/machinery-images/excavators.b19c4bba.webp', count: '328' },
            ].map((priceRange, index) => (
              <Link
                key={index}
                href={`/buy?maxPrice=${priceRange.range.includes('25K') ? '25000' : priceRange.range.includes('50K') ? '50000' : priceRange.range.includes('100K') ? '100000' : '250000'}`}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden hover:border-yellow-300"
              >
                <div className="relative h-32 sm:h-40 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={priceRange.image}
                    alt={priceRange.range}
                    width={100}
                    height={100}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-yellow-600 transition-colors">{priceRange.range}</h4>
                  <p className="text-xs text-slate-500">{priceRange.count} listings</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-yellow-600">View all →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Deals Near Me Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Top Deals Near You</h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
              <MapPin className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">Santo Domingo</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: '2019 Flatbed Trailer', price: '$12,500', image: '/machinery-images/service-trucks.a3cc7c24.webp', location: 'Santo Domingo' },
              { name: '2020 Agricultural Sprayer', price: '$18,900', image: '/machinery-images/forklifts.db350043.webp', location: 'Santiago' },
              { name: '2018 Mini Excavator', price: '$32,000', image: '/machinery-images/excavators.b19c4bba.webp', location: 'La Romana' },
              { name: '2017 Telehandler', price: '$45,000', image: '/machinery-images/telehandlers.0dfab854.webp', location: 'Santo Domingo' },
              { name: '2019 Tractor', price: '$28,500', image: '/machinery-images/wheel-loaders.b6bfac38.webp', location: 'Puerto Plata' },
              { name: '2020 Dump Truck', price: '$67,000', image: '/machinery-images/service-trucks.a3cc7c24.webp', location: 'Santo Domingo' },
            ].map((item, index) => (
              <Link key={index} href="/buy/1" className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                <div className="relative h-40 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                  <p className="text-lg font-extrabold text-yellow-600 mb-3">{item.price}</p>
                  <span className="text-xs text-slate-600 group-hover:text-yellow-600 transition-colors font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/buy" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
              Shop All Deals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Top Manufacturers Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Used Equipment from Top Manufacturers
          </h3>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6">
              {['Caterpillar', 'John Deere', 'Komatsu', 'Bobcat', 'Volvo', 'JCB', 'Case', 'Hitachi', 'Hyundai', 'Doosan', 'Sany', 'Genie', 'Terex', 'Kubota', 'Liebherr', 'XCMG'].map((brand) => (
                <Link
                  key={brand}
                  href={`/buy?manufacturer=${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-yellow-600 transition-colors text-center">
                    {brand}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Lightning Deals Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Lightning Deals</h3>
          </div>
          <p className="text-slate-600 mb-6 max-w-2xl">
            Check out these incredible deals before they're gone! Limited time offers on your favorite equipment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: '2021 Shipping Container', price: '$3,500', image: '/machinery-images/service-trucks.a3cc7c24.webp', discount: '15% OFF' },
              { name: '2019 Scissor Lift', price: '$8,900', image: '/machinery-images/lifts.96f74904.webp', discount: '20% OFF' },
              { name: '2020 Sprayer', price: '$15,000', image: '/machinery-images/forklifts.db350043.webp', discount: '10% OFF' },
              { name: '2018 Excavator', price: '$78,000', image: '/machinery-images/excavators.b19c4bba.webp', discount: '12% OFF' },
              { name: '2019 Tractor', price: '$35,000', image: '/machinery-images/wheel-loaders.b6bfac38.webp', discount: '18% OFF' },
              { name: '2020 Wheel Loader', price: '$92,000', image: '/machinery-images/wheel-loaders.b6bfac38.webp', discount: '8% OFF' },
            ].map((item, index) => (
              <Link key={index} href="/buy/1" className="bg-white rounded-xl border-2 border-yellow-300 shadow-lg hover:shadow-xl transition-all overflow-hidden group relative">
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full">
                    {item.discount}
                  </span>
                </div>
                <div className="relative h-40 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.name}</h4>
                  <p className="text-lg font-extrabold text-yellow-600 mb-3">{item.price}</p>
                  <span className="text-xs text-slate-600 group-hover:text-yellow-600 transition-colors font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/buy?deals=lightning" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
              View All Lightning Deals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Browse by Application Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Browse by Application
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                name: 'Aerial Work', 
                icon: Building2,
                equipment: ['Boom lifts', 'Scissor lifts', 'Telehandlers'],
                image: '/machinery-images/telehandlers.0dfab854.webp'
              },
              { 
                name: 'Earthmoving', 
                icon: Truck,
                equipment: ['Excavators', 'Dozers', 'Loaders', 'Scrapers'],
                image: '/machinery-images/excavators.b19c4bba.webp'
              },
              { 
                name: 'Paving', 
                icon: TrendingUp,
                equipment: ['Asphalt pavers', 'Rollers', 'Milling machines'],
                image: '/machinery-images/motor-graders.00e1657a.webp'
              },
              { 
                name: 'Power Generation', 
                icon: Zap,
                equipment: ['Generators', 'Light towers'],
                image: '/machinery-images/service-trucks.a3cc7c24.webp'
              },
              { 
                name: 'Trailers', 
                icon: Truck,
                equipment: ['Flatbeds', 'Lowboys', 'Utility'],
                image: '/machinery-images/service-trucks.a3cc7c24.webp'
              },
              { 
                name: 'Trucks', 
                icon: Truck,
                equipment: ['Dump trucks', 'Water trucks', 'Service trucks'],
                image: '/machinery-images/service-trucks.a3cc7c24.webp'
              },
            ].map((app, index) => {
              const IconComponent = app.icon;
              return (
                <Link
                  key={index}
                  href={`/buy?application=${app.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden hover:border-yellow-300"
                >
                  <div className="relative h-32 bg-slate-100 flex items-center justify-center">
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={120}
                      height={120}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="w-5 h-5 text-yellow-600" />
                      <h4 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{app.name}</h4>
                    </div>
                    <ul className="space-y-1 mb-3">
                      {app.equipment.map((eq, i) => (
                        <li key={i} className="text-xs text-slate-600">• {eq}</li>
                      ))}
                    </ul>
                    <span className="text-xs font-semibold text-yellow-600">View all →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tried, Tested & Trusted Section */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Tried, Tested, & Trusted
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                MAQUINARIA RD is the Dominican Republic's most trusted marketplace for used heavy equipment. We're backed by a global network of certified inspectors and a secure payment program.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-bold text-slate-900">Excellent</p>
                    <p className="text-xs text-slate-600">Trustpilot Rating</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-bold text-slate-900">BBB Accredited</p>
                    <p className="text-xs text-slate-600">Business</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 bg-slate-200 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                Free Weekly Heavy Equipment Inventory Alerts
              </h3>
              <p className="text-lg text-yellow-50 mb-6">
                Join the over 10,000 buyers who receive our weekly inventory alerts with the latest equipment listings and exclusive deals.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-lg whitespace-nowrap"
                >
                  Sign Me Up
                </button>
              </form>
            </div>
            <div className="relative h-48 sm:h-64 bg-white/10 rounded-xl flex items-center justify-center">
              <Truck className="w-24 h-24 text-white/30" />
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl sm:rounded-3xl border-2 border-yellow-200 p-8 sm:p-12 mb-16 sm:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              {t('home.comingSoon.title')}
            </h3>
            <p className="text-lg sm:text-xl text-slate-600">
              {t('home.comingSoon.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: ClipboardCheck, title: t('home.comingSoon.features.inspection'), desc: 'AI-powered condition analysis and detailed inspection documentation' },
              { icon: MessageCircle, title: t('home.comingSoon.features.chat'), desc: 'Real-time messaging between buyers and sellers with instant notifications' },
              { icon: BarChart3, title: t('home.comingSoon.features.analytics'), desc: 'Price trends, market insights, and equipment valuation tools' },
              { icon: Clock, title: t('home.comingSoon.features.support'), desc: 'Round-the-clock customer support and equipment assistance' },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-100 p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">{t('footer.buyers')}</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/buy" className="hover:text-white transition-colors">{t('footer.findEquipment')}</Link></li>
                <li><Link href="/inspection" className="hover:text-white transition-colors">{t('footer.inspectionServices')}</Link></li>
                <li><Link href="/finance" className="hover:text-white transition-colors">{t('common.finance')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">{t('footer.sellers')}</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sell" className="hover:text-white transition-colors">{t('common.sellEquipment')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">{t('footer.company')}</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">{t('common.about')}</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">{t('common.blog')}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">{t('common.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">{t('footer.support')}</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white transition-colors">{t('common.help')}</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">{t('common.faq')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© MAQUINARIA RD {new Date().getFullYear()} • {t('footer.privacyPolicy')} • {t('footer.termsOfService')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

