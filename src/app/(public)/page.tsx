'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import IntegrationShowcase from '@/components/IntegrationShowcase';
import WorkflowDemo from '@/components/WorkflowDemo';

const services = [
  {
    number: '01',
    title: 'Custom Development',
    description: 'Full-stack applications tailored to your exact requirements. Built with modern technologies for scale and performance.',
  },
  {
    number: '02',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks and streamline your operations. Save hundreds of hours with intelligent automation.',
  },
  {
    number: '03',
    title: 'System Integration',
    description: 'Connect your tools and data for seamless operations. Unified systems that work together flawlessly.',
  },
];

const featuredProjects = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    industry: 'Healthcare',
    description: 'Automated data entry system reducing manual work by 80%',
  },
  {
    slug: 'project-beta',
    title: 'Project Beta',
    industry: 'Finance',
    description: 'Real-time reporting dashboard with advanced analytics',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-fluid relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-white"
            >
              We build software
              <br />
              <span className="text-[#00D4FF]">that transforms</span>
              <br />
              your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-body text-[#A1A1AA] max-w-2xl"
            >
              Custom solutions designed to automate workflows, eliminate manual processes,
              and give you back time to focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                href="/book"
                className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-[#00D4FF] transition-all duration-300 hover-glow"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="scroll-indicator" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding border-t border-[#27272A]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-h2 text-white">
              Services
              <span className="block w-20 h-1 bg-[#00D4FF] mt-4" />
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="h-full">
                  <span className="text-5xl font-bold text-[#00D4FF]/30">
                    {service.number}
                  </span>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding border-t border-[#27272A]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 text-white">
              Seamless Integrations
              <span className="block w-20 h-1 bg-[#00D4FF] mt-4 mx-auto" />
            </h2>
            <p className="mt-6 text-body text-[#A1A1AA] max-w-2xl mx-auto">
              Connect your existing tools and systems. We integrate with the platforms you already use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IntegrationShowcase />
          </motion.div>
        </div>
      </section>

      {/* Workflow Demo Section */}
      <section className="section-padding border-t border-[#27272A] bg-[#0a0a0a]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 text-white">
              Automated Workflows
              <span className="block w-20 h-1 bg-[#00D4FF] mt-4 mx-auto" />
            </h2>
            <p className="mt-6 text-body text-[#A1A1AA] max-w-2xl mx-auto">
              See how we automate complex business processes. Select a workflow to see it in action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WorkflowDemo />
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding border-t border-[#27272A]">
        <div className="container-fluid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
          >
            <div>
              <h2 className="text-h2 text-white">
                Selected Work
                <span className="block w-20 h-1 bg-[#00D4FF] mt-4" />
              </h2>
            </div>
            <Link
              href="/work"
              className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors duration-300 flex items-center gap-2 group"
            >
              View all projects
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={fadeInUp}
                custom={index}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block relative aspect-video rounded-xl overflow-hidden bg-[#18181B] border border-[#27272A] hover:border-[#00D4FF] transition-all duration-500"
                >
                  {/* Placeholder image area */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#27272A] to-[#18181B] grayscale-hover">
                    <div className="absolute inset-0 flex items-center justify-center text-[#71717A] text-lg">
                      Project Image
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-sm text-[#00D4FF] font-medium uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#A1A1AA] mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
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
              Ready to get started?
            </h2>
            <p className="mt-6 text-body text-[#A1A1AA]">
              Book a free consultation to discuss your project. We&apos;ll explore how custom software can solve your biggest challenges.
            </p>
            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black text-lg font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow animate-glow"
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
