import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{`$ ${amount}`}</div>
    </div>
  );
};

export default ExpenseItem;
