import React, { useState } from "react";
import "./ExpenseItem.css";
// import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const amountHandler = () => {
    setAmount("$100");
    console.log(amount);
  };
  // const deleteHandler = () => {
  //   var parentNode = document.querySelector("expense-item");
  //   console.log(parentNode);
  //   var childNodeToBeDeleted = document.getElementById(props.title);

  //   parentNode.removeChild(childNodeToBeDeleted);
  // };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs{amount}</div>
        <button onClick={amountHandler}>Change Amount</button>
        <h2>{props.location}</h2>
      </div>
      {/* <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      ></ExpenseDetails> */}
      <button onClick={clickHandler}>Change Title</button>
      {/* <button onClick={deleteHandler}>delete</button> */}
    </div>
  );
};
export default ExpenseItem;
