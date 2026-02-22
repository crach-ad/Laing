'use client';

import { useState, use } from 'react';
import Link from 'next/link';

// Placeholder data
const project = {
  id: '1',
  title: 'Website Redesign',
  description: 'Complete redesign of the company website with new branding.',
  status: 'in_progress',
  start_date: '2024-01-01',
  estimated_completion: '2024-03-01',
};

const updates = [
  {
    id: '1',
    title: 'Mockups completed',
    body: 'We have finished the initial mockups for review. Please check the attached files and provide feedback.',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    title: 'Project kickoff',
    body: 'Project has been kicked off. Discovery phase begins.',
    created_at: '2024-01-01',
  },
];

const files = [
  {
    id: '1',
    file_name: 'mockup-v1.pdf',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    file_name: 'requirements.docx',
    created_at: '2024-01-01',
  },
];

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<'overview' | 'updates' | 'files' | 'requests'>('overview');

  return (
    <div>
      <Link
        href="/dashboard"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        &larr; Back to Dashboard
      </Link>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-zinc-200 dark:border-zinc-800">
        <nav className="-mb-px flex space-x-8">
          {(['overview', 'updates', 'files', 'requests'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 pb-4 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-zinc-900 text-zinc-900 dark:border-white dark:text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {activeTab === 'overview' && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-500">Status</h3>
              <p className="mt-1 text-lg capitalize">{project.status.replace('_', ' ')}</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-500">Start Date</h3>
              <p className="mt-1 text-lg">{project.start_date}</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-medium text-zinc-500">Estimated Completion</h3>
              <p className="mt-1 text-lg">{project.estimated_completion}</p>
            </div>
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="space-y-6">
            {updates.map((update) => (
              <div
                key={update.id}
                className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{update.title}</h3>
                  <span className="text-sm text-zinc-500">{update.created_at}</span>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{update.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'files' && (
          <div>
            <div className="mb-6">
              <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                Upload File
              </button>
            </div>
            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <span>{file.file_name}</span>
                  <span className="text-sm text-zinc-500">{file.created_at}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="rounded-lg border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
            <p className="text-zinc-500">No pending requests.</p>
            <button className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
              Submit a Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
