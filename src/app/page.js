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
            <span className="block text-yellow-500 text-2xl sm:text-3xl md:text-4xl mt-2">{t('home.titleHighlight')}</span>
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
            {[t('home.popularTags.excavators'), t('home.popularTags.wheelLoaders'), t('home.popularTags.bulldozers'), t('home.popularTags.cranes')].map((tag) => (
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
              { name: t('home.categories.agriculturalTractors'), image: '/machinery-images/bulldozers.a78608c2.webp', href: '/buy?category=tractors' },
              { name: t('home.categories.backhoeLoaders'), image: '/machinery-images/backhoe-loaders.c7382a6d.webp', href: '/buy?category=backhoes' },
              { name: t('home.categories.miniExcavators'), image: '/machinery-images/excavators.b19c4bba.webp', href: '/buy?category=mini-excavators' },
              { name: t('home.categories.telescopicHandlers'), image: '/machinery-images/telehandlers.0dfab854.webp', href: '/buy?category=telehandlers' },
              { name: t('home.categories.trackedExcavators'), image: '/machinery-images/excavators.b19c4bba.webp', href: '/buy?category=excavators' },
              { name: t('home.categories.wheelLoaders'), image: '/machinery-images/wheel-loaders.b6bfac38.webp', href: '/buy?category=wheel-loaders' },
              { name: t('home.categories.tractors'), image: '/machinery-images/bulldozers.a78608c2.webp', href: '/buy?category=tractors' },
              { name: t('home.categories.compactors'), image: '/machinery-images/motor-graders.00e1657a.webp', href: '/buy?category=compactors' },
              { name: t('home.categories.compactEquipment'), image: '/machinery-images/skid-steer-loaders.a630fec7.webp', href: '/buy?category=compact-equipment' },
              { name: t('home.categories.harvesters'), image: '/machinery-images/forestry-equipment.b9e01146.webp', href: '/buy?category=harvesters' },
              { name: t('home.categories.generators'), image: '/machinery-images/service-trucks.a3cc7c24.webp', href: '/buy?category=generators' },
              { name: t('home.categories.attachments'), image: '/machinery-images/forklifts.db350043.webp', href: '/buy?category=attachments' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden hover:border-yellow-300"
              >
                <div className="relative h-32 sm:h-40 bg-slate-100 flex items-center justify-center">
                  {/* Note: Images should be line drawings - using placeholder for now */}
                  <div className="w-24 h-24 border-2 border-slate-400 rounded flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h4>
                </div>
              </Link>
            ))}
            {/* See All */}
            <Link
              href="/buy"
              className="group bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl sm:rounded-2xl border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col items-center justify-center min-h-[140px] sm:min-h-[180px]"
            >
              <div className="p-3 sm:p-4 text-center">
                <h4 className="font-bold text-white text-lg sm:text-xl group-hover:scale-105 transition-transform">
                  {t('home.categories.seeAll')}
                </h4>
                <p className="text-yellow-50 text-xs sm:text-sm mt-2">{t('home.categories.seeAllDesc')}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Lightning Deals Section - Moved under Browse by Category */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t('home.lightningDeals')}</h3>
          </div>
          <p className="text-slate-600 mb-6 max-w-2xl">
            {t('home.lightningDealsDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: '2021 Shipping Container', originalPrice: '$4,118', price: '$3,500', image: '/machinery-images/service-trucks.a3cc7c24.webp', discount: '15% OFF' },
              { name: '2019 Scissor Lift', originalPrice: '$11,125', price: '$8,900', image: '/machinery-images/lifts.96f74904.webp', discount: '20% OFF' },
              { name: '2020 Sprayer', originalPrice: '$16,667', price: '$15,000', image: '/machinery-images/forklifts.db350043.webp', discount: '10% OFF' },
              { name: '2018 Excavator', originalPrice: '$88,636', price: '$78,000', image: '/machinery-images/excavators.b19c4bba.webp', discount: '12% OFF' },
              { name: '2019 Tractor', originalPrice: '$42,683', price: '$35,000', image: '/machinery-images/wheel-loaders.b6bfac38.webp', discount: '18% OFF' },
              { name: '2020 Wheel Loader', originalPrice: '$100,000', price: '$92,000', image: '/machinery-images/wheel-loaders.b6bfac38.webp', discount: '8% OFF' },
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-slate-400 line-through">{item.originalPrice}</span>
                    <span className="text-lg font-extrabold text-yellow-600">{item.price}</span>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-yellow-600 transition-colors font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/buy?deals=lightning" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20">
              {t('home.viewAllLightningDeals')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Buy with Confidence */}
        <div className="mb-16 sm:mb-20">
          {/* Horizontal Banner Over Buy with Confidence */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-4 text-center">
              <p className="text-white text-sm font-semibold">Banner Space</p>
            </div>
          </div>
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
                  {t('home.specialOffer')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">{t('home.featuredEquipment')}</h3>
                <p className="text-yellow-50 text-sm sm:text-base mb-4">
                  {t('home.featuredDesc')}
                </p>
              </div>
              <Link
                href="/buy?featured=true"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-yellow-50 transition-all shadow-lg"
              >
                {t('home.viewFeatured')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Featured Equipment Cards */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{t('home.availableForRent')}</h3>
                <Link href="/rent" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center gap-1">
                  {t('home.viewAll')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-slate-600 text-sm mb-4">{t('home.availableForRentDesc')}</p>
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
                        {t('home.viewDetails')} →
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
                {t('home.shopByPrice')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { range: 'Under $25K', image: '/machinery-images/forklifts.db350043.webp' },
                  { range: 'Under $50K', image: '/machinery-images/skid-steer-loaders.a630fec7.webp' },
                  { range: 'Under $100K', image: '/machinery-images/service-trucks.a3cc7c24.webp' },
                  { range: 'Under $250K', image: '/machinery-images/excavators.b19c4bba.webp' },
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
                      <span className="inline-block mt-2 text-xs font-semibold text-yellow-600">View all →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Banner Space */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl border-2 border-yellow-200 p-6 h-full flex items-center justify-center min-h-[300px]">
                <p className="text-slate-600 text-sm text-center">Banner Space</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Deals Near Me Section */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t('home.topDealsNearYou')}</h3>
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
              {t('home.shopAllDeals')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Top Manufacturers Section */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
                {t('home.topManufacturers')}
              </h3>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6">
                  {['Caterpillar', 'John Deere', 'Komatsu', 'Bobcat', 'Volvo', 'JCB', 'Case', 'Hitachi', 'Hyundai', 'Doosan', 'Sany', 'Genie', 'Terex', 'Kubota', 'Liebherr', 'XCMG', 'Yanmar', 'Farmtrac', 'JLG', 'Valtra', 'Solis', 'Massey Ferguson', 'Landini', 'New Holland', 'LS Tractor', 'Kalmar', 'Zoomlion', 'Clark', 'Cummins', 'Hyster', 'Stihl'].map((brand) => (
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
            {/* Banner Space */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl border-2 border-yellow-200 p-6 h-full flex items-center justify-center min-h-[300px]">
                <p className="text-slate-600 text-sm text-center">Banner Space</p>
              </div>
            </div>
          </div>
        </div>


        {/* Browse by Application Section */}
        <div className="mb-16 sm:mb-20">
          {/* Horizontal Banner Over Browse by Application */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-4 text-center">
              <p className="text-white text-sm font-semibold">Banner Space</p>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            {t('home.browseByApplication')}
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

        {/* Inspection Offer Section - Changed from Tried, Tested & Trusted */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl sm:rounded-3xl border-2 border-yellow-200 p-8 sm:p-12">
          <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                {t('home.inspectionOffer.title')}
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                {t('home.inspectionOffer.subtitle')}
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: t('home.inspectionOffer.basic'), price: '$200', features: ['Visual inspection', 'Basic condition report', 'Photo documentation'] },
              { name: t('home.inspectionOffer.pro'), price: '$350', features: ['Full visual inspection', 'Detailed condition report', 'Oil sample analysis', 'Comprehensive photos'] },
              { name: t('home.inspectionOffer.full'), price: '$650', features: ['Complete inspection', 'Detailed mechanical report', 'Oil & fluid analysis', 'Performance testing', 'Full documentation'] },
            ].map((tier, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-yellow-400 transition-all">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-extrabold text-slate-900 mb-2">{tier.name}</h4>
                  <p className="text-3xl font-extrabold text-yellow-600">{tier.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inspection"
                  className="block w-full text-center px-4 py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-600 transition-all"
                >
                  {t('home.inspectionOffer.learnMore')}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Outstanding Operators Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 text-center">
            {t('home.outstandingOperators')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Carlos Rodriguez', machines: ['Excavator', 'Bulldozer', 'Wheel Loader'], experience: '15 years', rating: 4.9, status: 'Elite' },
              { name: 'Miguel Santos', machines: ['Backhoe', 'Skid Steer', 'Telehandler'], experience: '12 years', rating: 4.8, status: 'Pro' },
              { name: 'Juan Martinez', machines: ['Motor Grader', 'Compactor', 'Forklift'], experience: '18 years', rating: 5.0, status: 'Elite' },
            ].map((operator, index) => (
              <Link
                key={index}
                href="/work/operators"
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-600">{operator.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{operator.name}</h4>
                    <p className="text-sm text-slate-600">{operator.experience} experience</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    operator.status === 'Elite' ? 'bg-yellow-500 text-slate-900' : 'bg-blue-500 text-white'
                  }`}>
                    {operator.status}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Machines:</p>
                  <div className="flex flex-wrap gap-2">
                    {operator.machines.map((machine, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                        {machine}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 font-bold">{operator.rating}</span>
                    <span className="text-slate-400">★</span>
                  </div>
                  <span className="text-xs font-semibold text-yellow-600">View Profile →</span>
                </div>
              </Link>
            ))}
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
                <li><Link href="/memberships" className="hover:text-white transition-colors">Memberships</Link></li>
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

