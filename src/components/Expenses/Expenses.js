import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        // console.log('selectedYear', selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map(expenseItem => <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}></ExpenseItem>)
                }
            </Card>
        </div>
    )
}
