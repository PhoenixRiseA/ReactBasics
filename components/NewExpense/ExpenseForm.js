import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input id="title" type="text" name="title" onChange={handleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="amount"
            type="text"
            name="amount"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            id="location"
            type="text"
            name="location"
            onChange={handleChange}
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
