import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setInteredTitle] = useState("");
  const [enteredAmount, setInteredAmount] = useState("");
  const [enteredDate, setInteredDate] = useState("");

  // You can use only one state instead!!

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (e) => {
    setInteredTitle(e.target.value);
    // // setUserInput({ ...userInput, enteredTitle: e.target.value });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setInteredAmount(e.target.value);
    // // setUserInput({ ...userInput, enteredAmount: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setInteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const clearTheForm = () => {
    setInteredTitle("");
    setInteredAmount("");
    setInteredDate("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExepenseData(expenseData);
    clearTheForm();
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Ammount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2023-06-11"
              max="2024-01-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
