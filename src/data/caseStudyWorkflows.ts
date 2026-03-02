import type { Workflow } from '@/components/WorkflowVisualization';

const caseStudyWorkflows: Record<string, Workflow> = {
  'project-alpha': {
    id: 'project-alpha',
    name: 'Healthcare Automation',
    description: 'Automated document processing pipeline for healthcare data entry',
    color: '#10B981',
    steps: [
      { id: 'pa-scan', label: 'Scan Document', icon: '📄', description: 'Digitize incoming paperwork' },
      { id: 'pa-ocr', label: 'OCR Extract', icon: '🔍', description: 'Extract text via OCR engine' },
      { id: 'pa-validate', label: 'Validate', icon: '✅', description: 'Check data against rules' },
      { id: 'pa-correct', label: 'Auto-Correct', icon: '🔧', description: 'Fix common errors automatically' },
      { id: 'pa-store', label: 'Store in EHR', icon: '💾', description: 'Save to electronic health record' },
      { id: 'pa-notify', label: 'Notify Staff', icon: '🔔', description: 'Alert team of completion' },
    ],
  },
  'project-beta': {
    id: 'project-beta',
    name: 'Finance Dashboard',
    description: 'Real-time data aggregation and analytics pipeline',
    color: '#3B82F6',
    steps: [
      { id: 'pb-ingest', label: 'Ingest Sources', icon: '📥', description: 'Pull from 12+ data feeds' },
      { id: 'pb-normalize', label: 'Normalize', icon: '📐', description: 'Standardize formats & units' },
      { id: 'pb-aggregate', label: 'Aggregate', icon: '🔗', description: 'Combine related metrics' },
      { id: 'pb-analyze', label: 'Analyze', icon: '📊', description: 'Run predictive analytics' },
      { id: 'pb-visualize', label: 'Visualize', icon: '📈', description: 'Render live dashboards' },
      { id: 'pb-alert', label: 'Alert', icon: '🚨', description: 'Trigger threshold alerts' },
    ],
  },
  'project-gamma': {
    id: 'project-gamma',
    name: 'Inventory Intelligence',
    description: 'Predictive inventory management and auto-restocking pipeline',
    color: '#F59E0B',
    steps: [
      { id: 'pg-sales', label: 'Sales Data', icon: '🛒', description: 'Collect real-time sales data' },
      { id: 'pg-trends', label: 'Trend Analysis', icon: '📊', description: 'Identify demand patterns' },
      { id: 'pg-predict', label: 'Predict Demand', icon: '🔮', description: 'Forecast future needs' },
      { id: 'pg-optimize', label: 'Optimize Stock', icon: '⚖️', description: 'Calculate ideal levels' },
      { id: 'pg-restock', label: 'Auto-Restock', icon: '📦', description: 'Place orders automatically' },
      { id: 'pg-confirm', label: 'Confirm', icon: '✅', description: 'Verify order fulfillment' },
    ],
  },
};

export default caseStudyWorkflows;
