const express = require('express')
const http = require("http")
const app = express()
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)


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

let users = [];

const messages = {
    general: [],
    questions: [],
    gaming: [],
    homework: []
}

io.on("connection", (socket) => {
  socket.on("join server", (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
    io.emit("new User", users);
  });
  socket.on("join room", (roomName, cb) => {
      socket.join(roomName)
      cb(messages[roomName])
      
  })
  socket.on("send message", ({content, to, sender, chatName, isChannel}) => {
      if(isChannel){
          const payload = {
              content,
              chatName,
              sender
          };
          socket.to(to).emit("new message", payload)
      }
      else{
          const payload = {
              content,
              chatName: sender,
              sender
          };
          socket.to(to).emit("new message", payload);
      }
      if(messages[chatName]){
          messages[chatName].push({
              sender,
              content
          })
      }
  })
  socket.on("disconnect", () => {
      users = users.filter(u => u.id !== socket.id);
      io.emit("new user", users)
  })
});

app.listen(6789, () => {
    console.log("Server is connected on port 4567")
})