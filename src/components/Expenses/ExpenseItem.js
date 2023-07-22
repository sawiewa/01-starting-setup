import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
function ExpenseItem(props) {
	//zamiast props można napisać w {} konkretne parametry czyli np. tutle, date, amount i potem nie pisać props.amount tylko poprostu amount
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated');
		console.log(title);
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date}></ExpenseDate>
			{/* <div>{props.date.toISOString()}</div> */}
			<div className='expense-item__description'>
				<h2>{title}</h2>
			</div>
			<div className='expense-item__price'>{props.amount}</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	);
}

export default ExpenseItem;
