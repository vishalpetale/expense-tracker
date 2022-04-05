import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item-description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item-price">₹ {props.expense.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
