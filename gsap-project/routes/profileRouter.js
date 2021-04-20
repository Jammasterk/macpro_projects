const express = require('express')
const profileRouter = express.Router()
const Profile = require("../models/profile")

profileRouter.get("/", (req, res, next) => {
    Profile.find((err, profile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(profile)
    })
})

profileRouter.get("/user", (req, res, next) => {
    Profile.find({user: req.user._id}, (err, profile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(profile)
    })
})

profileRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newProfile = new Profile(req.body);
  newProfile.save((err, savedProfile) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(savedProfile);
  });
});

profileRouter.put("/:profileId", (req, res, next) => {
    Profile.findOneAndUpdate(
        {_id: req.params.profileId, user: req.user._id},
        req.body,
        {new:true},
        (err, updateProfile) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully updated ${updateProfile.name} profile`)
        }
    )
})

profileRouter.delete("/:profileId", (req, res, next) => {
    Profile.findOneAndDelete(
        {_id: req.params.profileId, user: req.user._id},
        (err, deleteProfile) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send('Successfully deleted profile')
        }
    )
})

module.exports = profileRouter