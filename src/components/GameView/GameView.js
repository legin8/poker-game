import { PlayerHand } from "./PlayerHand/PlayerHand";
import { useEffect } from "react";
import { useGameContext } from "../../poker/Context";
import { newDeck } from "../../utils/deck";

export const GameView = () => {
  const { setDeck } = useGameContext();
  useEffect(() => {
    return () => setDeck(newDeck());
  }, []);
  return (
    <div className="gameV">
      <div className="playerCards">
        <PlayerHand />
      </div>
    </div>
  )
}