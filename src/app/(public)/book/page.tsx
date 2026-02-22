'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    workflow_description: '',
    staff_size: '',
    pain_point: '',
    booking_datetime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Submit to Supabase
    console.log('Form data:', formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80vh] flex items-center justify-center"
          >
            <div className="text-center max-w-lg px-6">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-h1 text-white mb-4"
              >
                Thank you!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-body text-[#A1A1AA]"
              >
                We have received your booking request. We will be in touch shortly to confirm your consultation.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    industry: '',
                    workflow_description: '',
                    staff_size: '',
                    pain_point: '',
                    booking_datetime: '',
                  });
                }}
                className="mt-8 text-[#00D4FF] hover:text-white transition-colors duration-300"
              >
                Book another consultation
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section className="section-padding border-b border-[#27272A]">
              <div className="container-fluid">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  {/* Left: Copy */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-h1 text-white">
                      Book a Consultation
                      <span className="block w-20 h-1 bg-[#00D4FF] mt-6" />
                    </h1>
                    <p className="mt-6 text-body text-[#A1A1AA]">
                      Tell us about your project and we will schedule a call to discuss how we can help transform your business.
                    </p>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white">Free 30-minute consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white">No obligation, no pressure</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white">Custom proposal within 48 hours</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right: Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="input-dark"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="input-dark"
                            placeholder="Acme Inc."
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input-dark"
                            placeholder="john@acme.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-dark"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-white mb-2">
                            Industry
                          </label>
                          <input
                            type="text"
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="input-dark"
                            placeholder="Healthcare, Finance, etc."
                          />
                        </div>
                        <div>
                          <label htmlFor="staff_size" className="block text-sm font-medium text-white mb-2">
                            Staff Size
                          </label>
                          <select
                            id="staff_size"
                            name="staff_size"
                            value={formData.staff_size}
                            onChange={handleChange}
                            className="input-dark appearance-none cursor-pointer"
                          >
                            <option value="">Select...</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="workflow_description" className="block text-sm font-medium text-white mb-2">
                          Describe your current workflow
                        </label>
                        <textarea
                          id="workflow_description"
                          name="workflow_description"
                          rows={3}
                          value={formData.workflow_description}
                          onChange={handleChange}
                          className="input-dark resize-none"
                          placeholder="Tell us about your current processes..."
                        />
                      </div>

                      <div>
                        <label htmlFor="pain_point" className="block text-sm font-medium text-white mb-2">
                          What is your biggest pain point?
                        </label>
                        <textarea
                          id="pain_point"
                          name="pain_point"
                          rows={3}
                          value={formData.pain_point}
                          onChange={handleChange}
                          className="input-dark resize-none"
                          placeholder="What challenges are you facing?"
                        />
                      </div>

                      <div>
                        <label htmlFor="booking_datetime" className="block text-sm font-medium text-white mb-2">
                          Preferred date/time for call
                        </label>
                        <input
                          type="datetime-local"
                          id="booking_datetime"
                          name="booking_datetime"
                          value={formData.booking_datetime}
                          onChange={handleChange}
                          className="input-dark"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-[#00D4FF] transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="loading-spinner" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book Consultation
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
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
