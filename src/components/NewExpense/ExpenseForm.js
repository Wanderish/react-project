import "./ExpenseForm.css";
import { useState } from "react/cjs/react.development";

const ExpenseForm = (props) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const titleHandler = (event) => {
    setCurrentTitle(event.target.value);
  };

  const dateHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  const amountHandler = (event) => {
    setCurrentAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //create a new Expense Data
    const expenseData = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };

    props.onSaveNewExpenseData(expenseData);
    //clear the inputs for the user to enter again
    setCurrentTitle('')
    setCurrentAmount('')
    setCurrentDate('')
  };

  return (
    <form action="" onSubmit={submitHandler}>
      {/* Common div that contains all the input elements */}
      <div className="new-expense__controls">
        {/* div for title input */}
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={currentTitle}
            name="title"
            id=""
            onChange={titleHandler}
          />
        </div>
        {/* div for amount input */}
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={currentAmount}
            min="0.01"
            step="0.01"
            name="amount"
            id=""
            onChange={amountHandler}
          />
        </div>
        {/* div for date input */}
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={currentDate}
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            id=""
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancelNewExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
