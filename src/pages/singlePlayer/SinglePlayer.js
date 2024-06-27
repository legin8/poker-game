import { useEffect, useState } from "react";
import { SinglePlayerHand } from "./Content/SinglePlayerHand";
import { newDeck } from "../../utils/deckMaker";
import { sortHand, getCards, removeCards } from "../../utils/deckFunctions";
import { HAND_SIZE, STATE_OF_PLAY } from "../../utils/constants";
import { getScore } from "../../poker/scoring/scoring";
import { Link } from "react-router-dom";

export const SinglePlayer = () => {
  const initalMessage = <p>Drawing Cards</p>;
  const [cards, setCards] = useState([]);
  const [gameMessage, setGameMessage] = useState(initalMessage);
  const [phase, setPhase] = useState(STATE_OF_PLAY.drawCards);
  const [secondPlayerCards, setSecondPlayerCards] = useState([]);
  const [cardsToSwap, setCardsToSwap] = useState([]);
  let deck = [];

  const swapHandler = () => {
    setCards((cards) => {
      removeCards(cards, cardsToSwap);
      const newCards = getCards(deck, cardsToSwap.length);
      return sortHand([...cards, ...newCards]);
    });
    setPhase(STATE_OF_PLAY.gameOver);
  };

  const drawPhase = () => {
    setTimeout(() => {
      deck = newDeck();
      setCards(sortHand(getCards(deck, HAND_SIZE)));
      setSecondPlayerCards(sortHand(getCards(deck, HAND_SIZE)));
      setGameMessage(
        <div>
          <p>Swap Cards</p>
          <button onClick={() => swapHandler()}>Swap</button>
        </div>,
      );
    }, 1000);
  };

  const nextGameHandler = () => {
    deck = newDeck();
    setGameMessage(initalMessage);
    setCards([]);
    setCardsToSwap([]);
    setSecondPlayerCards([]);
    setPhase(STATE_OF_PLAY.drawCards);
  };

  const gameOverPhase = () => {
    const playerScore = getScore(cards);
    const secondPlayerScore = getScore(secondPlayerCards);
    const winner =
      playerScore < secondPlayerScore ? "You Win!!!" : "You Lose....";
    setGameMessage(
      <div>
        <p>{winner}</p>
        <button onClick={() => nextGameHandler()}>Next Game</button>
      </div>,
    );
  };

  useEffect(() => {
    if (phase === STATE_OF_PLAY.drawCards) {
      drawPhase();
    }
    if (phase === STATE_OF_PLAY.gameOver) {
      gameOverPhase();
    }
  }, [phase]);

  return (
    <div>
      <Link to={"/home"}>Home</Link>
      {gameMessage}
      <SinglePlayerHand
        cards={cards}
        cardsToSwap={cardsToSwap}
        setCardsToSwap={setCardsToSwap}
      />
      {phase === STATE_OF_PLAY.gameOver && (
        <>
          <p>CPU hand.</p>
          <SinglePlayerHand
            cards={secondPlayerCards}
            cardsToSwap={[]}
            setCardsToSwap={() => null}
          />
        </>
      )}
    </div>
  );
};
