const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/todo-authentication", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
    () => console.log("server is started")
)

app.use("/auth", require("./routes/userRouter"))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use('/api/todo', require("./routes/todoRouter"))

app.listen(9000, () => {
    console.log("the server is running on port 9000")
})