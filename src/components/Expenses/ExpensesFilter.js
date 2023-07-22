import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  const filterHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div className="expensesFilter">
      <div className="expensesFilter_control">
        <label>Filter by year</label>
        <select onChange={filterHandler} value={props.selected}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
