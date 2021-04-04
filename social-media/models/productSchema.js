const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  discount: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema)