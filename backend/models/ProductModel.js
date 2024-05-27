import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  image: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("products", ProductSchema);

export default Product;
