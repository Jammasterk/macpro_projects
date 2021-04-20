const mongoose = require('mongoose')
const { modelName } = require('./authentication')
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
  like:{
      type: Boolean,
      default: false
  },
  dislike:{
      type: Boolean,
      default: false
  },
  lookingFor:{
    type: String,
    // required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Profile", profileSchema)