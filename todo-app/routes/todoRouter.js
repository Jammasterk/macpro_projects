const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo")

todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

todoRouter.get("/user", (req, res, next) => {
    Todo.find({user: req.user._id}, (err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

todoRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newTodo = new Todo(req.body)
    newTodo.save((err, savedTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedTodo)
    })
})

todoRouter.put("/:todoId", (req, res, next) => {
    Todo.findOneAndUpdate(
        {_id: req.params.todoId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully updated ${updateTodo.todo}`)
        }
    )
})

todoRouter.delete("/:todoId", (req, res, next) => {
    Todo.findOneAndDelete(
        {_id: req.params.todoId, user: req.user._id},
        (err, deleteTodo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteTodo.todo}`)
        }
    )
})

module.exports = todoRouter