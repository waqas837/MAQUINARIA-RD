'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingCart, DollarSign, Calendar, User, Briefcase } from 'lucide-react';

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    number: '',
    whatsapp: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1 = account details, 2 = role selection

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    // Validate account details
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Move to role selection step
    setCurrentStep(2);
  };

  const handleRoleSelect = (userType) => {
    setFormData({ ...formData, userType });
  };

  const handleCompleteSetup = () => {
    // Validate role is selected
    if (!formData.userType) {
      alert('Please select a role');
      return;
    }
    console.log('Signup:', formData);
    onClose();
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 my-8 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
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

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-600">Step {currentStep} of 2</span>
            <span className="text-xs font-semibold text-slate-600">{currentStep === 1 ? 'Account Details' : 'Choose Your Role'}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${(currentStep - 1) * 100}%)` }}
          >
            {/* Step 1: Account Details */}
            <div className="w-full flex-shrink-0 px-1">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Create Account</h2>
                <p className="text-sm text-slate-600">Join maquinaria RD to buy, sell or rent equipment and operators.</p>
              </div>

              <form onSubmit={handleAccountSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Username *
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="johndoe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name or Business *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="John Martinez or ABC Construction"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Number *
            </label>
            <input
              type="tel"
              required
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="+1 (809) 555-1234"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="+1 (809) 555-1234"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="your@email.com"
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
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="Create a password"
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
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
            />
            <label className="text-sm text-slate-600">
              I agree to the{' '}
              <a href="/terms" className="text-yellow-600 hover:underline font-semibold">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-yellow-600 hover:underline font-semibold">Privacy Policy</a>
            </label>
          </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Step 2: Role Selection */}
            <div className="w-full flex-shrink-0 px-1">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Choose Your Role</h2>
                <p className="text-sm text-slate-600">Select how you'll use MAQUINARIA RD</p>
              </div>

              <div className="space-y-4 mb-6">
              {[
                { label: 'Buyer', value: 'buyer', icon: ShoppingCart, desc: 'Looking to purchase equipment' },
                { label: 'Seller', value: 'seller', icon: DollarSign, desc: 'Selling equipment' },
                { label: 'Renter', value: 'renter', icon: Calendar, desc: 'Renting out equipment' },
                { label: 'Operator', value: 'operator', icon: User, desc: 'Operating machinery' },
                { label: 'Job Poster', value: 'job_poster', icon: Briefcase, desc: 'Posting operator jobs' }
              ].map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleRoleSelect(type.value)}
                    className={`w-full p-5 rounded-xl border-2 transition-all text-left transform hover:scale-[1.02] ${
                      formData.userType === type.value
                        ? 'border-yellow-500 bg-yellow-50 shadow-lg'
                        : 'border-slate-200 hover:border-yellow-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        formData.userType === type.value ? 'bg-yellow-500' : 'bg-slate-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          formData.userType === type.value ? 'text-white' : 'text-slate-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold text-base mb-1 ${
                          formData.userType === type.value ? 'text-yellow-700' : 'text-slate-900'
                        }`}>
                          {type.label}
                        </div>
                        <div className="text-sm text-slate-600">{type.desc}</div>
                      </div>
                      {formData.userType === type.value && (
                        <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleCompleteSetup}
                  disabled={!formData.userType}
                  className="flex-1 py-3 rounded-xl bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Setup
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="font-semibold text-yellow-600 hover:text-yellow-700"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SignupModal;
