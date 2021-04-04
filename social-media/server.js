const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJwt = require("express-jwt");
require('dotenv').config()

app.use(express.json())
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URI,
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
   
},
() => console.log("Connected to DB")
)

app.use("/auth", require("./routes/authRouter"))
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/product", require("./routes/productRouter"))

app.listen(5380, () => {
    console.log("Server is running on port 5800")
})