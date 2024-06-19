import { subGameDoc, updateGameDoc } from "../../poker/firebase";
import { PlayerHand } from "./Content/PlayerHand";
import { useEffect, useState } from "react";
import { useGameContext } from "../../poker/Context";
import { STATE_OF_PLAY } from "../../utils/constants";
import { removeCardsFromDeck } from "../../utils/deckFunctions";
import { getFiveCards } from "../../utils/deckFunctions";
import { arrayUnion } from "firebase/firestore";

export const GamePage = () => {
  const { currentGameDocID, userID, deck, setDeck } = useGameContext();
  const [cards, setCards] = useState([]);

  const callback = (gameData) => {
    gameData = gameData.data();
    if (gameData.turn === gameData.players.indexOf(userID)) {
      if (gameData.phase === STATE_OF_PLAY.drawCards) {
        setDeck(removeCardsFromDeck(deck, gameData.usedCards));
        const newCards = getFiveCards(deck);
        setCards(newCards);
        const isLastPlayer = gameData.turn + 1 === gameData.players.length;
        
        try {
          updateGameDoc(currentGameDocID, {
            usedCards: arrayUnion(...newCards),
            turn: isLastPlayer ? 0: gameData.turn + 1,
            phase: isLastPlayer ? STATE_OF_PLAY.swapCards: STATE_OF_PLAY.drawCards,
          });
        } catch(e) {
          console.log(e);
        }
      }

      if (gameData.phase === STATE_OF_PLAY.swapCards) {
        console.log("start of swap Cards");
        // add code to tell user what to do.
      }

      if (gameData.phase === STATE_OF_PLAY.scoreCards) {
        console.log("start of score cards");
        // add code to tell user who won.
      }
    }
  }

  useEffect(() => {
    return subGameDoc(currentGameDocID, callback);
  }, []);

  return (
    <div>
      <p>Game page</p>
      <PlayerHand cards={cards} />
    </div>
  )
}