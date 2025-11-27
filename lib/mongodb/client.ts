import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function getDatabase(): Promise<Db> {
  // Check for MongoDB URI at runtime, not at module load time
  const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL

  if (!mongoUri) {
    console.error("[v0] MONGODB_URI or MONGODB_URL not found in environment variables")
    throw new Error(
      "MongoDB connection string is not configured. Please set MONGODB_URI or MONGODB_URL environment variable.",
    )
  }

  if (cachedDb) {
    console.log("[v0] Using cached MongoDB connection")
    return cachedDb
  }

  if (!cachedClient) {
    console.log("[v0] Creating new MongoDB connection to:", mongoUri.substring(0, 20) + "...")
    cachedClient = new MongoClient(mongoUri)
    await cachedClient.connect()
    console.log("[v0] MongoDB connected successfully")
  }

  cachedDb = cachedClient.db("mh-digital")
  return cachedDb
}

export async function closeDatabase(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
    cachedDb = null
    console.log("[v0] MongoDB connection closed")
  }
}
