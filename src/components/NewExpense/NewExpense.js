import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHanlder = (enteredExpenseData) => {
		//funkcja bedzie oczekiwac parametru enteredExpenseData
		const expenseData = {
			// dodajemy nasze dane wydatków do innego obiektu
			...enteredExpenseData, //... kopiujemy wprowadzone dane do innego obiektu */
			id: Math.random().toString(), //dodajemy klucz id
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
			{/* rekwyzyt dodany przeze mnie, nazwa jest wlasna, obojetnie jaka,wartość tego rekwizytu to funkcja która zostanie wywołana gdy cos stanie się wewnątrz tego komponentu, tutaj gdy użytkownik zapisze wprowadzone dane wydatków */}
		</div>
	);
};

export default NewExpense;
