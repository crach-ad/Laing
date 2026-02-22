'use client';

import { useState } from 'react';
import Link from 'next/link';

// Placeholder data
const leads = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@acme.com',
    company: 'Acme Inc',
    status: 'new',
    booking_datetime: '2024-01-20 10:00',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@techcorp.com',
    company: 'Tech Corp',
    status: 'contacted',
    booking_datetime: '2024-01-21 14:00',
    created_at: '2024-01-14',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@startup.xyz',
    company: 'StartupXYZ',
    status: 'qualified',
    booking_datetime: '2024-01-19 09:00',
    created_at: '2024-01-13',
  },
];

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  contacted: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  qualified: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  converted: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  lost: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200',
};

export default function LeadsPage() {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredLeads =
    filterStatus === 'all'
      ? leads
      : leads.filter((lead) => lead.status === filterStatus);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Leads</h1>
      </div>

      {/* Filters */}
      <div className="mt-6 flex gap-2">
        {['all', 'new', 'contacted', 'qualified', 'converted', 'lost'].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`rounded-full px-4 py-2 text-sm capitalize ${
                filterStatus === status
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="mt-6 rounded-lg bg-white shadow-sm dark:bg-zinc-900">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 text-left text-sm text-zinc-500 dark:border-zinc-800">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Booking</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
              >
                <td className="px-6 py-4 font-medium">{lead.name}</td>
                <td className="px-6 py-4 text-zinc-500">{lead.company}</td>
                <td className="px-6 py-4 text-zinc-500">{lead.email}</td>
                <td className="px-6 py-4 text-zinc-500">{lead.booking_datetime}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      statusColors[lead.status]
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/leads/${lead.id}`}
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
