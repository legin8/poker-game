import { PlayerHand } from "./PlayerHand/PlayerHand";
import { useEffect, useState } from "react";
import { useGameContext } from "../../poker/Context";
import { newDeck } from "../../utils/deckMaker";
import { getFiveCards } from "../../utils/deckFunctions";

export const PlayerArea = () => {
  const { deck, setDeck, playingState } = useGameContext();
  const [ playerCards, setPlayerCards ] = useState([]);

  const getCards = () => {
    const result = getFiveCards(deck);
    setPlayerCards(result[0]);
    setDeck(result[1])
  }

  useEffect(() => {
    if (playingState.isPlaying && playerCards.length === 0) {
      getCards();
    }
    
    return () => setDeck(newDeck());
  }, [playingState]);
  
  return (
    <div className="playerArea">
      <div className="playerCards">
        {playerCards && <PlayerHand playerCards={playerCards} />}
      </div>
    </div>
  )
}