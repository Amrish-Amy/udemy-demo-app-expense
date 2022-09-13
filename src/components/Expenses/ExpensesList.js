import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return <ul className="expenses-list">
        {
        props.items.map(expenseItem => (<ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}></ExpenseItem>))
        }
    </ul>

};

export default ExpenseList;
