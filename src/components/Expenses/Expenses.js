import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import './ExpensesList.css';
import ExpensesChart from './ExpensesChart';

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('all');
    const filterChangeHandler = (selectedYear) => {
        // console.log('selectedYear', selectedYear);
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear || filteredYear === 'all';
    });

    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    )
}
