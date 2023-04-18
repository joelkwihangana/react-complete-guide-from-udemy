import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="expense-item__date">April 20th 2023</div>
      <div className="expense-item__description">
        <h2>Buying new Laptops</h2>
      </div>
      <div className="expense-item__price">$500</div>
    </div>
  );
};

export default ExpenseItem;
