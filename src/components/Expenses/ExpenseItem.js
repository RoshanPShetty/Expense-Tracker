import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated Title')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
    </Card>
  );
}

export default ExpenseItem;
