const express = require("express")
const expenseRouter = express.Router()
const Expense = require("../models/expense")

expenseRouter.get("/", (req, res, next) => {
    Expense.find((err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(expenses)
    })
})

expenseRouter.get("/user", (req, res, next) => {
    Expense.find({user: req.user._id}, (err, expenses) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(expenses)
    })
})

expenseRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newExpense = new Expense(req.body)
    newExpense.save((err, savedExpense) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedExpense)
    })
})

expenseRouter.put("/:expenseId", (req, res, next) => {
    Expense.findOneAndUpdate(
        {_id: req.params.expenseId, user: req.user._id},
        req.body,
        {new:true},
        (err, updateExpense) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateExpense)
        }
    )
})

expenseRouter.delete("/:expenseId", (req, res, next) => {
    Expense.findOneAndDelete(
        {_id: req.params.expenseId, user: req.user._id},
        (err, deleteExpense) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send('Successfully deleted expense')
        }
    )
})

module.exports = expenseRouter