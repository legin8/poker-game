import { createContext, useState, useContext, useEffect } from "react";
import { newDeck } from "../utils/deckMaker";
import { useAuthContext } from "./UserAuthContext";
import { subGameDoc, updateGameDoc } from "./firebase";
import { STATE_OF_PLAY, HAND_SIZE } from "../utils/constants";
import { removeCards, getCards, sortHand } from "../utils/deckFunctions";
import { arrayUnion } from "firebase/firestore";
import { getScore } from "./scoring/scoring";

const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

export const PokerContext = ({ children }) => {
  const { userID, gameDocID } = useAuthContext();
  const [deck, setDeck] = useState(newDeck());
  const [cardsToSwap, setCardsToSwap] = useState([]);
  const [gameMessage, setGameMessage] = useState("Loading...");
  const [cards, setCards] = useState([]);
  const [isSwapTurn, setIsSwapTurn] = useState(false);
  const [storedGameData, setStoredGameData] = useState(null);
  const [isLastPlayer, setIsLastPlayer] = useState(null);

  const getLocalCards = () => {
    return cards;
  }

  const callback = (gameData) => {
    gameData = gameData.data();
    setStoredGameData(gameData);
    const lastPlayer = gameData.turn + 1 === gameData.players.length;
    if (isLastPlayer !== lastPlayer) setIsLastPlayer(gameData.turn + 1 === gameData.players.length);
    if (gameData.phase === STATE_OF_PLAY.drawCards) setGameMessage(`Player ${gameData.turn + 1} Drawing Cards`);
    if (gameData.phase === STATE_OF_PLAY.swapCards) setGameMessage(`Player ${gameData.turn + 1} turn to swap Cards`);
    if (gameData.phase === STATE_OF_PLAY.scoreCards) setGameMessage("Checking hands.");

    if (gameData.turn === gameData.players.indexOf(userID)) {
      if (gameData.phase === STATE_OF_PLAY.drawCards) {
        removeCards(deck, gameData.usedCards);
        const newCards = sortHand(getCards(deck, HAND_SIZE));
        setCards(newCards);
        
        try {
          updateGameDoc(gameDocID, {
            usedCards: arrayUnion(...newCards),
            turn: lastPlayer ? 0: gameData.turn + 1,
            phase: lastPlayer ? STATE_OF_PLAY.swapCards: STATE_OF_PLAY.drawCards,
          });
        } catch {
          setGameMessage("Something has gone very wrong.... sorry.")
        }
      }

      if (gameData.phase === STATE_OF_PLAY.swapCards) {
        console.log("start of swap Cards");
        removeCards(deck, gameData.usedCards);
        setGameMessage("Pick upto 3 cards to swap");
        setIsSwapTurn(true);
      }

      if (gameData.phase === STATE_OF_PLAY.scoreCards) {
        console.log("start of score cards");
        // const temp = getLocalCards();
        // console.log(temp);
        
        // const score = getScore(cards);
        // console.log(score);

        // try {
        //   updateGameDoc(gameDocID, {
        //     turn: isLastPlayer ? 0: storedGameData.turn + 1,
        //     score: arrayUnion({
        //       userID: userID,
        //       score,
        //     }),
        //     phase: isLastPlayer ? STATE_OF_PLAY.scoreCards: STATE_OF_PLAY.swapCards,
        //   })
        // } catch(e) {
        //   console.log(e);
        // }
      }
    }
  }

  const swapHandler = () => {
    removeCards(cards, cardsToSwap);
    const newCards = getCards(deck, cardsToSwap.length);
    setCards((d) => {
      const newSortedHand = sortHand([ ...d, ...newCards]);

      try {
        updateGameDoc(gameDocID, {
            usedCards: arrayUnion(...newCards),
            turn: isLastPlayer ? 0: storedGameData.turn + 1,
            phase: isLastPlayer ? STATE_OF_PLAY.scoreCards: STATE_OF_PLAY.swapCards,
            scores: arrayUnion({
              player: userID,
              score: getScore(newSortedHand),
            })
        });
        setIsSwapTurn(false);
      } catch(e) {
        console.log(e);
      } finally {
        return newSortedHand;
      }
    });
    
    // try {
    //     updateGameDoc(gameDocID, {
    //         usedCards: arrayUnion(...newCards),
    //         turn: isLastPlayer ? 0: storedGameData.turn + 1,
    //         phase: isLastPlayer ? STATE_OF_PLAY.scoreCards: STATE_OF_PLAY.swapCards,
    //     });
    //     setIsSwapTurn(false);
    // } catch(e) {
    //     console.log(e);
    // }
  }

  useEffect(() => {
    return subGameDoc(gameDocID, callback);
  }, []);

  return (
    <GameContext.Provider value={{ deck, setDeck, cardsToSwap, setCardsToSwap, gameMessage, setGameMessage, isSwapTurn, cards, setCards, swapHandler }}>
        {children}
    </GameContext.Provider>
  )
}