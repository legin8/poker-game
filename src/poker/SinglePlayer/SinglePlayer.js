import "./SinglePlayer.css";
import { GameView } from "../../components/GameView/GameView.js";
import { QuitButton } from "../../components/QuitButton/QuitButton.js";

export const SinglePlayer = () => {
  return (
    <div className="singleP">
      <QuitButton />
      <p>Words for Deacon, Go into the Light</p>
      <GameView />
    </div>
  )
}