'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start with a deep dive into your current workflows, pain points, and goals. This helps us understand exactly what you need and ensures we build the right solution.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Based on discovery, we create a detailed project plan with clear milestones, deliverables, and timeline. You will know exactly what to expect at every stage.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build your solution in iterative sprints, providing regular updates and opportunities for feedback. You are always in the loop and can course-correct as needed.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'Rigorous testing ensures your solution works flawlessly before launch. We test edge cases, real-world scenarios, and stress conditions.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'We deploy your solution and provide comprehensive training to ensure your team can use it effectively from day one. Zero downtime, zero disruption.',
  },
  {
    number: '06',
    title: 'Support',
    description:
      'Ongoing support and maintenance to keep your solution running smoothly and evolving with your needs. We are always here when you need us.',
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="section-padding border-b border-[#27272A]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-h1 text-white">
              Our Process
              <span className="block w-20 h-1 bg-[#00D4FF] mt-6" />
            </h1>
            <p className="mt-6 text-body text-[#A1A1AA]">
              How we take your project from idea to reality. A proven approach refined over dozens of successful projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 md:left-16 top-32 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 to-[#27272A] hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-12 pb-16 md:pb-24">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-24 md:w-32 h-24 md:h-32 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center relative overflow-hidden group">
                      <span className="text-4xl md:text-5xl font-bold text-[#00D4FF] relative z-10">
                        {step.number}
                      </span>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-6">
                    <h3 className="text-h3 text-white mb-4">{step.title}</h3>
                    <p className="text-body text-[#A1A1AA] leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-[#7C3AED]/20 to-[#00D4FF]/20" />
        <div className="absolute inset-0 bg-black/80" />

        <div className="container-fluid relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h1 text-white">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-body text-[#A1A1AA]">
              Book a free consultation and let&apos;s discuss how we can help transform your business.
            </p>
            <Link
              href="/book"
              className="mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black text-lg font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow animate-glow"
            >
              Book Your Consultation
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
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
