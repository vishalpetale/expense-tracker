import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [formOpen, setFormOpen] = useState(false);

  const handleGetNewExpense = (newExpense) => {
    const expense = {
      ...newExpense,
      key: Math.random().toString(),
    };
    props.addExpense(expense);
  };

  const handleAddExpenseBtn = () => {
    setFormOpen(true);
  };

  const newExpenseContent = formOpen ? (
    <ExpenseForm
      getNewExpense={handleGetNewExpense}
      setFormState={setFormOpen}
    />
  ) : (
    <button className="btn add-new-expense-btn" onClick={handleAddExpenseBtn}>
      Add New Expense
    </button>
  );

  return <div className="new-expense">{newExpenseContent}</div>;
}
export default NewExpense;
