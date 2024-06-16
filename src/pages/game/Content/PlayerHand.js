import { useEffect, useState } from "react";
import { subPlayingGame, updateGameDoc } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import { STATE_OF_PLAY } from "../../../utils/constants";
import { getFiveCards, removeCardsFromDeck } from "../../../utils/deckFunctions";
import { arrayUnion } from "firebase/firestore";
import { CardFront } from "../../../components/Cards/CardFront/CardFront";

export const PlayerHand = () => {
  const {currentGameDocID, userID, deck, setDeck, playersCards, setPlayersCards} = useGameContext();

  const callback = (gameData) => {
    gameData = gameData.data();
    console.log(gameData);
    if (gameData.turn === gameData.players.indexOf(userID)) {
      console.log("my turn");
      if (gameData.phase === STATE_OF_PLAY.drawCards) {
        setDeck(removeCardsFromDeck(deck, gameData.usedCards));
        const newCards = getFiveCards(deck);
        setPlayersCards(newCards);
        const isLastPlayer = gameData.turn + 1 === gameData.players.length;
        console.log(isLastPlayer);
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

    return subPlayingGame(currentGameDocID, callback);
  }, []);
  return (
    <div>
      <p>cards will go here</p>
      {playersCards.map((card, k) => {
        return <CardFront key={k} number={card.number} suit={card.suit} />
      })}
    </div>
  )
}