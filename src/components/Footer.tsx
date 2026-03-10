'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/book', label: 'Book a Call' },
  { href: '/login', label: 'Client Login' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'LI' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'X' },
  { href: 'https://github.com', label: 'GitHub', icon: 'GH' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#27272A]">
      {/* Large CTA Section */}
      <div className="container-fluid section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h1 text-white mb-6"
          >
            Let&apos;s build something{' '}
            <span className="text-[#00D4FF]">remarkable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body text-[#A1A1AA] mb-10 max-w-2xl mx-auto"
          >
            Ready to transform your business with custom software? Let&apos;s discuss your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-[#00D4FF] transition-all duration-300 hover-glow group"
            >
              Start a Project
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
      </div>

      {/* Footer Links */}
      <div className="border-t border-[#27272A]">
        <div className="container-fluid py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <Link
                href="/"
                className="text-xl font-bold tracking-widest text-white hover:text-[#00D4FF] transition-colors duration-300 uppercase"
              >
                EIGHTLABS
              </Link>
              <p className="text-sm text-[#71717A] mt-2">
                Custom software solutions
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-[#27272A] flex items-center justify-center text-sm text-[#A1A1AA] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#27272A]">
        <div className="container-fluid py-6">
          <p className="text-center text-sm text-[#71717A]">
            <span className="text-[#00D4FF]">&copy;</span>{' '}
            {new Date().getFullYear()} eightLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
