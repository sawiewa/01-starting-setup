import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('testTitle');
	const [enteredAmount, setEnteredAmount] = useState('10');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		console.log(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		console.log(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		console.log(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			//obiekt, te nazwy title, amountm date zobaczymy w konsoli jako tutuły i przypisane do nich wartosci
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		console.log(expenseData);
		props.onSaveExpenseData(expenseData);// przekazujemy expenseData w parametrze do komponentu NewExpense i tam jest kopiowany ten obiekt i dodane id
		setEnteredTitle(''); //usuwamy dane po przeslaniu formularza
		setEnteredAmount('');
		setEnteredDate('');
		console.log(enteredTitle);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle} //domyślna wartość
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.1'
						step='0.05'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2018-01-01'
						max='2025-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
