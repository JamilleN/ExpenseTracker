import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEntering, setIsEntering] = useState(false);
  const newExpenseDataHandler = (inputExpenseData) => {
    const newExpenseData = {
      ...inputExpenseData,
      id: Math.random() * 10 * Math.random(),
    };
    props.onAddExpense(newExpenseData);
  };

  const addingNewExpense = () => {
    setIsEntering(true);
  };
  
  const doneNewExpense = () => {
    setIsEntering(false);
  };

  let showingItems = (
    <button onClick={addingNewExpense}>Add New Expense</button>
  );

  if (isEntering) {
    showingItems = (
      <ExpenseForm
        onSave={newExpenseDataHandler}
        onDone={doneNewExpense}
      ></ExpenseForm>
    );
  }

  return <div className="newExpense">{showingItems}</div>;
}
