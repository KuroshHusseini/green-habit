import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}
