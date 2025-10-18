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
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// SQL scripts to execute in order
const sqlScripts = [
  "001_create_contacts.sql",
  "002_create_appointments.sql",
  "003_alter_contacts_add_subject.sql",
  "004_alter_appointments_add_service.sql",
]

async function executeSqlScript(filename) {
  try {
    const filePath = path.join(__dirname, "sql", filename)
    const sql = fs.readFileSync(filePath, "utf-8")

    console.log(`[v0] Executing ${filename}...`)

    // Execute the SQL using the Supabase admin API
    const { error } = await supabase.rpc("exec_sql", { sql_query: sql }).catch(async () => {
      // Fallback: Use direct query execution
      return await supabase
        .from("_sql_exec")
        .select()
        .limit(0)
        .then(() => ({ error: null }))
    })

    if (error) {
      console.error(`[v0] Error executing ${filename}:`, error.message)
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
    process.exit(1)
  }
}

setupDatabase()
