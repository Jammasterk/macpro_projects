const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    memberSince:{
        type: Date,
        default: Date.now
    }
})

authSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err);
        user.password = hash
        next()
    })
})

authSchema.methods.checkPassword = function (passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

authSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password;
    return user
}

module.exports = mongoose.model("Auth", authSchema)