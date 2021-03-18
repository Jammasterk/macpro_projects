const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJwt = require("express-jwt")
require("dotenv").config();

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/social-media-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("connected to database")
)

app.use("/auth", require("./routes/authRouter"))

app.listen(6789, () => {
    console.log("Server is connected on port 4567")
})