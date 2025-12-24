import mongoose from "mongoose"
const uri = process.env.MONGODB_URI as string
let connected = false
export async function dbConnect() {
if (connected) return
await mongoose.connect(uri)
connected = true
}