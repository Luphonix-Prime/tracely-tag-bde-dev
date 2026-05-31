'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserSession {
  id: number;
  username: string;
  email: string;
  role: string;
  companyId: number | null;
  companyName: string | null;
  subscriptionPlan?: string | null;
}

export default function PricingPage() {
  const [user, setUser] = useState<UserSession | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [companies, setCompanies] = useState<any[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const stored = localStorage.getItem('traclytag_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        // Clear corrupt storage
        localStorage.removeItem('traclytag_user');
      }
    }
  }, []);

  useEffect(() => {
    if (user?.role === 'master') {
      fetch('http://localhost:3000/api/companies', {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCompanies(data);
          if (data.length > 0) {
            setSelectedCompanyId(data[0].id);
          }
        }
      })
      .catch(err => console.error("Failed to load companies", err));
    }
  }, [user]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async (plan: 'standard' | 'enterprise') => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = `/login?redirect=/pricing`;
      return;
    }

    setLoadingPlan(plan);
    setError(null);
    setSuccessMsg(null);

    try {
      // 1. Create order on the backend
      const orderResponse = await fetch('http://localhost:3000/api/subscription/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ plan, companyId: user?.role === 'master' ? selectedCompanyId : undefined }),
      });

      if (orderResponse.status === 401) {
        window.location.href = `/login?redirect=/pricing`;
        return;
      }

      const orderData = await orderResponse.json();
      if (!orderResponse.ok || !orderData.success) {
        throw new Error(orderData.error || 'Failed to initialize subscription order');
      }

      // 2. Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load. Are you offline?');
      }

      // 3. Open Razorpay checkout
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'TracelyTag',
        description: `${plan.toUpperCase()} Plan Subscription`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          setLoadingPlan(plan);
          try {
            // 4. Verify payment on the backend
            const verifyResponse = await fetch('http://localhost:3000/api/subscription/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                plan,
                companyId: user?.role === 'master' ? selectedCompanyId : undefined,
              }),
            });

            const verifyData = await verifyResponse.json();
            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(verifyData.error || 'Payment signature verification failed');
            }

            // 5. Payment verified! Update local state
            setSuccessMsg(`Successfully subscribed to ${plan.toUpperCase()} plan!`);
            
            if (user?.role === 'master' && selectedCompanyId) {
              setCompanies(prev => prev.map(c => c.id === selectedCompanyId ? { ...c, subscriptionPlan: plan } : c));
            } else {
              // Update local user state
              const updatedUser = { ...user, subscriptionPlan: plan };
              localStorage.setItem('traclytag_user', JSON.stringify(updatedUser));
              setUser(updatedUser);
            }

            // Redirect back to client dashboard
            setTimeout(() => {
              window.location.href = 'http://localhost:5173/dashboard';
            }, 2000);
          } catch (err: any) {
            setError(err.message || 'Payment verification failed. Please contact support.');
          } finally {
            setLoadingPlan(null);
          }
        },
        prefill: {
          name: user.username,
          email: user.email,
        },
        theme: {
          color: '#0d9488', // Teal accent color
        },
        modal: {
          ondismiss: function () {
            setLoadingPlan(null);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setError(err.message || 'An error occurred during payment processing');
      setLoadingPlan(null);
    }
  };

  const plans = [
    {
      name: 'Free / Trial',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for exploring the GS1 tracking basics and dashboard layout.',
      features: [
        'Interactive Analytics Dashboard',
        'Basic Product Registry (SKU)',
        'Basic Warehouse Locations',
        'Manual Item Scan Check',
        'Up to 10 products'
      ],
      cta: 'Current Plan',
      planKey: 'free',
      isPopular: false
    },
    {
      name: 'Standard',
      price: '₹1,999',
      period: 'per month',
      description: 'Ideal for small manufacturers setting up GS1 compliant operations.',
      features: [
        'Everything in Free Plan',
        'Unlimited Products & SKUs',
        'Production Batch Management',
        'GS1 Code Mapping & Linkages',
        'Customer Authenticity Scan Module',
        'Standard Email Support'
      ],
      cta: 'Upgrade to Standard',
      planKey: 'standard',
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: '₹9,999',
      period: 'per month',
      description: 'Complete suite for commercial production lines and inventory auditing.',
      features: [
        'Everything in Standard Plan',
        'Dynamic GS1 Code Generation',
        'Bulk Codes Export (PDF/CSV)',
        'Comprehensive Stock Verification',
        'Real-time Reports & Logs',
        'API Access for ERP sync',
        '24/7 Priority Support'
      ],
      cta: 'Upgrade to Enterprise',
      planKey: 'enterprise',
      isPopular: false
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-primary-950 text-white overflow-hidden py-32 px-6 font-sans">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            Pricing Plans
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
            Transparent Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Secure Product Tagging</span>
          </h1>
          <p className="text-lg text-secondary-400">
            Select the tier that matches your production output. Ensure absolute authenticity, combat counterfeiting, and satisfy regulatory requirements with ease.
          </p>
        </div>
        
        {/* Company Selector for Master Users */}
        {user?.role === 'master' && (
          <div className="w-full max-w-md mb-10 p-6 rounded-2xl bg-primary-900/40 border border-primary-800/80 backdrop-blur-md shadow-lg flex flex-col gap-3">
            <label className="text-xs font-bold text-accent-400 uppercase tracking-widest">
              Manage Subscription for Company:
            </label>
            <select
              value={selectedCompanyId || ''}
              onChange={(e) => setSelectedCompanyId(Number(e.target.value))}
              className="w-full bg-primary-950 border border-primary-800 rounded-xl py-3 px-4 text-white text-sm focus:border-accent-500 outline-none transition-all cursor-pointer h-12"
            >
              {companies.map((c) => (
                <option key={c.id} value={c.id} className="bg-primary-950 text-white">
                  {c.name} ({c.subscriptionPlan || 'free'} plan)
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Global Messages */}
        {error && (
          <div className="w-full max-w-md mb-8 p-4 rounded-xl bg-red-950/50 border border-red-800/50 text-red-200 text-sm flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="w-full max-w-md mb-8 p-4 rounded-xl bg-accent-950/50 border border-accent-800/50 text-accent-200 text-sm flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{successMsg}</span>
          </div>
        )}

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
          {plans.map((plan) => {
            const targetCompany = user?.role === 'master' && selectedCompanyId
              ? companies.find(c => c.id === selectedCompanyId)
              : null;
            const companyPlan = targetCompany ? (targetCompany.subscriptionPlan || 'free') : (user?.subscriptionPlan || 'free');
            const isCurrent = plan.planKey === companyPlan;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-primary-900/20 border backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl ${
                  plan.isPopular
                    ? 'border-accent-500/80 shadow-lg shadow-accent-500/5'
                    : 'border-primary-800/50 hover:border-primary-700/80'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-secondary-400 min-h-[40px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-extrabold font-display text-white">{plan.price}</span>
                  <span className="text-sm text-secondary-500">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary-300">
                      <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.planKey === 'free' ? (
                  <button
                    disabled
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-primary-950 border border-primary-800 text-secondary-500 cursor-not-allowed transition-all text-center"
                  >
                    {isCurrent ? 'Current Plan' : 'Free Trial'}
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubscribe(plan.planKey as any)}
                    disabled={loadingPlan !== null || isCurrent}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isCurrent
                        ? 'bg-primary-950 border border-primary-800 text-secondary-500 cursor-not-allowed'
                        : plan.isPopular
                        ? 'bg-accent-600 hover:bg-accent-500 text-white hover:shadow-accent-500/20 active:scale-[0.98]'
                        : 'bg-primary-800 hover:bg-primary-700 text-white hover:shadow-primary-500/10 active:scale-[0.98]'
                    }`}
                  >
                    {loadingPlan === plan.planKey ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : isCurrent ? (
                      'Active Subscription'
                    ) : (
                      plan.cta
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center text-secondary-500 text-sm">
          Need custom volume, private deployments or customized ERP integration?{' '}
          <Link href="/contact" className="text-accent-500 hover:underline">
            Talk to an Enterprise Specialist
          </Link>
        </div>
      </div>
    </div>
  );
}
