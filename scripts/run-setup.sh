#!/bin/bash

set -e

echo "[v0] Setting up MH Digital Solution database..."

# Check for required environment variables
if [ -z "$SUPABASE_URL" ]; then
  echo "[v0] Error: SUPABASE_URL is not set"
  exit 1
fi

if [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
  echo "[v0] Error: SUPABASE_SERVICE_ROLE_KEY is not set"
  exit 1
fi

# Run the setup script
node scripts/setup-database.js

echo "[v0] Database setup complete!"
