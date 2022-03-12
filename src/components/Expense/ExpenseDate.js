import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.toLocaleString("en-IN", { year: "numeric" });
  const date = props.date.toLocaleString("en-IN", { day: "numeric" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{date}</div>
    </div>
  );
}

export default ExpenseDate;
