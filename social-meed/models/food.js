const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
  recipe: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  love: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Food", foodSchema)

