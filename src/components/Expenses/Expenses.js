import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h2 className="noExpenses_msg">No expenses found.</h2>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem key={item.id} expense={item}></ExpenseItem>
    ));
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilter={filterHandler}
        selected={filteredYear}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {expensesContent}
    </Card>
  );
}
