import "./Button.scss";

export const Button = ({ text, onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);
