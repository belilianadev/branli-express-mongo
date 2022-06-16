import mongoose from "mongoose";

export default async function connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.URL_MONGODB as string);
    console.log("Database is connected");
  } catch (error) {
    console.error("Error Database is not connected: " + error);
    process.exit(1);
  }
}
