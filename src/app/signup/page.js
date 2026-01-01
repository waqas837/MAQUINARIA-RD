'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup
    console.log('Signup:', formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="max-w-md mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-600">Join MAQUINARIA RD today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                I am a
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.userType === 'buyer' 
                    ? 'border-yellow-500 bg-yellow-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}>
                  <input
                    type="radio"
                    name="userType"
                    value="buyer"
                    checked={formData.userType === 'buyer'}
                    onChange={(e) => setFormData({...formData, userType: e.target.value})}
                    className="sr-only"
                  />
                  <span className="font-semibold text-slate-700">Buyer</span>
                </label>
                <label className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.userType === 'seller' 
                    ? 'border-yellow-500 bg-yellow-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}>
                  <input
                    type="radio"
                    name="userType"
                    value="seller"
                    checked={formData.userType === 'seller'}
                    onChange={(e) => setFormData({...formData, userType: e.target.value})}
                    className="sr-only"
                  />
                  <span className="font-semibold text-slate-700">Seller</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>

            <label className="flex items-start">
              <input type="checkbox" className="mt-1 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" required />
              <span className="ml-2 text-sm text-slate-600">
                I agree to the{' '}
                <Link href="/terms" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-yellow-600 hover:text-yellow-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


