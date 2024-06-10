import { startGame } from "../../../poker/firebase";
import "./StartGameButton.css";

export const StartGameButton = ({ docID }) => {
  const startButtonHandler = () => {
    try {
      console.log(docID);
      startGame(docID);
    } catch {
      console.log("failed to start");
    }
  }

  return <button className="startButton" onClick={() => startButtonHandler()}>Start Game</button>
}