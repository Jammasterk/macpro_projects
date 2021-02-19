const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    subject:{
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true
    },
    questionBody:{
        type: String,
        required: true
    },
    upVote:{
        type: Number,
        default: 0
    },
    downVote:{
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    }
})

module.exports = mongoose.model("Question", questionSchema)