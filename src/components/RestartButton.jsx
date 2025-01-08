import "../css/RestartButton.css"

const Button = ({onClick}) => {
  return <button className="restart-button" onClick={onClick}>Rematch</button>;
};
export default Button;
