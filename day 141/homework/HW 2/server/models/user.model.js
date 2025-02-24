import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  model: String,
  brand: String,
  year: Number,
  description: String,
  price: Number,
  requestCount: { type: Number, default: 0 },
  maxRequests: { type: Number, default: 5 }
});

export default mongoose.model('Phone', phoneSchema);
