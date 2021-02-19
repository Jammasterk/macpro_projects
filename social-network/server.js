const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const expressJwt = require("express-jwt")
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-auth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("The mongoose server is running")
)

app.use("/auth", require('./routes/authRouter'))
app.use(
    "/api",
    expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
  );
  app.use("/api/question", require("./routes/questionRouter"))
  app.use("/", require("./routes/questionRouter"))

app.listen(7200, () => {
    console.log('The server is running on PORT 7200')
}) 