import { PlayerCards } from "./PlayerCards/PlayerCards"

export const GameView = () => {
  return (
    <div className="gameV">
      <div className="playerCards">
        <PlayerCards />
      </div>
    </div>
  )
}