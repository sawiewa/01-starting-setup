import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expenses(props) {
	return (	
			<Card className='expenses'>
			<ExpensesFilter />
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}></ExpenseItem>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}></ExpenseItem>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}></ExpenseItem>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}></ExpenseItem>
				<ExpenseItem
					title={props.items[4].title}
					amount={props.items[4].amount}
					date={props.items[4].date}></ExpenseItem>
			</Card>
		
	);
}

export default Expenses;
