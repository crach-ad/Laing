'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WorkflowStep {
  id: string;
  label: string;
  icon: string;
  description: string;
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  color: string;
}

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

function WorkflowStepCard({
  step,
  index,
  isActive,
  isComplete,
  color,
}: {
  step: WorkflowStep;
  index: number;
  isActive: boolean;
  isComplete: boolean;
  color: string;
}) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Connector line */}
      {index > 0 && (
        <div className="absolute -left-[calc(50%-20px)] top-8 w-[calc(100%-40px)] h-0.5">
          <motion.div
            className="h-full"
            style={{ backgroundColor: color }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isComplete || isActive ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <div className="absolute inset-0 bg-[#27272A]" style={{ zIndex: -1 }} />
        </div>
      )}

      {/* Step circle */}
      <motion.div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 border-2 transition-colors duration-300`}
        style={{
          backgroundColor: isActive || isComplete ? color + '20' : '#18181B',
          borderColor: isActive || isComplete ? color : '#27272A',
        }}
        animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0, repeatDelay: 0.5 }}
      >
        {step.icon}

        {/* Pulse effect when active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${color}` }}
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Label */}
      <motion.p
        className={`mt-3 text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-white' : isComplete ? 'text-[#A1A1AA]' : 'text-[#71717A]'
        }`}
      >
        {step.label}
      </motion.p>

      {/* Description tooltip on active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg text-xs text-center whitespace-nowrap"
            style={{ backgroundColor: color + '30', color: color }}
          >
            {step.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WorkflowDemo() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(workflows[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance through steps
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= selectedWorkflow.steps.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying, selectedWorkflow]);

  // Reset step when workflow changes
  useEffect(() => {
    setActiveStep(0);
  }, [selectedWorkflow.id]);

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

      {/* Steps visualization */}
      <div className="overflow-x-auto pb-20">
        <motion.div
          key={selectedWorkflow.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between min-w-[700px] max-w-4xl mx-auto px-4"
        >
          {selectedWorkflow.steps.map((step, index) => (
            <WorkflowStepCard
              key={step.id}
              step={step}
              index={index}
              isActive={index === activeStep}
              isComplete={index < activeStep}
              color={selectedWorkflow.color}
            />
          ))}
        </motion.div>
      </div>

      {/* Playback controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-2 rounded-full bg-[#18181B] border border-[#27272A] text-white hover:border-[#00D4FF] transition-colors duration-300 flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <span>⏸</span> Pause
            </>
          ) : (
            <>
              <span>▶️</span> Play
            </>
          )}
        </button>
        <button
          onClick={() => setActiveStep(0)}
          className="px-6 py-2 rounded-full bg-[#18181B] border border-[#27272A] text-white hover:border-[#00D4FF] transition-colors duration-300 flex items-center gap-2"
        >
          <span>🔄</span> Restart
        </button>
      </div>

      {/* Data packet animation */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#18181B] border border-[#27272A]">
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: selectedWorkflow.color }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[#A1A1AA]">Processing</span>
          <span className="text-white font-mono">
            Step {activeStep + 1} of {selectedWorkflow.steps.length}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
