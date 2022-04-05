import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    /*setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });*/
  };

  const handleAmountChange = (e) => {
    setAmount(+e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });

    /*setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });*/
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);

    /*setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });*/

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: +enteredAmount,
    };

    console.log(expenseData);
    props.getNewExpense(expenseData);
    props.setFormState(false);

    clearInputFields();
  };

  const clearInputFields = () => {
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.setFormState(false);
  };

  return (
    <form className="expense-from" onSubmit={handleSubmit}>
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="expense-form-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="expense-form-control">
          <label>Date</label>
          <input
            type="date"
            min="2019,0,1"
            max="2022,11,31"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
        <button className="btn expense-control-btn" type="submit">
          Add Expense
        </button>
      </div>
      <button className="btn-cancel" onClick={handleCancel}>
        <span className="cancel">&#x2716;</span>
      </button>
    </form>
  );
}
export default ExpenseForm;
