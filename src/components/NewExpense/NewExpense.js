import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const saveNewExpenseDataHandler = (currentExpenseData) => {
    const expenseData = {
      ...currentExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsVisible(!isVisible)
  };

  const hideNewExpenseDataForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="new-expense">
      {/* add an event handler to the custom component */}
      {isVisible ? (
        <ExpenseForm
          onSaveNewExpenseData={saveNewExpenseDataHandler}
          onCancelNewExpense={hideNewExpenseDataForm}
        />
      ) : (
        <button onClick={hideNewExpenseDataForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
