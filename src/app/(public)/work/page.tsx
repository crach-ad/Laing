'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import caseStudyWorkflows from '@/data/caseStudyWorkflows';

// Placeholder data - will be fetched from Supabase
const caseStudies = [
  {
    id: '1',
    slug: 'project-alpha',
    title: 'Project Alpha',
    industry: 'Healthcare',
    description: 'Automated data entry system reducing manual work by 80%',
    thumbnail_url: null,
  },
  {
    id: '2',
    slug: 'project-beta',
    title: 'Project Beta',
    industry: 'Finance',
    description: 'Real-time reporting dashboard with advanced analytics',
    thumbnail_url: null,
  },
  {
    id: '3',
    slug: 'project-gamma',
    title: 'Project Gamma',
    industry: 'E-commerce',
    description: 'Inventory management system with predictive restocking',
    thumbnail_url: null,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function WorkPage() {
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
              Our Work
              <span className="block w-20 h-1 bg-[#00D4FF] mt-6" />
            </h1>
            <p className="mt-6 text-body text-[#A1A1AA]">
              Case studies from projects we have delivered. Real problems, real solutions, real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-fluid">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group block relative overflow-hidden rounded-xl border border-[#27272A] hover:border-[#00D4FF] transition-all duration-500 hover-lift"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-[#18181B] overflow-hidden">
                    {study.thumbnail_url ? (
                      <img
                        src={study.thumbnail_url}
                        alt={study.title}
                        className="w-full h-full object-cover grayscale-hover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : caseStudyWorkflows[study.slug] ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#27272A] to-[#18181B] pointer-events-none">
                        <WorkflowVisualization
                          workflow={caseStudyWorkflows[study.slug]}
                          autoPlay={true}
                          showControls={false}
                          compact={true}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#27272A] to-[#18181B]">
                        <span className="text-[#71717A]">Project Image</span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-medium uppercase tracking-wider mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {study.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
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
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-[#27272A]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-h2 text-white">
              Want similar results?
            </h2>
            <p className="mt-4 text-body text-[#A1A1AA]">
              Let&apos;s discuss how we can help transform your business.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow"
            >
              Start a Project
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
