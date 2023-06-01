import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const userResponseMessage = (name, message) => {
    console.log(`Hello ${name} ${message} Thank you!`);
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{`$ ${amount}`}</div>
      <button
        onClick={() => {
          userResponseMessage(
            "Joel KWIHANGANA",
            "iyi ni message iza iyo ukanze ibuto!"
          );
        }}
      >
        Change title
      </button>
    </Card>
  );
};

export default ExpenseItem;
