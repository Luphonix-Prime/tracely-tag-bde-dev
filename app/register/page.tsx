'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyWebsiteUrl, setCompanyWebsiteUrl] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password || !companyName || !companyEmail || !companyWebsiteUrl) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username,
          email,
          password,
          phone: phone || null,
          companyName,
          companyEmail,
          companyWebsiteUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess(true);
      localStorage.setItem('traclytag_user', JSON.stringify(data));
      
      setTimeout(() => {
        window.location.href = 'http://localhost:5173/dashboard';
      }, 1200);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-primary-950 text-white overflow-hidden py-32 px-4 font-sans">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative w-full max-w-2xl bg-primary-900/40 border border-primary-800/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl transition-all">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-500 to-accent-400 flex items-center justify-center shadow-lg shadow-primary-500/20 mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-display tracking-tight text-white mb-2">Register Your Organization</h1>
          <p className="text-sm text-secondary-400 text-center">Set up a unified administrator profile and register your company</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-800/50 text-red-200 text-sm flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-xl bg-accent-950/50 border border-accent-800/50 text-accent-200 text-sm flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Registration successful! Directing to dashboard...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-accent-400 uppercase tracking-wider border-b border-primary-800/50 pb-2">Admin Profile</h3>
              
              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Username *</label>
                <input
                  type="text"
                  placeholder="sys_admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Admin Email *</label>
                <input
                  type="email"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Password *</label>
                <input
                  type="password"
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-accent-400 uppercase tracking-wider border-b border-primary-800/50 pb-2">Company Details</h3>
              
              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Company Name *</label>
                <input
                  type="text"
                  placeholder="Acme Corporation"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Company Corporate Email *</label>
                <input
                  type="email"
                  placeholder="info@acme.com"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-300 uppercase tracking-widest mb-2 pl-1">Website URL *</label>
                <input
                  type="text"
                  placeholder="https://acme.com"
                  value={companyWebsiteUrl}
                  onChange={(e) => setCompanyWebsiteUrl(e.target.value)}
                  className="w-full bg-primary-950 border border-primary-800/60 rounded-xl py-3 px-4 text-sm text-white placeholder-secondary-600 focus:outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-600 transition-all"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-accent-500/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : 'Create Admin Account'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-secondary-400">
          Already have an account?{' '}
          <Link href="/login" className="text-accent-500 hover:text-accent-400 font-semibold underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
