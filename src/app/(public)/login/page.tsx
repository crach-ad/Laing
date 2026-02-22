'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement Supabase magic link auth
    console.log('Login email:', email);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-[80vh] flex items-center justify-center px-6">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="w-20 h-20 rounded-full bg-[#00D4FF] mx-auto flex items-center justify-center mb-8"
            >
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-h2 text-white mb-4"
            >
              Check your email
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-body text-[#A1A1AA]"
            >
              We sent a magic link to{' '}
              <span className="text-[#00D4FF] font-medium">{email}</span>.
              Click the link in your email to sign in.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => {
                setSubmitted(false);
                setEmail('');
              }}
              className="mt-8 text-[#A1A1AA] hover:text-[#00D4FF] transition-colors duration-300 text-sm"
            >
              Try a different email
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Card Container */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h1 className="text-h2 text-white mb-2">Welcome back</h1>
                <p className="text-[#A1A1AA]">
                  Enter your email to receive a magic link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-dark"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-white text-black font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Magic Link
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#27272A] text-center">
                <p className="text-sm text-[#71717A]">
                  Not a client yet?{' '}
                  <Link
                    href="/book"
                    className="text-[#00D4FF] hover:text-white transition-colors duration-300"
                  >
                    Book a consultation
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Note */}
            <p className="mt-6 text-center text-xs text-[#71717A]">
              <svg
                className="w-4 h-4 inline-block mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure passwordless authentication
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
