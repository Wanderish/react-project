import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /* call useState hook with the default value (here, title) & 
  destructure the @currentStateValue and @function returned from it to update the @currentStateValue*/
  const [title, setTitle] = useState(props.title) 

  const clickEventhandler = () => {
    setTitle('Updated to this!! ')
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
      <button onClick={clickEventhandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
