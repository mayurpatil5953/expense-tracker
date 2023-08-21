import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* NewExpense is parent this component
            ExpenseForm is child */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* just pointing a function and not calling above */}
    </div>
  );
};

export default NewExpense;
