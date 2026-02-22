import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 bg-zinc-900 text-white dark:border-zinc-800">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold">
            Laing Labs
          </Link>
          <p className="mt-1 text-sm text-zinc-400">Admin</p>
        </div>
        <nav className="mt-6 space-y-1 px-3">
          <Link
            href="/admin"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/leads"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Leads
          </Link>
          <Link
            href="/admin/projects"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Projects
          </Link>
          <Link
            href="/admin/case-studies"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Case Studies
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-zinc-800 p-4">
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-zinc-800">
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-zinc-50 p-8 dark:bg-zinc-950">{children}</main>
    </div>
  );
}
