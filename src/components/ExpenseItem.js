import React, { useState } from "react";
import ExpensenDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  
  const clickHandler = () => {
    setTitle("Title is updated");
    console.log(title);
  };


  return (
    <Card className="expense-item">
      <div>
        {" "}
        <ExpensenDate date={props.date} />{" "}
      </div>

      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
