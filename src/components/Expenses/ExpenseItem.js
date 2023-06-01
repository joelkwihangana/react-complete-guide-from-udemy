import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const [ourTitle, setourTitle] = useState(title);
  const changeTitle = () => {
    let titleText = "Man title irahindutse";
    setourTitle(titleText);
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{ourTitle}</h2>
      </div>
      <div className="expense-item__price">{`$ ${amount}`}</div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
