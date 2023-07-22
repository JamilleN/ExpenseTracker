import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const todayDate = new Date();
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setInputTitle(value);
    } else if (identifier === "amount") {
      setInputAmount(value);
    } else if (identifier === "date") {
      setInputDate(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSave(newExpenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    resetHandler();
  };
  const resetHandler = () => {
    props.onDone();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="newExpense_controls">
        <div className="newExpense_control">
          <label>Title</label>
          <input
            placeholder="Enter the name of your expense here"
            value={inputTitle}
            type="text"
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          ></input>
        </div>
        <div className="newExpense_control">
          <label>Amount</label>
          <input
            placeholder="Enter the amount here"
            value={inputAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          ></input>
        </div>
        <div className="newExpense_control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2020-01-01"
            max={todayDate.toLocaleString("en-CA").slice(0, 10)}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          ></input>
        </div>
        <div className="newExpense_actions">
          <button type="button" onClick={resetHandler}>
            Cancel
          </button>
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}
