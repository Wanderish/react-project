import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveSelectedOptionhandler = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  //filtering out the expenses by year
  const filterExpensesByYear = props.expensesArray.filter((expense) => {
    return expense.date.getFullYear() === parseInt(selectedYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectOption={saveSelectedOptionhandler}
      />
      <ExpensesChart expenses={filterExpensesByYear}/>
      {/* if expenses present, display them else display a message accordingly */}
      <ExpensesList items={filterExpensesByYear}/>;
    </Card>
  );
};

export default Expenses;
