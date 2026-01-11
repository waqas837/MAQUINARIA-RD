'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    onClose();
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-600">Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              placeholder="yourusername"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="font-semibold text-yellow-600 hover:text-yellow-700"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default LoginModal;
