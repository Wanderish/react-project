import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const saveNewExpenseDataHandler = (currentExpenseData) => {
    const expenseData = {
      ...currentExpenseData,
      id: Math.random().toString()
    }
    props.onAddNewExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      {/* add an event handler to the custom component */}
      <ExpenseForm onSaveNewExpenseData={saveNewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
