const express = require('express')
const foodRouter = express.Router()
const Food = require("../models/food")


foodRouter.get("/", (req, res, next) => {
    Food.find((err, foods) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(foods)
    })
})

foodRouter.get("/user", (req, res, next) => {
    Food.find({user: req.user._id}, (err, foods) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(foods)
    })
})

foodRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newFood = new Food(req.body)
    newFood.save((err, savedFood) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedFood)
    })
})

foodRouter.put("/:foodId", (req, res, next) => {
    Food.findOneAndUpdate(
        {_id: req.params.foodId, user: req.user._id},
        req.body,
        (err, updateFood) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully updated ${updateFood.recipe}`)
        }
    )
})

foodRouter.delete("/:foodId", (req, res, next) => {
    Food.findOneAndDelete(
        {_id: req.params.foodId, user: req.user._id},
        (err, deletedFood) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedFood.recipe}`)
        }
    )
})

module.exports = foodRouter