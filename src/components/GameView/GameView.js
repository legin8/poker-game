import { PokerContext } from "../../poker/Context"
import { PlayerHand } from "./PlayerHand/PlayerHand"

export const GameView = () => {
  return (
    <div className="gameV">
      <div className="playerCards">
        <PlayerHand />
      </div>
    </div>
  )
}