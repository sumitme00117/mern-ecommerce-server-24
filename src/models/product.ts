import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    photo: {
      type: String,
      required: [true, "Please add Photo"],
    },
    price: {
      type: Number,
      required: [true, "Please add Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please add stock"],
    },
    category: {
      type: String,
      required: [true, "Please enter product category"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", schema);
