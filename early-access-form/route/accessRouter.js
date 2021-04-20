const express = require("express")
const accessRouter = express.Router()
const Access = require("../model/access")

accessRouter.get("/", (req, res, next) => {
    Access.find((err, access) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(access)
    })
})

accessRouter.post("/", (req, res, next) => {
    const newAccess = new Access(req.body)
    newAccess.save((err, savedAccess) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedAccess)
    })
})

module.exports = accessRouter