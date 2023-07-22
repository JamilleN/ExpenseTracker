import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Replace Car Condenser",
    amount: 1921.99,
    date: new Date(2023, 4, 28),
  },
  {
    id: "e2",
    title: "New Couch",
    amount: 1823.99,
    date: new Date(2021, 10, 29),
  },
  {
    id: "e3",
    title: "Home Insurance",
    amount: 1553.04,
    date: new Date(2022, 6, 19),
  },
  {
    id: "e4",
    title: "Tuition",
    amount: 7984.36,
    date: new Date(2022, 8, 15),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpenseData) => {
    setExpenses((oldExpenses) => {
      return [...oldExpenses, newExpenseData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}