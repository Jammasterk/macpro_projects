const functions = require("firebase-functions");
const express = require('express')
const firebase = require('firebase')
const app = express()

const FBAuth = require("./util/fbAuth")

// Imported Handlers

const {getAllScreams, postOneScream} = require('./handlers/screams')
const {signup, login, uploadImage}= require("./handlers/users")

// Authorization Routes

app.post("/signup", signup)
app.post('/login', login)

// Scream routes

app.get("/screams", getAllScreams)
app.post("/screams", FBAuth, postOneScream);
app.post("/user/image", FBAuth, uploadImage)

exports.api = functions.https.onRequest(app)