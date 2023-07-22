import "./Card.css";

export default function Card(props) {
  const newClassName = "card " + props.className;

  return <div className={newClassName}>{props.children}</div>;
}
