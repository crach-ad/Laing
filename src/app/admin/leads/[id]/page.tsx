'use client';

import { use } from 'react';
import Link from 'next/link';

// Placeholder data
const lead = {
  id: '1',
  name: 'John Smith',
  email: 'john@acme.com',
  company: 'Acme Inc',
  phone: '555-1234',
  industry: 'Manufacturing',
  workflow_description: 'Currently using spreadsheets to track inventory and orders.',
  staff_size: '51-200',
  pain_point: 'Manual data entry is consuming too much time and causing errors.',
  booking_datetime: '2024-01-20 10:00',
  status: 'new',
  created_at: '2024-01-15',
};

export default function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div>
      <Link
        href="/admin/leads"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Back to Leads
      </Link>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">{lead.name}</h1>
          <p className="mt-1 text-zinc-500">{lead.company}</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
            Update Status
          </button>
          <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            Convert to Project
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm text-zinc-500">Email</dt>
              <dd>{lead.email}</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Phone</dt>
              <dd>{lead.phone}</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Booking Date/Time</dt>
              <dd>{lead.booking_datetime}</dd>
            </div>
          </dl>
        </div>

        {/* Company Info */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Company Information</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm text-zinc-500">Industry</dt>
              <dd>{lead.industry}</dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Staff Size</dt>
              <dd>{lead.staff_size}</dd>
            </div>
          </dl>
        </div>

        {/* Workflow Description */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Current Workflow</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {lead.workflow_description}
          </p>
        </div>

        {/* Pain Point */}
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Pain Point</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{lead.pain_point}</p>
        </div>
      </div>
    </div>
  );
}
