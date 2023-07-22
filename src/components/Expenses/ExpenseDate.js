import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenseDate">
      <div className="expenseDate_month">{month}</div>
      <div className="expenseDate_day">{day}</div>
      <div className="expenseDate_year">{year}</div>
    </div>
  );
}
