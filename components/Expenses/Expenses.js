import React, { useState } from "react";
import "./Expenses.css";
// import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((filteredExpense) => {
    return filteredExpense.date.getFullYear().toString() === filteredYear;
  });

  let addOneMore;
  if (filteredExpenses.length === 1) {
    addOneMore = (
      <h3 className="expenses-list__fallback">
        List only has one item, Add more
      </h3>
    );
  }
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {addOneMore}

        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      /> */}
      </div>
    </div>
  );
};
export default Expenses;
