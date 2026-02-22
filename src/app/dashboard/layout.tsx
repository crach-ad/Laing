import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold">
            Laing Labs
          </Link>
          <p className="mt-1 text-sm text-zinc-500">Client Portal</p>
        </div>
        <nav className="mt-6 space-y-1 px-3">
          <Link
            href="/dashboard"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/files"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Files
          </Link>
          <Link
            href="/dashboard/messages"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Messages
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-zinc-200 p-4 dark:border-zinc-800">
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
