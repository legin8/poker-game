import { PokerContext } from "../../poker/Context"
import { PlayerCards } from "./PlayerHand/PlayerHand"

export const GameView = () => {
  return (
    <PokerContext>
      <div className="gameV">
        <div className="playerCards">
          <PlayerCards />
        </div>
      </div>
    </PokerContext>
  )
}