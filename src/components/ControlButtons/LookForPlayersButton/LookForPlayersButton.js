import { startGame } from "../../../poker/firebase";
import "./LookForPlayersButton.css";

export const LookForPlayersButton = ({ docID }) => {
  const startButtonHandler = () => {
    try {
      console.log(docID);
      startGame(docID);
    } catch {
      console.log("failed to start");
    }
  }

  return <button className="startButton" onClick={() => startButtonHandler()}>Look For Players</button>
}