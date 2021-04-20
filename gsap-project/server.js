const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/gsap-auth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("Connected to DB")
)



app.use("/auth", require("./routes/authRouter"));
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/profile", require("./routes/profileRouter"))
app.use('/api/upload', require("./routes/userRouter"))
 
app.listen(5656, () => {
    console.log(`The server is running on port 5656`)
})