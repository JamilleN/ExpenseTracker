import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
    const dataValues = props.data.map(data => data.value);
    const maxAmount = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.data.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxAmount}
          label={data.label}
        ></ChartBar>
      ))}
    </div>
  );
}
