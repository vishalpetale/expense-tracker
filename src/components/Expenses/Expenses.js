import React from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFiteredYear] = useState("2022");

  const handleFilteredYearChange = (filteredYear) => {
    setFiteredYear(filteredYear);
  };

  // Filtered expenses based on filtered year.

  const filteredExpenseList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={handleFilteredYearChange}
      />
      <ExpenseChart expenses={filteredExpenseList} />
      <ExpensesList filteredExpenses={filteredExpenseList} />
    </Card>
  );
}
export default Expenses;
