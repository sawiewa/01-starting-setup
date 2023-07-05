import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
	//zamiast props można napisać w {} konkretne parametry czyli np. tutle, date, amount i potem nie pisać props.amount tylko poprostu amount

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date}></ExpenseDate>
			{/* <div>{props.date.toISOString()}</div> */}
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>{props.amount}</div>
		</Card>
	);
}

export default ExpenseItem;
