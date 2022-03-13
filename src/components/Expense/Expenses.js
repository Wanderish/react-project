import Card from "../UI/Card";
import ExpItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveSelectedOptionhandler = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  const filterExpensesByYear = (expense) => {
    return expense.date.getFullYear() === parseInt(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectOption={saveSelectedOptionhandler}
      />
      {/* get the expensesArray and create one ExpItem per element of the array */}
      {props.expensesArray.filter(filterExpensesByYear).map((expense) => (
        <ExpItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
