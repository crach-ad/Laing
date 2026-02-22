import Link from 'next/link';

// Placeholder data
const projects = [
  {
    id: '1',
    title: 'Website Redesign',
    client_name: 'Acme Inc',
    status: 'in_progress',
    start_date: '2024-01-01',
  },
  {
    id: '2',
    title: 'CRM Integration',
    client_name: 'Tech Corp',
    status: 'discovery',
    start_date: '2024-01-10',
  },
  {
    id: '3',
    title: 'Inventory System',
    client_name: 'StartupXYZ',
    status: 'completed',
    start_date: '2023-11-01',
  },
];

const statusColors: Record<string, string> = {
  discovery: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  in_progress: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  review: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  on_hold: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200',
};

export default function AdminProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="mt-8 rounded-lg bg-white shadow-sm dark:bg-zinc-900">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 text-left text-sm text-zinc-500 dark:border-zinc-800">
              <th className="px-6 py-3">Project</th>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Start Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
              >
                <td className="px-6 py-4 font-medium">{project.title}</td>
                <td className="px-6 py-4 text-zinc-500">{project.client_name}</td>
                <td className="px-6 py-4 text-zinc-500">{project.start_date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium capitalize ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Manage
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
