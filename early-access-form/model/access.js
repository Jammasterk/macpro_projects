const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accessSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Access", accessSchema)