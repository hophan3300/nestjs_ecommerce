import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: { type: String },
    price: { type: Number, default: 0, required: true },
    countInStock: { type: Number },
    description: { type: String },
    colors: { type: mongoose.Schema.Types.ObjectId, ref: 'Color' },
    sizes: { type: mongoose.Schema.Types.ObjectId, ref: 'Size' },
  },
  {
    timestamps: true,
  },
);
