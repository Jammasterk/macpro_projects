const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require("morgan")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/tracker-auth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

app.use('/auth', require('./routes/authRouter'))
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/expense", require("./routes/expenseRouter"))

app.listen(6200, ()=> {
    console.log("Server running on port 6200")
})