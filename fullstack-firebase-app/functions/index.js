const functions = require("firebase-functions");
const express = require('express')
const firebase = require('firebase')
const app = express()

const FBAuth = require("./util/fbAuth")

// Imported Handlers

const {getAllScreams, postOneScream} = require('./handlers/screams')
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser}= require("./handlers/users")

// Authorization Routes



// Scream routes

app.get("/screams", getAllScreams)
app.post("/screams", FBAuth, postOneScream);
// app.get('/screams/:screamId', getScream)

// User Routes

app.post("/signup", signup)
app.post('/login', login)
app.post("/user/image", FBAuth, uploadImage)
app.post("/user", FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)

exports.api = functions.https.onRequest(app)