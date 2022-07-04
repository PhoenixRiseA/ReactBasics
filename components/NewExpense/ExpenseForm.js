import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const locationHandler = (event) => {
    setEnteredLocation(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input id="title" type="text" name="title" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="amount"
            type="text"
            name="amount"
            onChange={amountHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            id="location"
            type="text"
            name="location"
            onChange={locationHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button id="addBtn" type="submit">
            Add Exp
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
