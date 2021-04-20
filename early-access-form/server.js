const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/early-access', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("Connected to Database")
)

app.use("/access", require('./route/accessRouter'))

app.listen(9300, () => {
    console.log("The server is running on port 9300")
})