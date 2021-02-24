import React, {useContext} from 'react'
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"
import {UserContext} from "../context/UserProvider"

export default function Profile() {
    const {
        user: 
        {username},
        addExpense,
        expenses
    } = useContext(UserContext)


    return (
      <div>
        <ExpenseForm addExpense={addExpense} /> 
          <ExpenseList expenses={expenses} />
      </div>
    );
}
