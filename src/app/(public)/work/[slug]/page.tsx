'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { use } from 'react';

// This will be fetched from Supabase based on slug
const caseStudies: Record<string, {
  id: string;
  slug: string;
  title: string;
  industry: string;
  year: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  thumbnail_url: string | null;
}> = {
  'project-alpha': {
    id: '1',
    slug: 'project-alpha',
    title: 'Project Alpha',
    industry: 'Healthcare',
    year: '2024',
    problem: 'The client was struggling with manual data entry processes that consumed hours of staff time daily. Their team spent 40+ hours per week on repetitive data tasks, leading to burnout and high error rates.',
    solution: 'We built a custom automation system that integrated with their existing tools and automated 80% of their data entry workflows. The system uses intelligent OCR and machine learning to extract, validate, and input data automatically.',
    outcome: 'Staff time on data entry reduced by 80%. Error rate dropped to near zero. The team now focuses on high-value patient care instead of administrative tasks.',
    metrics: [
      { label: 'Time Saved Weekly', value: '32hrs' },
      { label: 'Error Reduction', value: '99%' },
      { label: 'Annual Savings', value: '$150K' },
    ],
    thumbnail_url: null,
  },
  'project-beta': {
    id: '2',
    slug: 'project-beta',
    title: 'Project Beta',
    industry: 'Finance',
    year: '2024',
    problem: 'The finance team lacked real-time visibility into their operations. Reports were generated manually and were often outdated by the time they reached decision-makers.',
    solution: 'We developed a real-time reporting dashboard that pulls data from multiple sources and presents it in an intuitive interface. Advanced analytics provide predictive insights for better decision-making.',
    outcome: 'Decision-making speed improved by 60%. The team now has instant access to critical metrics and can respond to market changes in real-time.',
    metrics: [
      { label: 'Faster Decisions', value: '60%' },
      { label: 'Data Sources', value: '12+' },
      { label: 'ROI First Year', value: '340%' },
    ],
    thumbnail_url: null,
  },
  'project-gamma': {
    id: '3',
    slug: 'project-gamma',
    title: 'Project Gamma',
    industry: 'E-commerce',
    year: '2023',
    problem: 'Inventory management was chaotic. Stockouts were common, leading to lost sales, while overstocking tied up capital in unsold products.',
    solution: 'We created an intelligent inventory management system with predictive restocking algorithms. The system analyzes sales patterns, seasonality, and market trends to optimize stock levels.',
    outcome: 'Stockouts reduced by 90%. Inventory costs decreased by 25%. The business now maintains optimal stock levels automatically.',
    metrics: [
      { label: 'Stockout Reduction', value: '90%' },
      { label: 'Inventory Cost Cut', value: '25%' },
      { label: 'Revenue Increase', value: '+18%' },
    ],
    thumbnail_url: null,
  },
};

// Get next project for navigation
function getNextProject(currentSlug: string) {
  const slugs = Object.keys(caseStudies);
  const currentIndex = slugs.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % slugs.length;
  return caseStudies[slugs[nextIndex]];
}

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const study = caseStudies[slug] || caseStudies['project-alpha'];
  const nextProject = getNextProject(slug);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Full-width hero image */}
        <div className="aspect-[21/9] md:aspect-[3/1] bg-[#18181B] relative">
          {study.thumbnail_url ? (
            <img
              src={study.thumbnail_url}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#27272A] via-[#18181B] to-black flex items-center justify-center">
              <span className="text-[#71717A] text-lg">Project Hero Image</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container-fluid pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#00D4FF] transition-colors duration-300 mb-6"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Back to Work
                </Link>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-sm font-medium uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-[#71717A] text-sm">
                    {study.year}
                  </span>
                </div>
                <h1 className="text-h1 text-white">{study.title}</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-b border-[#27272A]">
        <div className="container-fluid py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {study.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-[#00D4FF]">
                  {metric.value}
                </div>
                <div className="text-sm text-[#71717A] mt-2 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-[#00D4FF]/30">01</span>
                <h2 className="text-h2 text-white">The Problem</h2>
              </div>
              <p className="text-body text-[#A1A1AA] leading-relaxed">
                {study.problem}
              </p>
            </motion.div>

            {/* Full-width image break */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-xl overflow-hidden bg-[#18181B] border border-[#27272A]"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#27272A] to-[#18181B]">
                <span className="text-[#71717A]">Process Image</span>
              </div>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-[#00D4FF]/30">02</span>
                <h2 className="text-h2 text-white">Our Solution</h2>
              </div>
              <p className="text-body text-[#A1A1AA] leading-relaxed">
                {study.solution}
              </p>
            </motion.div>

            {/* The Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-[#00D4FF]/30">03</span>
                <h2 className="text-h2 text-white">The Outcome</h2>
              </div>
              <p className="text-body text-[#A1A1AA] leading-relaxed">
                {study.outcome}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-[#27272A] bg-[#18181B]/50">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-h2 text-white">
              Interested in similar results?
            </h2>
            <p className="mt-4 text-body text-[#A1A1AA]">
              Let&apos;s discuss how we can help transform your business.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow"
            >
              Book a Consultation
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

      {/* Next Project */}
      <section className="border-t border-[#27272A]">
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block container-fluid py-12 md:py-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-sm text-[#71717A] uppercase tracking-wider">
                Next Project
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300 mt-2">
                {nextProject.title}
              </h3>
              <span className="text-[#A1A1AA]">{nextProject.industry}</span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#00D4FF] group-hover:bg-[#00D4FF] transition-all duration-300">
              <svg
                className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
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
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
