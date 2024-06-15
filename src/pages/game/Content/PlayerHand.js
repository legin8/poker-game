import { useEffect, useState } from "react";
import { subPlayingGame } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import { STATE_OF_PLAY } from "../../../utils/constants";
import { removeCardsFromDeck } from "../../../utils/deckFunctions";

export const PlayerHand = () => {
  const {currentGameDocID, userID, deck, setDeck} = useGameContext();
  const stateOfPlay = STATE_OF_PLAY.drawCards;
  const [playersCards, setPlayersCards] = useState([]);

  const callback = (gameData) => {
    gameData = gameData.data();

    if (gameData.turn === gameData.players.indexOf(userID)) {
      if (stateOfPlay === STATE_OF_PLAY.drawCards) {
        console.log("start of draw cards");
        
        setDeck(removeCardsFromDeck(deck, [{number: 6, suit: 'C'}, {number: 4, suit: 'C'}]))
        
        
        // add code to get cards here.
        // add code to update cardsUsed in db here.
        // add code to change turn here.
      }

      if (stateOfPlay === STATE_OF_PLAY.swapCards) {
        console.log("start of swap Cards");
        // add code to tell user what to do.
      }

      if (stateOfPlay === STATE_OF_PLAY.scoreCards) {
        console.log("start of score cards");
        // add code to tell user who won.
      }
    }
  }

  useEffect(() => {

    return subPlayingGame(currentGameDocID, callback);
  }, []);
  return (
    <div>
      <p>cards will go here</p>
    </div>
  )
}