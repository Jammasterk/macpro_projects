const express = require("express")
const cloudinary = require("../utils/cloudinary")
const userRouter = express.Router()
const upload = require('../utils/multer')
const User = require("../models/user")
const { uploader } = require("../utils/cloudinary")


userRouter.get("/", async (req, res, next) => {
    try {
        try {
          let user = await User.find();
          res.json(user);
        } catch (error) {
          console.log(error);
        }
    } catch (error) {
        console.log(error)
    }
})


userRouter.get("/user", async (req, res, next) => {
    User.find({user: req.user._id}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(user)
    })
})

userRouter.post("/", upload.single("image"), async (req, res, next) => {
    const result = await cloudinary.uploader.upload(req.file.path);
    const profImage = new User({
        name: req.body.name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
        user: result.user
        })
    

        req.body.user = req.user._id;
       
        profImage.save((err, savedImage) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedImage)
        })
})

userRouter.delete("/:Id", async (req, res) => {
    try {
        let user = await User.findById(req.params.Id)
        await cloudinary.uploader.destroy(user.cloudinary_id)
        await user.remove()
        res.json(user)
    } catch (error) {
        console.log(err)
    }
})

module.exports = userRouter