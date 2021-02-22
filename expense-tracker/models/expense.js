const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    date:{
        type: String,
        required: true
    },
    mortgage:{
        type: Number,
        required: false
    },
    utilities:{
        type: Number,
        required: false
    },
    groceries: {
        type: Number,
        required: false
    },
    car:{
        type: Number,
        required: false
    },
    entertainment:{
        type: Number,
        required: false
    },
    other:{
        type: Number,
        required: false
    },
    memo:{
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    }
})

module.exports = mongoose.model("Expense", expenseSchema)