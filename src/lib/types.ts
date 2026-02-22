// Database types based on PRD schema

export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  workflow_description: string;
  staff_size: string;
  pain_point: string;
  booking_datetime: string;
  status: LeadStatus;
  created_at: string;
}

export type ProjectStatus = 'discovery' | 'in_progress' | 'review' | 'completed' | 'on_hold';

export interface Project {
  id: string;
  client_id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  start_date: string;
  estimated_completion: string;
  created_at: string;
}

export interface ProjectUpdate {
  id: string;
  project_id: string;
  title: string;
  body: string;
  created_at: string;
}

export interface ProjectFile {
  id: string;
  project_id: string;
  uploaded_by: string;
  file_url: string;
  file_name: string;
  created_at: string;
}

export type MessageSenderRole = 'admin' | 'client';

export interface Message {
  id: string;
  project_id: string;
  sender_role: MessageSenderRole;
  body: string;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  thumbnail_url: string;
  created_at: string;
}

// Form types
export interface BookingFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  workflow_description: string;
  staff_size: string;
  pain_point: string;
  booking_datetime: string;
}
