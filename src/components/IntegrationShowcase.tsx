'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const integrations = [
  { id: 'quickbooks', name: 'QuickBooks', icon: '💰', color: '#2CA01C', category: 'Finance' },
  { id: 'salesforce', name: 'Salesforce', icon: '☁️', color: '#00A1E0', category: 'CRM' },
  { id: 'aws', name: 'AWS', icon: '🔶', color: '#FF9900', category: 'Cloud' },
  { id: 'slack', name: 'Slack', icon: '💬', color: '#4A154B', category: 'Communication' },
  { id: 'hubspot', name: 'HubSpot', icon: '🧲', color: '#FF7A59', category: 'Marketing' },
  { id: 'postgres', name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'Database' },
];

// Data packet component that travels along paths
function DataPacket({ delay, duration, color }: { delay: number; duration: number; color: string }) {
  return (
    <motion.circle
      r="4"
      fill={color}
      filter="url(#glow)"
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: '100%' }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ offsetPath: 'inherit' }}
    />
  );
}

// Animated connection line
function ConnectionLine({
  startX,
  startY,
  endX,
  endY,
  color,
  delay = 0
}: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  delay?: number;
}) {
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2 - 30;
  const pathD = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

  return (
    <g>
      {/* Base line */}
      <motion.path
        d={pathD}
        stroke="#27272A"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: delay * 0.2 }}
      />
      {/* Animated glow line */}
      <motion.path
        d={pathD}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          delay: delay * 0.2 + 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      {/* Data packets */}
      <motion.circle
        r="5"
        fill={color}
        filter="url(#glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 + 0.5 }}
      >
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          begin={`${delay * 0.3 + 1}s`}
          path={pathD}
        />
      </motion.circle>
    </g>
  );
}

// Integration node
function IntegrationNode({
  integration,
  x,
  y,
  delay,
  isCenter = false,
  isActive = false,
  onClick,
}: {
  integration: typeof integrations[0];
  x: number;
  y: number;
  delay: number;
  isCenter?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const size = isCenter ? 80 : 60;

  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: delay * 0.1
      }}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {/* Outer glow ring */}
      {isActive && (
        <motion.circle
          cx={x}
          cy={y}
          r={size / 2 + 10}
          fill="none"
          stroke={integration.color}
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Background circle */}
      <motion.circle
        cx={x}
        cy={y}
        r={size / 2}
        fill="#18181B"
        stroke={isActive ? integration.color : '#27272A'}
        strokeWidth="2"
        whileHover={{ scale: 1.1, stroke: integration.color }}
        transition={{ duration: 0.2 }}
      />

      {/* Icon */}
      <text
        x={x}
        y={y + 6}
        textAnchor="middle"
        fontSize={isCenter ? '28' : '22'}
        style={{ pointerEvents: 'none' }}
      >
        {integration.icon}
      </text>

      {/* Label */}
      <motion.text
        x={x}
        y={y + size / 2 + 20}
        textAnchor="middle"
        fill={isActive ? '#FFFFFF' : '#A1A1AA'}
        fontSize="12"
        fontWeight="500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.3 }}
      >
        {integration.name}
      </motion.text>
    </motion.g>
  );
}

export default function IntegrationShowcase() {
  const [activeIntegration, setActiveIntegration] = useState<string | null>(null);

  // Center position for the hub
  const centerX = 300;
  const centerY = 200;
  const radius = 140;

  // Calculate positions for outer nodes in a circle
  const nodePositions = integrations.map((_, index) => {
    const angle = (index * 2 * Math.PI) / integrations.length - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  const centerHub = {
    id: 'eightlabs',
    name: 'Your Platform',
    icon: '⚡',
    color: '#00D4FF',
    category: 'Hub',
  };

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 600 420"
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        {/* Definitions for effects */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {integrations.map((integration, index) => (
          <ConnectionLine
            key={`line-${integration.id}`}
            startX={nodePositions[index].x}
            startY={nodePositions[index].y}
            endX={centerX}
            endY={centerY}
            color={activeIntegration === integration.id ? integration.color : '#00D4FF'}
            delay={index}
          />
        ))}

        {/* Outer integration nodes */}
        {integrations.map((integration, index) => (
          <IntegrationNode
            key={integration.id}
            integration={integration}
            x={nodePositions[index].x}
            y={nodePositions[index].y}
            delay={index + 1}
            isActive={activeIntegration === integration.id}
            onClick={() => setActiveIntegration(
              activeIntegration === integration.id ? null : integration.id
            )}
          />
        ))}

        {/* Center hub */}
        <IntegrationNode
          integration={centerHub}
          x={centerX}
          y={centerY}
          delay={0}
          isCenter
          isActive
        />
      </svg>

      {/* Integration details */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {activeIntegration ? (
          <motion.div
            key={activeIntegration}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-3 rounded-full bg-[#18181B] border border-[#27272A]"
          >
            <span className="text-[#00D4FF] font-medium">
              {integrations.find(i => i.id === activeIntegration)?.name}
            </span>
            <span className="text-[#71717A] mx-2">→</span>
            <span className="text-white">Real-time sync enabled</span>
          </motion.div>
        ) : (
          <p className="text-[#71717A]">
            Click an integration to see the data flow
          </p>
        )}
      </motion.div>
    </div>
  );
}
