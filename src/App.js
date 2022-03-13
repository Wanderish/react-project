import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";

const SEED_EXPENSES_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Mousepad",
    amount: 239,
    date: new Date(2022, 3, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(SEED_EXPENSES_DATA)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expenses expensesArray={expenses}/>
    </div>
  );
}

export default App;
