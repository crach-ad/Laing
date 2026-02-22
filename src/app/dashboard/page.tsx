import Link from 'next/link';

// Placeholder data - will be fetched from Supabase
const projects = [
  {
    id: '1',
    title: 'Website Redesign',
    status: 'in_progress',
    last_update: '2024-01-15',
    next_action: 'Review mockups',
  },
  {
    id: '2',
    title: 'CRM Integration',
    status: 'discovery',
    last_update: '2024-01-10',
    next_action: 'Provide API credentials',
  },
];

const statusColors: Record<string, string> = {
  discovery: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  in_progress: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  review: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  on_hold: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200',
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Welcome back. Here are your active projects.
      </p>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/dashboard/projects/${project.id}`}
            className="block rounded-lg border border-zinc-200 p-6 transition-shadow hover:shadow-md dark:border-zinc-800"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    statusColors[project.status]
                  }`}
                >
                  {project.status.replace('_', ' ')}
                </span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <span className="text-zinc-500">Last update:</span>{' '}
                {project.last_update}
              </div>
              <div>
                <span className="text-zinc-500">Next action:</span>{' '}
                {project.next_action}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="mt-8 rounded-lg border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <p className="text-zinc-500">No active projects yet.</p>
        </div>
      )}
    </div>
  );
}
