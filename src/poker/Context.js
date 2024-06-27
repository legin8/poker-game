import { createContext, useState, useContext, useEffect } from "react";
import { newDeck } from "../utils/deckMaker";
import { useAuthContext } from "./UserAuthContext";
import { subGameDoc, updateGameDoc } from "./firebase";
import { STATE_OF_PLAY, HAND_SIZE } from "../utils/constants";
import { removeCards, getCards, sortHand } from "../utils/deckFunctions";
import { arrayUnion } from "firebase/firestore";
import { getScore } from "./scoring/scoring";
import { GameOverButton } from "../components/ControlButtons/GameOverButton/GameOverButton";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

export const PokerContext = ({ children }) => {
  const { userID, gameDocID } = useAuthContext();
  const [deck, setDeck] = useState(newDeck());
  const [cardsToSwap, setCardsToSwap] = useState([]);
  const [gameMessage, setGameMessage] = useState(<p>Loading...</p>);
  const [cards, setCards] = useState([]);
  const [isSwapTurn, setIsSwapTurn] = useState(false);
  const [storedGameData, setStoredGameData] = useState(null);
  const [isLastPlayer, setIsLastPlayer] = useState(null);

  const callback = (gameData) => {
    gameData = gameData.data();
    setStoredGameData(gameData);
    const lastPlayer = gameData.turn + 1 === gameData.players.length;

    if (isLastPlayer !== lastPlayer)
      setIsLastPlayer(gameData.turn + 1 === gameData.players.length);
    if (gameData.phase === STATE_OF_PLAY.drawCards)
      setGameMessage(<p>{`Player ${gameData.turn + 1} Drawing Cards`}</p>);
    if (gameData.phase === STATE_OF_PLAY.swapCards)
      setGameMessage(<p>{`Player ${gameData.turn + 1} turn to swap Cards`}</p>);
    if (gameData.phase === STATE_OF_PLAY.scoreCards)
      setGameMessage(<p>Checking hands.</p>);

    if (gameData.turn === gameData.players.indexOf(userID)) {
      if (gameData.phase === STATE_OF_PLAY.drawCards) {
        removeCards(deck, gameData.usedCards);
        const newCards = sortHand(getCards(deck, HAND_SIZE));
        setCards(newCards);

        try {
          updateGameDoc(gameDocID, {
            usedCards: arrayUnion(...newCards),
            turn: lastPlayer ? 0 : gameData.turn + 1,
            phase: lastPlayer
              ? STATE_OF_PLAY.swapCards
              : STATE_OF_PLAY.drawCards,
          });
        } catch {
          setGameMessage(<p>Something has gone very wrong.... sorry.</p>);
        }
      }

      if (gameData.phase === STATE_OF_PLAY.swapCards) {
        removeCards(deck, gameData.usedCards);
        setGameMessage(<p>Pick upto 3 cards to swap</p>);
        setIsSwapTurn(true);
      }
    }

    if (gameData.phase === STATE_OF_PLAY.gameOver) {
      const playerNumber = gameData.scores.findIndex(
        (e) => e.player === userID,
      );
      const scores = gameData.scores.sort((a, b) => {
        if (a.score < b.score) {
          return -1;
        }
        if (a.score === b.score) {
          return 0;
        }
        return 1;
      });

      if (scores[0].score === scores[1].score) {
        setGameMessage(
          <div>
            <p>Draw.</p>
            <GameOverButton />
          </div>,
        );
      } else if (scores[0].player === userID) {
        setGameMessage(
          <div>
            <p>You Wins.</p>
            <GameOverButton />
          </div>,
        );
      } else {
        setGameMessage(
          <div>
            <p>{`You Lose, Player ${playerNumber + 1} Wins.`}</p>
            <GameOverButton />
          </div>,
        );
      }
    }
  };

  const swapHandler = () => {
    removeCards(cards, cardsToSwap);
    const newCards = getCards(deck, cardsToSwap.length);
    setCards((d) => {
      const newSortedHand = sortHand([...d, ...newCards]);

      try {
        updateGameDoc(gameDocID, {
          usedCards: arrayUnion(...newCards),
          turn: isLastPlayer ? 0 : storedGameData.turn + 1,
          phase: isLastPlayer
            ? STATE_OF_PLAY.gameOver
            : STATE_OF_PLAY.swapCards,
          scores: arrayUnion({
            player: userID,
            score: getScore(newSortedHand),
          }),
        });
        setIsSwapTurn(false);
      } catch (e) {
        console.log(e);
      } finally {
        return newSortedHand;
      }
    });
  };

  useEffect(() => {
    return subGameDoc(gameDocID, callback);
  }, []);

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        cardsToSwap,
        setCardsToSwap,
        gameMessage,
        setGameMessage,
        isSwapTurn,
        cards,
        setCards,
        swapHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
