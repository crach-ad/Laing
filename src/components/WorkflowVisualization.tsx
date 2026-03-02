'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface WorkflowStep {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  color: string;
}

function WorkflowStepCard({
  step,
  index,
  isActive,
  isComplete,
  color,
  compact,
}: {
  step: WorkflowStep;
  index: number;
  isActive: boolean;
  isComplete: boolean;
  color: string;
  compact?: boolean;
}) {
  const circleSize = compact ? 'w-10 h-10' : 'w-16 h-16';
  const iconSize = compact ? 'text-base' : 'text-2xl';
  const labelClass = compact ? 'text-xs mt-1.5' : 'text-sm mt-3';

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Connector line */}
      {index > 0 && (
        <div
          className={`absolute top-${compact ? '5' : '8'} h-0.5`}
          style={{
            left: compact ? 'calc(-50% + 10px)' : 'calc(-50% + 20px)',
            width: compact ? 'calc(100% - 20px)' : 'calc(100% - 40px)',
          }}
        >
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
        className={`relative ${circleSize} rounded-full flex items-center justify-center ${iconSize} z-10 border-2 transition-colors duration-300`}
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
        className={`${labelClass} font-medium transition-colors duration-300 ${
          isActive ? 'text-white' : isComplete ? 'text-[#A1A1AA]' : 'text-[#71717A]'
        }`}
      >
        {step.label}
      </motion.p>

      {/* Description tooltip on active (full mode only) */}
      {!compact && (
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
      )}
    </motion.div>
  );
}

export default function WorkflowVisualization({
  workflow,
  autoPlay = true,
  showControls = true,
  compact = false,
  className = '',
}: {
  workflow: Workflow;
  autoPlay?: boolean;
  showControls?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-advance through steps
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= workflow.steps.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying, workflow]);

  // Reset step when workflow changes
  useEffect(() => {
    setActiveStep(0);
  }, [workflow.id]);

  return (
    <div className={`w-full ${className}`}>
      {/* Steps visualization */}
      <div className={compact ? 'overflow-hidden px-2 py-4' : 'overflow-x-auto pb-20'}>
        <motion.div
          key={workflow.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`flex justify-between ${
            compact ? 'min-w-0 px-1' : 'min-w-[700px] max-w-4xl mx-auto px-4'
          }`}
        >
          {workflow.steps.map((step, index) => (
            <WorkflowStepCard
              key={step.id}
              step={step}
              index={index}
              isActive={index === activeStep}
              isComplete={index < activeStep}
              color={workflow.color}
              compact={compact}
            />
          ))}
        </motion.div>
      </div>

      {/* Playback controls (full mode only) */}
      {showControls && !compact && (
        <>
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
                style={{ backgroundColor: workflow.color }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-[#A1A1AA]">Processing</span>
              <span className="text-white font-mono">
                Step {activeStep + 1} of {workflow.steps.length}
              </span>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
