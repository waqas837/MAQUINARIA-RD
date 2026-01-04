'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationCount] = useState(3); // Sample notification count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/logotransparent.png"
              alt="MAQUINARIA RD Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                MAQUINARIA RD
              </h1>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                El mercado de las maquinarias
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-extrabold text-slate-900 tracking-tight">
                MAQUINARIA RD
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link 
              href="/buy" 
              className="text-sm font-semibold text-slate-700 hover:text-yellow-600 transition-colors px-2 py-1"
            >
              Buy Equipment
            </Link>
            <Link 
              href="/sell" 
              className="text-sm font-semibold text-slate-700 hover:text-yellow-600 transition-colors px-2 py-1"
            >
              Sell Equipment
            </Link>
            <Link 
              href="/dashboard" 
              className="relative text-sm font-semibold text-slate-700 hover:text-yellow-600 transition-colors px-2 py-1"
            >
              Dashboard
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-slate-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </Link>
            <Link 
              href="/login" 
              className="text-sm font-semibold text-slate-700 hover:text-yellow-600 transition-colors px-2 py-1"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-4 py-2 rounded-xl bg-yellow-500 text-slate-900 font-semibold text-sm hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 whitespace-nowrap"
            >
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4 pt-2 space-y-2 border-t border-slate-200 mt-2">
            <Link
              href="/buy"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              Buy Equipment
            </Link>
            <Link
              href="/sell"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              Sell Equipment
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-4 py-3 text-center rounded-xl bg-yellow-500 text-slate-900 font-semibold text-base hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

