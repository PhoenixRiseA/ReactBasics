import React from "react";

const ExpenseDetails = ({ title, amount, location }) => {
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">Rs{amount}</div>
      <h2>{location}</h2>
    </div>
  );
};

export default ExpenseDetails;
