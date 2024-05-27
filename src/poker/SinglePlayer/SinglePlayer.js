import "./SinglePlayer.css";
import { PlayerArea } from "../../components/PlayerArea/PlayerArea.js";
import { QuitButton } from "../../components/QuitButton/QuitButton.js";
import { MainArea } from "../../components/MainArea/MainArea.js";
import { playType } from "../../utils/constants.js"

export const SinglePlayer = () => {
  return (
    <div className="singleP">
      <QuitButton />
      <MainArea playType={playType.singlePlayer} />
      <PlayerArea />
    </div>
  )
}