import Link from 'next/link';

// Placeholder stats
const stats = [
  { label: 'New Leads', value: 12, href: '/admin/leads' },
  { label: 'Active Projects', value: 5, href: '/admin/projects' },
  { label: 'Completed Projects', value: 24, href: '/admin/projects' },
];

const recentLeads = [
  { id: '1', name: 'John Smith', company: 'Acme Inc', created_at: '2024-01-15' },
  { id: '2', name: 'Jane Doe', company: 'Tech Corp', created_at: '2024-01-14' },
  { id: '3', name: 'Bob Johnson', company: 'StartupXYZ', created_at: '2024-01-13' },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-900"
          >
            <p className="text-sm text-zinc-500">{stat.label}</p>
            <p className="mt-2 text-4xl font-bold">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Leads</h2>
          <Link
            href="/admin/leads"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-4 rounded-lg bg-white shadow-sm dark:bg-zinc-900">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 text-left text-sm text-zinc-500 dark:border-zinc-800">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
                >
                  <td className="px-6 py-4">{lead.name}</td>
                  <td className="px-6 py-4 text-zinc-500">{lead.company}</td>
                  <td className="px-6 py-4 text-zinc-500">{lead.created_at}</td>
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
    </div>
  );
}
