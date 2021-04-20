const express = require("express")
const photoRouter = express.Router()
const Photo = require("../models/photoSchema")

photoRouter.get("/", (req, res, next) => {
    Photo.find((err, photos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(photos)
    })
})

photoRouter.post("/", (req, res, next) => {
    // req.body.user = req.user._id
    const newPhoto = Photo(
      req.body
    )
    newPhoto.save((err, savedPhoto) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPhoto)
    })
})

module.exports = photoRouter