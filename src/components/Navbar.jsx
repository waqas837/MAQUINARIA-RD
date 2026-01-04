'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [notificationCount] = useState(3); // Sample notification count
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const buyDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const t = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buyDropdownRef.current && !buyDropdownRef.current.contains(event.target)) {
        setBuyDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buyCategories = [
    { name: 'Excavators', href: '/buy?category=excavators' },
    { name: 'Bulldozers', href: '/buy?category=bulldozers' },
    { name: 'Wheel Loaders', href: '/buy?category=wheel-loaders' },
    { name: 'Skid Steers', href: '/buy?category=skid-steers' },
    { name: 'Track Loaders', href: '/buy?category=track-loaders' },
    { name: 'Motor Graders', href: '/buy?category=motor-graders' },
    { name: 'Backhoe Loaders', href: '/buy?category=backhoes' },
    { name: 'Forklifts', href: '/buy?category=forklifts' },
    { name: 'Telehandlers', href: '/buy?category=telehandlers' },
    { name: 'Service Trucks', href: '/buy?category=service-trucks' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/logotransparent.png"
              alt="MAQUINARIA RD Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                {t('navbar.brandName')}
              </h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-slate-900 tracking-tight">
                MAQUINARIA RD
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Buy Equipment Dropdown */}
            <div className="relative" ref={buyDropdownRef}>
              <button
                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-yellow-600 transition-colors"
              >
                {t('common.buyEquipment')}
                <ChevronDown className={`w-4 h-4 transition-transform ${buyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {buyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-slate-200 shadow-xl z-50 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    {buyCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        onClick={() => setBuyDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                    <Link
                      href="/buy"
                      onClick={() => setBuyDropdownOpen(false)}
                      className="block px-4 py-2 text-sm font-semibold text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors mt-2 border-t border-slate-100 pt-2"
                    >
                      View All Equipment →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/sell" 
              className="text-sm font-semibold text-slate-900 hover:text-yellow-600 transition-colors"
            >
              {t('common.sellEquipment')}
            </Link>
            <Link 
              href="/finance" 
              className="text-sm font-semibold text-slate-900 hover:text-yellow-600 transition-colors"
            >
              {t('common.finance')}
            </Link>

            {/* About Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-yellow-600 transition-colors"
              >
                {t('common.about')}
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl border border-slate-200 shadow-xl z-50">
                  <div className="p-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Phone Number Button */}
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-semibold text-sm hover:bg-yellow-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(800) 555-1234</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Login/Signup */}
            <button 
              onClick={() => setShowLoginModal(true)}
              className="text-sm font-semibold text-slate-900 hover:text-yellow-600 transition-colors"
            >
              {t('common.login')} / {t('common.signup')}
            </button>

            <LanguageSwitcher />
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
              {t('common.buyEquipment')}
            </Link>
            <Link
              href="/sell"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              {t('common.sellEquipment')}
            </Link>
            <Link
              href="/inspection"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              {t('common.inspection')}
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              {t('common.dashboard')}
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setShowLoginModal(true);
              }}
              className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              {t('common.login')}
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setShowSignupModal(true);
              }}
              className="block mx-4 mt-4 px-4 py-3 text-center rounded-xl bg-yellow-500 text-slate-900 font-semibold text-base hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 w-auto"
            >
              {t('common.signup')}
            </button>
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>

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
    </header>
  );
};

export default Navbar;

