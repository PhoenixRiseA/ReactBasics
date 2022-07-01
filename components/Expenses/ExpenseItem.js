import React from "react";
import "./ExpenseItem.css";
// import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      ></ExpenseDetails>
    </div>
  );
};
export default ExpenseItem;
