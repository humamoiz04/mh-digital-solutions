import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function getDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb
  }

  const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL

  if (!mongoUri) {
    throw new Error("MongoDB connection string is not configured. Please set MONGODB_URI environment variable.")
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(mongoUri)
    await cachedClient.connect()
  }

  cachedDb = cachedClient.db("mh-digital")
  return cachedDb
}

export async function closeDatabase(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
    cachedDb = null
  }
}
