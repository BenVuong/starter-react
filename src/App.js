import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
//import logo from './logo.svg';
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Computer",
      amount: 1000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Monitor",
      amount: 250,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  let total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  return (
    <div className="App">
      <header className="App-header">
        <h2>An Expense Tracking Application</h2>
        <NewExpense/>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        >

        </ExpenseItem>
        <ExpenseItem
          title={"Total"}
          amount={total}
          date={expenses[2].date}
        ></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
