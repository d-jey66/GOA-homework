import { Schema, models, model } from "mongoose";
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    image: { type: String, default: "" },
    inStock: { type: Boolean, default: true },
    category: { type: String, default: "Mac" },
  },
  { timestamps: true },
);
export default models.Product || model("Product", ProductSchema);
