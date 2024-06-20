import { subGameDoc, updateGameDoc } from "../../poker/firebase";
import { PlayerHand } from "./Content/PlayerHand";
import { useEffect, useState } from "react";
import { useGameContext } from "../../poker/Context";
import { STATE_OF_PLAY } from "../../utils/constants";
import { removeCards } from "../../utils/deckFunctions";
import { getCards } from "../../utils/deckFunctions";
import { HAND_SIZE } from "../../utils/constants";
import { arrayUnion } from "firebase/firestore";
import { GameControls } from "./Content/GameControls";
import "./GamePage.css";
import { PokerContext } from "../../poker/Context";
import { useAuthContext } from "../../poker/UserAuthContext";

export const GamePage = () => {
  const { userID } = useAuthContext();
  const { currentGameDocID, deck, setDeck, cardsToSwap, setCardsToSwap, gameMessage, setGameMessage, setGameState, cards, setCards, hasSwappedCards, setHasSwappedCards } = useGameContext();

  const callback = (gameData) => {
    gameData = gameData.data();

    if (gameMessage === null || gameMessage.phase === STATE_OF_PLAY.drawCards) {
      setGameMessage(`Player ${gameData.turn + 1} Drawing Cards`);
      setGameState(STATE_OF_PLAY.drawCards);
    }

    if (gameData.turn === gameData.players.indexOf(userID)) {
      const isLastPlayer = gameData.turn + 1 === gameData.players.length;

      if (gameData.phase === STATE_OF_PLAY.drawCards) {
        setCardsToSwap([]);
        setDeck(removeCards(deck, gameData.usedCards));
        const newCards = getCards(deck, HAND_SIZE);
        setCards(newCards);
        
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
        setDeck(removeCards(deck, gameData.usedCards));
        setGameMessage("Pick upto 3 cards to swap");
        setGameState(STATE_OF_PLAY.swapCards);

        console.log(hasSwappedCards);
        if (hasSwappedCards) {
          try {
            updateGameDoc(currentGameDocID, {
              turn: isLastPlayer ? 0: gameData.turn + 1,
              phase: isLastPlayer ? STATE_OF_PLAY.scoreCards: STATE_OF_PLAY.swapCards,
            })
          } catch(e) {
            console.log(e);
          }
          
        }

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
    <PokerContext >
      <div className="gamePage">
        <p className="title">Game page</p>
        <GameControls />
        <PlayerHand />
      </div>
    </PokerContext>
  )
}