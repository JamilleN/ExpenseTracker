import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  return (
      <Card className="expenseItem">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
        <div className="expenseItem_description">
          <h2>{props.expense.title}</h2>
          <div className="expenseItem_price">$ {props.expense.amount}</div>
        </div>
      </Card>
  );
}
