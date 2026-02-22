'use client';

import { useState, use } from 'react';
import Link from 'next/link';

// Placeholder data
const project = {
  id: '1',
  title: 'Website Redesign',
  client_name: 'Acme Inc',
  description: 'Complete redesign of company website with new branding.',
  status: 'in_progress',
  start_date: '2024-01-01',
  estimated_completion: '2024-03-01',
};

const updates = [
  {
    id: '1',
    title: 'Mockups completed',
    body: 'Initial mockups are ready for client review.',
    created_at: '2024-01-15',
  },
];

const files = [
  { id: '1', file_name: 'mockup-v1.pdf', uploaded_by: 'admin', created_at: '2024-01-15' },
  { id: '2', file_name: 'requirements.docx', uploaded_by: 'client', created_at: '2024-01-01' },
];

export default function AdminProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');

  const handlePostUpdate = () => {
    // TODO: Post update to Supabase
    console.log('Posting update:', { title: updateTitle, body: updateBody });
    setShowUpdateForm(false);
    setUpdateTitle('');
    setUpdateBody('');
  };

  return (
    <div>
      <Link
        href="/admin/projects"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Back to Projects
      </Link>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="mt-1 text-zinc-500">{project.client_name}</p>
        </div>
        <select className="rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800">
          <option value="discovery">Discovery</option>
          <option value="in_progress" selected>In Progress</option>
          <option value="review">Review</option>
          <option value="completed">Completed</option>
          <option value="on_hold">On Hold</option>
        </select>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Updates */}
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Updates</h2>
              <button
                onClick={() => setShowUpdateForm(!showUpdateForm)}
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                + Post Update
              </button>
            </div>

            {showUpdateForm && (
              <div className="mt-4 space-y-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <input
                  type="text"
                  placeholder="Update title"
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800"
                />
                <textarea
                  placeholder="Update content..."
                  rows={3}
                  value={updateBody}
                  onChange={(e) => setUpdateBody(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowUpdateForm(false)}
                    className="px-4 py-2 text-sm text-zinc-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePostUpdate}
                    className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900"
                  >
                    Post
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="border-b border-zinc-100 pb-4 last:border-0 dark:border-zinc-800"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{update.title}</h3>
                    <span className="text-sm text-zinc-500">{update.created_at}</span>
                  </div>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">{update.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Files */}
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h2 className="text-lg font-semibold">Files</h2>
            <div className="mt-4 space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
                >
                  <div>
                    <span className="font-medium">{file.file_name}</span>
                    <span className="ml-2 text-sm text-zinc-500">by {file.uploaded_by}</span>
                  </div>
                  <span className="text-sm text-zinc-500">{file.created_at}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h2 className="text-lg font-semibold">Details</h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-zinc-500">Start Date</dt>
                <dd>{project.start_date}</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500">Estimated Completion</dt>
                <dd>{project.estimated_completion}</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500">Description</dt>
                <dd className="text-zinc-600 dark:text-zinc-400">{project.description}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
