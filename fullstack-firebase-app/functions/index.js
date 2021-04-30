const functions = require("firebase-functions");
const express = require('express')
const firebase = require('firebase')
const app = express()

const FBAuth = require("./util/fbAuth")

const {db} = require('./util/admin')

// Imported Handlers

const {getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream, deleteScream} = require('./handlers/screams')
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser}= require("./handlers/users")

// Authorization Routes



// Scream routes

app.get("/screams", getAllScreams)
app.post("/screams", FBAuth, postOneScream);
app.get('/screams/:screamId', getScream)
app.get('/screams/:screamId/like', FBAuth, likeScream)
app.get('/screams/:screamId/unlike', FBAuth, unlikeScream)
app.post('/screams/:screamId/comment', FBAuth, commentOnScream)
app.delete('/screams/:screamId', FBAuth, deleteScream)

// User Routes

app.post("/signup", signup)
app.post('/login', login)
app.post("/user/image", FBAuth, uploadImage)
app.post("/user", FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)

exports.api = functions.https.onRequest(app)

// Scream notifications

exports.createNotificationOnLike = functions.firestore.document('likes/{id}')
.onCreate(snapshot => {
    db.doc(`/screams/${snapshot.data().screamId}`).get()
    .then(doc => {
       if(doc.exists){
           return db.doc(`/notifications/${snapshot.id}`).set({
               createdAt: new Date().toISOString(),
               recipient: doc.data().userHandle,
               sender: snapshot.data().userHandle,
               type: "like",
               read: false,
               screamId: doc.id
           })
       } 
    })
    .then(() => {
        return
    })
    .catch(err => {
        console.error(err)
        return
    })
})

exports.deleteNotificationOnUnlike = functions.firestore.document('likes/{id}')
.onDelete((snapshot) => {
    db.doc(`/notifications/${snapshot.id}`)
    .delete()
    .then(() => {
        return
    })
    .catch(err => {
        console.error(err)
    })
})

exports.createNotificationOnComment = functions.firestore.document('comments/{id}')
.onCreate((snapshot) => {
    db.doc(`/screams/${snapshot.data().screamId}`).get()
    .then(doc => {
       if(doc.exists){
           return db.doc(`/notifications/${snapshot.id}`).set({
               createdAt: new Date().toISOString(),
               recipient: doc.data().userHandle,
               sender: snapshot.data().userHandle,
               type: "comment",
               read: false,
               screamId: doc.id
           })
       } 
    })
    .then(() => {
        return
    })
    .catch(err => {
        console.error(err)
        return
    })
})

