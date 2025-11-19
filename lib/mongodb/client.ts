import { MongoClient, Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function getDatabase(): Promise<Db> {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables")
  }

  if (cachedDb) {
    return cachedDb
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGODB_URI)
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
