# Laing Labs Client Hub – Product Requirements Document

## Purpose
Provide a centralized platform where prospective and active clients can:
- Understand services
- View proof of work
- Book consultations
- Access project workspace
- Upload files
- Track updates

This is an operational interface for selling and running software projects, not a SaaS product.

---

## Users
- Public visitor
- Lead
- Client
- Admin

---

## Features

### Public Site
Routes:
- `/` Home
- `/work` Case studies
- `/process`
- `/book`
- `/login`

Home:
- Positioning statement
- Services
- Featured projects
- CTA booking

Work:
- Project cards
- Case study pages

---

### Booking
Capture:
- Name
- Company
- Email
- Phone
- Industry
- Workflow description
- Staff size
- Pain point
- Booking datetime

Create lead record after booking.

---

### Authentication
Email magic link (Supabase)
Roles:
- admin
- client

---

### Client Portal
Dashboard:
- Project name
- Status
- Last update
- Next action

Project Workspace:
- Overview
- Updates
- File uploads
- Requests

---

### Admin Dashboard
- Manage leads
- Convert to projects
- Post updates
- View files

---

## Database Schema

### users
id, email, role, created_at

### leads
id, name, email, company, phone, industry, workflow_description, staff_size, pain_point, booking_datetime, status

### projects
id, client_id, title, description, status, start_date, estimated_completion

### project_updates
id, project_id, title, body, created_at

### files
id, project_id, uploaded_by, file_url, created_at

### messages
id, project_id, sender_role, body, created_at

### case_studies
id, title, industry, problem, solution, outcome, thumbnail_url

---

## Non Functional
- Load < 1.5s
- Supabase RLS
- Vercel hosting

---

## MVP
- Case study gallery
- Booking form
- Auth
- Client dashboard
- Project updates
- File uploads
