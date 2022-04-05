import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Car insurance",
    date: new Date(2021, 0, 30),
    price: 1000,
  },
  {
    id: "el2",
    title: "Bike insurance",
    date: new Date(2021, 4, 2),
    price: 500,
  },
  {
    id: "el3",
    title: "Washing Machine",
    date: new Date(2020, 10, 15),
    price: 10000,
  },
  { id: "el4", title: "Chocalate", date: new Date(2019, 0, 30), price: 10 },
  { id: "el5", title: "Monitor", date: new Date(2022, 3, 15), price: 1500 },
  { id: "el6", title: "Candy", date: new Date(2022, 5, 5), price: 10 },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
    console.log(expense.key);
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense addExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

/*
        Using React.createElement methods
          return React.createElement(
            "div",
            {},
            React.createElement("h2", {}, "Let's get ready"),
            React.createElement(Expenses, { expenses: expenses })
          );*/
