import "./ControlButton.css";

export const ControlButton = ({ handler, title }) => {
  return <input type="button" value={title} className="controlButton" onClick={() => handler()} />
}