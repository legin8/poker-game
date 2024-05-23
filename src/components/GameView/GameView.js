import { PlayerHand } from "./PlayerHand/PlayerHand";
import { useEffect } from "react";
import { useGameContext } from "../../poker/Context";
import { newDeck } from "../../utils/deck";
import { OtherPlayerCard } from "../OtherPlayerCard/OtherPlayerCard";

export const GameView = () => {
  const { setDeck } = useGameContext();
  useEffect(() => {
    return () => setDeck(newDeck());
  }, []);
  return (
    <div className="gameView">
      <div className="playerCards">
        <PlayerHand />
      </div>
    </div>
  )
}