const functions = require("firebase-functions");
const admin = require("firebase-admin")
const express = require("express")
const app = express()

admin.initializeApp()

exports.getScreams = functions.https.onRequest((req, res) => {

})

app.get('/screams', (req, res) => {
        admin
          .firestore()
          .collection("screams")
          .orderBy('createdAt', 'desc')
          .get()
          .then((data) => {
            let screams = [];
            data.forEach((doc) => {
              screams.push({
                  screamId: doc.id,
                  body: doc.data().body,
                  userHandle: doc.data().userHandle,
                  createdAt: doc.data().createdAt
              });
            });
            return res.json(screams);
          })
          .catch((err) => {
            console.log(err);
          });
})

app.post('/screams', (req, res) => {
        if (req.method !== "POST") {
          return res.status(400).json({ error: "Method not allowed" });
        }
        const newScream = {
          body: req.body.body,
          userHandle: req.body.userHandle,
          createdAt: new Date().toISOString(),
        };
        admin
          .firestore()
          .collection("screams")
          .add(newScream)
          .then((doc) => {
            res.json({ message: `document ${doc.id} created successfully` });
          })
          .catch((err) => {
            res.status(500).json({ error: "Something went wrong" });
            console.error(err);
          });
})



exports.createScream = functions.https.onRequest((req, res) => {

});

// https://baseurl.com/screams !=

exports.api = functions.https.onRequest(app)
