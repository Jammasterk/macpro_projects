const mongoose = require("mongoose");
const Schema = mongoose.Schema


const userSchema = new mongoose.Schema({
  name: {
    type: String,
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
    required: true
  },
});
module.exports = mongoose.model("User", userSchema);
