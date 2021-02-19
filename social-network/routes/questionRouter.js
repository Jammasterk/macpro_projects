const express = require("express")
const questionRouter = express.Router()
const Question = require("../models/questionSchema")

questionRouter.get("/", (req, res, next) => {
    Question.find((err, questions) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(questions)
    })
})

questionRouter.get("/user", (req, res, next) => {
    Question.find({user: req.user._id}, (err, questions) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(questions)
    })
})

questionRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newQuestion = new Question(req.body)
    newQuestion.save((err, savedQuestion) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedQuestion)
    })
})

questionRouter.put("/:questionId", (req, res, next) => {
    Question.findOneAndUpdate(
        {_id: req.params.questionId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateQuestion) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(`Successfully updated ${updateQuestion.question}`)
        }
    )
})

questionRouter.delete("/:questionId", (req, res, next) => {
    Question.findOneAndDelete(
        {_id: req.params.questionId, user: req.user._id},
        (err, deleteQuestion) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteQuestion.question}`)
        }
    )
})

module.exports = questionRouter