'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WorkflowVisualization from './WorkflowVisualization';
import type { Workflow } from './WorkflowVisualization';

const workflows: Workflow[] = [
  {
    id: 'quickbooks-sync',
    name: 'QuickBooks → Cloud Sync',
    description: 'Automatically sync invoices and payments to your cloud database',
    color: '#2CA01C',
    steps: [
      { id: 'qb-trigger', label: 'New Invoice', icon: '📄', description: 'Invoice created in QuickBooks' },
      { id: 'qb-extract', label: 'Extract Data', icon: '🔍', description: 'Pull invoice details via API' },
      { id: 'qb-transform', label: 'Transform', icon: '⚙️', description: 'Map to your data schema' },
      { id: 'qb-validate', label: 'Validate', icon: '✅', description: 'Check data integrity' },
      { id: 'qb-store', label: 'Store', icon: '💾', description: 'Save to cloud database' },
      { id: 'qb-notify', label: 'Notify', icon: '🔔', description: 'Send Slack notification' },
    ],
  },
  {
    id: 'crm-pipeline',
    name: 'CRM → Marketing Pipeline',
    description: 'Sync leads from Salesforce to HubSpot campaigns automatically',
    color: '#00A1E0',
    steps: [
      { id: 'crm-lead', label: 'New Lead', icon: '👤', description: 'Lead enters Salesforce' },
      { id: 'crm-score', label: 'Score Lead', icon: '📊', description: 'AI-powered lead scoring' },
      { id: 'crm-segment', label: 'Segment', icon: '🎯', description: 'Assign to campaign segment' },
      { id: 'crm-enrich', label: 'Enrich', icon: '✨', description: 'Add firmographic data' },
      { id: 'crm-sync', label: 'Sync', icon: '🔄', description: 'Push to HubSpot' },
      { id: 'crm-automate', label: 'Automate', icon: '🚀', description: 'Trigger email sequence' },
    ],
  },
  {
    id: 'data-warehouse',
    name: 'Multi-Source → Data Warehouse',
    description: 'Consolidate data from multiple sources into a unified warehouse',
    color: '#FF9900',
    steps: [
      { id: 'dw-collect', label: 'Collect', icon: '📥', description: 'Gather from 10+ sources' },
      { id: 'dw-clean', label: 'Clean', icon: '🧹', description: 'Remove duplicates & errors' },
      { id: 'dw-normalize', label: 'Normalize', icon: '📐', description: 'Standardize formats' },
      { id: 'dw-merge', label: 'Merge', icon: '🔗', description: 'Combine related records' },
      { id: 'dw-load', label: 'Load', icon: '📤', description: 'Push to warehouse' },
      { id: 'dw-report', label: 'Report', icon: '📈', description: 'Update dashboards' },
    ],
  },
];

export default function WorkflowDemo() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(workflows[0]);

  return (
    <div className="w-full">
      {/* Workflow selector tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {workflows.map((workflow) => (
          <button
            key={workflow.id}
            onClick={() => setSelectedWorkflow(workflow)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedWorkflow.id === workflow.id
                ? 'bg-white text-black'
                : 'bg-[#18181B] text-[#A1A1AA] hover:text-white border border-[#27272A]'
            }`}
          >
            {workflow.name}
          </button>
        ))}
      </div>

      {/* Workflow description */}
      <motion.p
        key={selectedWorkflow.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-[#A1A1AA] mb-12 max-w-xl mx-auto"
      >
        {selectedWorkflow.description}
      </motion.p>

      {/* Workflow visualization */}
      <WorkflowVisualization workflow={selectedWorkflow} />
    </div>
  );
}
