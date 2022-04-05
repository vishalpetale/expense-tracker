import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expense-list-msg">No Expenses Found.</h2>;
  }

  const expenseContent = props.filteredExpenses.map((expense, i) => (
    <ExpenseItem expense={expense} />
  ));

  return <ul className="expense-list">{expenseContent}</ul>;
}
export default ExpensesList;
