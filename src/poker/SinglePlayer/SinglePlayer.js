import "./SinglePlayer.css";
import { GameView } from "../../components/GameView/GameView.js";
import { QuitButton } from "../../components/QuitButton/QuitButton.js";
import { MainArea } from "../../components/GameView/MainArea/MainArea.js";
import { playType } from "../../utils/constants.js"

export const SinglePlayer = () => {
  return (
    <div className="singleP">
      <QuitButton />
      <MainArea playType={playType.singlePlayer} />
      <GameView />
    </div>
  )
}