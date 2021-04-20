const mongoose = require("mongoose")
const Schema = mongoose.Schema

const photoSchema = new Schema({
  image: {
    data: Buffer,
    contentType: String,
    // required: true
  },
});

module.exports = mongoose.model("Photo", photoSchema)