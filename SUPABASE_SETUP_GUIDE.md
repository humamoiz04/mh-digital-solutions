# Supabase Database Setup Guide

## Overview
This guide explains how to properly set up your Supabase database with the provided SQL scripts.

## Prerequisites
- Supabase project created
- Environment variables configured in Vercel
- Access to Supabase dashboard

## Step-by-Step Setup

### 1. Run SQL Scripts in Supabase SQL Editor

Go to your Supabase dashboard → SQL Editor and run these scripts in order:

#### Script 1: Create Contacts Table
\`\`\`bash
Copy content from: scripts/sql/001_create_contacts.sql
Paste into Supabase SQL Editor
Click "Run"
\`\`\`

#### Script 2: Create Appointments Table
\`\`\`bash
Copy content from: scripts/sql/002_create_appointments.sql
Paste into Supabase SQL Editor
Click "Run"
\`\`\`

#### Script 3: Alter Contacts (Add Subject)
\`\`\`bash
Copy content from: scripts/sql/003_alter_contacts_add_subject.sql
Paste into Supabase SQL Editor
Click "Run"
\`\`\`

#### Script 4: Alter Appointments (Add Service)
\`\`\`bash
Copy content from: scripts/sql/004_alter_appointments_add_service.sql
Paste into Supabase SQL Editor
Click "Run"
\`\`\`

#### Script 5: Setup RLS Policies
\`\`\`bash
Copy content from: scripts/sql/005_setup_supabase_rls.sql
Paste into Supabase SQL Editor
Click "Run"
\`\`\`

### 2. Verify Tables Were Created

In Supabase Dashboard:
1. Go to "Table Editor"
2. You should see:
   - `contacts` table with columns: id, created_at, name, email, phone, message, page_path, user_id, subject
   - `appointments` table with columns: id, created_at, name, email, phone, date, time, user_id, service

### 3. Check Row Level Security (RLS)

1. Go to "Authentication" → "Policies"
2. Verify policies are created for both tables
3. Policies should allow:
   - Anonymous users to insert
   - Authenticated users to view their own records
   - Service role to view all records

### 4. Test the Connection

Run the setup script:
\`\`\`bash
node scripts/setup-database.js
\`\`\`

This will test the connection and verify all tables are properly configured.

## Troubleshooting

### "Tenant or user not found" Error
**Solution**: Make sure you're using the service role key in the setup script, not the anon key.

### Tables Not Appearing
**Solution**: 
1. Refresh the Supabase dashboard
2. Check the SQL Editor for error messages
3. Verify all scripts ran successfully

### RLS Policy Errors
**Solution**:
1. Go to Authentication → Policies
2. Delete conflicting policies
3. Re-run the RLS setup script

### Connection Issues
**Solution**:
1. Verify environment variables are set in Vercel
2. Check that SUPABASE_SERVICE_ROLE_KEY is correct
3. Ensure Supabase project is active

## Environment Variables Required

Make sure these are set in your Vercel project:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (for server-side operations)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon key (for client-side operations)
- `NEXT_PUBLIC_SUPABASE_URL` - Public Supabase URL

## Next Steps

1. Update your form components to use the Supabase client
2. Create API routes to handle form submissions
3. Build an admin dashboard to view submissions
4. Set up email notifications for new submissions

## Support

If you encounter issues:
1. Check Supabase documentation: https://supabase.com/docs
2. Review error messages in Supabase logs
3. Verify all environment variables are correct
