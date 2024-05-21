import "./SinglePlayer.css"
import { GameView } from "../../components/GameView/GameView.js"

export const SinglePlayer = () => {
  return (
    <div className="singleP">
      <p>Back to startMenu</p>
      <p>Words for user</p>
      <GameView />
    </div>
  )
}