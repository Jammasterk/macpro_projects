const express = require("express")
const authRouter = express.Router()
const Auth = require("../models/authSchema")
const jwt = require("jsonwebtoken")


authRouter.post("/signup", (req, res, next) => {
     Auth.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
       if (err) {
         res.status(500);
         return next(err);
       }
       if (user) {
         res.status(403);
         return next(new Error("That username already exists. Please enter a different one."));
       }
       const newUser = new Auth(req.body);
       newUser.save((err, savedUser) => {
         if (err) {
           res.status(500);
           return next(err);
         }
         const token = jwt.sign(
           savedUser.withoutPassword(),
           process.env.SECRET
         );
         return res
           .status(201)
           .send({ token, user: savedUser.withoutPassword() });
       });
     });
})



authRouter.post("/login", (req, res, next) => {
  Auth.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      res.status(500);
      return next(new Error("That username does not exist."));
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(500);
        return next(new Error("Something went wrong. Please check your username or password."));
      }
      if (!isMatch) {
        res.status(403);
        return next(new Error("Something went wrong. Please check your username or password."));
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.status(200).send({ token, user: user.withoutPassword() });
    });
  });
});

module.exports = authRouter