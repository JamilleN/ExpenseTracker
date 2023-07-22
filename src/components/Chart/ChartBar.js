import "./ChartBar.css";

export default function ChartBar(props) {
  let barFilledHeight = "0%";

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartBar">
      <div className="chartBar_inner">
        <div className="chartBar_fill" style={{height: barFilledHeight}}></div>
      </div>
      <div className="chartBar_label">{props.label}</div>
    </div>
  );
}
