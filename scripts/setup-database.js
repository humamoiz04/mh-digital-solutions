import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Initialize Supabase client with service role key for full database access
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("[v0] Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are required")
  console.error("[v0] Please set these in your Vercel project settings under 'Environment Variables'")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

// SQL scripts to execute in order
const sqlScripts = [
  "001_create_contacts.sql",
  "002_create_appointments.sql",
  "003_alter_contacts_add_subject.sql",
  "004_alter_appointments_add_service.sql",
  "005_setup_supabase_rls.sql",
]

async function executeSqlScript(filename) {
  try {
    const filePath = path.join(__dirname, "sql", filename)
    const sql = fs.readFileSync(filePath, "utf-8")

    console.log(`[v0] Executing ${filename}...`)

    const { data, error } = await supabase.rpc("exec_sql", { sql_query: sql }).catch(async () => {
      // Fallback: Execute SQL directly using the admin API
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseServiceKey}`,
            apikey: supabaseServiceKey,
          },
          body: JSON.stringify({ sql_query: sql }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          return { error: errorData }
        }

        return { data: await response.json(), error: null }
      } catch (err) {
        return { error: err }
      }
    })

    if (error) {
      console.error(`[v0] Error executing ${filename}:`, error.message || JSON.stringify(error))
      return false
    }

    console.log(`[v0] ✓ ${filename} executed successfully`)
    return true
  } catch (error) {
    console.error(`[v0] Error reading or executing ${filename}:`, error.message)
    return false
  }
}

async function setupDatabase() {
  console.log("[v0] Starting database setup...")
  console.log(`[v0] Supabase URL: ${supabaseUrl}`)
  console.log("[v0] Using service role key for authentication")

  let successCount = 0
  let failureCount = 0

  for (const script of sqlScripts) {
    const success = await executeSqlScript(script)
    if (success) {
      successCount++
    } else {
      failureCount++
    }
  }

  console.log(`[v0] Database setup complete: ${successCount} succeeded, ${failureCount} failed`)

  if (failureCount > 0) {
    console.error("[v0] Some scripts failed. Please check the errors above.")
    console.error("[v0] Troubleshooting:")
    console.error("[v0] 1. Verify SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set correctly")
    console.error("[v0] 2. Check that your Supabase project is active")
    console.error("[v0] 3. Ensure the service role key has database access permissions")
    process.exit(1)
  }

  console.log("[v0] ✓ All database scripts executed successfully!")
}

setupDatabase()
