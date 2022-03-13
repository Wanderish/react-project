import Card from '../UI/Card';
import ExpItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020')

  const saveSelectedOptionhandler = (selectedOption) => {
    console.log('In Expenses.js: ' + selectedOption)
    setSelectedYear(selectedOption)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onSelectOption={saveSelectedOptionhandler} />
      <ExpItem
        title={props.expensesArray[0].title}
        amount={props.expensesArray[0].amount}
        date={props.expensesArray[0].date}
      ></ExpItem>
      <ExpItem
        title={props.expensesArray[1].title}
        amount={props.expensesArray[1].amount}
        date={props.expensesArray[1].date}
      ></ExpItem>
      <ExpItem
        title={props.expensesArray[2].title}
        amount={props.expensesArray[2].amount}
        date={props.expensesArray[2].date}
      ></ExpItem>
      <ExpItem
        title={props.expensesArray[3].title}
        amount={props.expensesArray[3].amount}
        date={props.expensesArray[3].date}
      ></ExpItem>
    </Card>
  );
}

export default Expenses;
