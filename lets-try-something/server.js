const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/-test-progect", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: false
},
() => console.log("Server is started")
)

app.use('/photo', require('./routes/photoRouter.js'))

app.listen(9000, () => {
    console.log("Server started on port 9000")
})