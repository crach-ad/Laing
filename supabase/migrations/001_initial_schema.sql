-- Laing Labs Client Hub Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'client')) DEFAULT 'client',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  industry TEXT,
  workflow_description TEXT,
  staff_size TEXT,
  pain_point TEXT,
  booking_datetime TIMESTAMPTZ,
  status TEXT NOT NULL CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL CHECK (status IN ('discovery', 'in_progress', 'review', 'completed', 'on_hold')) DEFAULT 'discovery',
  start_date DATE,
  estimated_completion DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project updates table
CREATE TABLE project_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Files table
CREATE TABLE files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  sender_role TEXT NOT NULL CHECK (sender_role IN ('admin', 'client')),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Case studies table
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  industry TEXT,
  problem TEXT,
  solution TEXT,
  outcome TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Leads policies (admin only)
CREATE POLICY "Admins can manage leads" ON leads
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Projects policies
CREATE POLICY "Clients can view own projects" ON projects
  FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Admins can manage all projects" ON projects
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Project updates policies
CREATE POLICY "Clients can view updates for own projects" ON project_updates
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM projects WHERE id = project_id AND client_id = auth.uid())
  );

CREATE POLICY "Admins can manage all updates" ON project_updates
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Files policies
CREATE POLICY "Clients can view files for own projects" ON files
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM projects WHERE id = project_id AND client_id = auth.uid())
  );

CREATE POLICY "Clients can upload files to own projects" ON files
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM projects WHERE id = project_id AND client_id = auth.uid())
  );

CREATE POLICY "Admins can manage all files" ON files
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Messages policies
CREATE POLICY "Clients can view messages for own projects" ON messages
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM projects WHERE id = project_id AND client_id = auth.uid())
  );

CREATE POLICY "Clients can send messages to own projects" ON messages
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM projects WHERE id = project_id AND client_id = auth.uid())
  );

CREATE POLICY "Admins can manage all messages" ON messages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Case studies policies (public read)
CREATE POLICY "Anyone can view case studies" ON case_studies
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage case studies" ON case_studies
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Indexes for performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_projects_client_id ON projects(client_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_project_updates_project_id ON project_updates(project_id);
CREATE INDEX idx_files_project_id ON files(project_id);
CREATE INDEX idx_messages_project_id ON messages(project_id);
CREATE INDEX idx_case_studies_slug ON case_studies(slug);
