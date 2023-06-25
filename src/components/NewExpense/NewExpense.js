import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setExpenseForm] = useState(false);
  const saveEspenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          setExpenseForm={setExpenseForm}
          onSaveExepenseData={saveEspenseHandler}
        />
      ) : (
        <button onClick={() => setExpenseForm(true)}>Create New expense</button>
      )}
    </div>
  );
};

export default NewExpense;
