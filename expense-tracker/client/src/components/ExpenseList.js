import React from "react"
import Expense from "./Expense"

export default function ExpenseList(props){
    const {expenses} = props
    return(
        <div>
            {expenses && expenses.map(expense => <Expense {...expense} key={expense._id} />)}
        </div>
    )
}