import { createContext, useState, useContext } from "react";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

export const PokerContext = ({ children }) => {
  const [currentGameDocID, setCurrentGameDocID] = useState(null);
  const [deck, setDeck] = useState(null);
  const [cardsToSwap, setCardsToSwap] = useState([]);
  const [gameMessage, setGameMessage] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [cards, setCards] = useState([]);
  const [hasSwappedCards, setHasSwappedCards] = useState(false);

  return (
    <GameContext.Provider value={{ currentGameDocID, setCurrentGameDocID, deck, setDeck, cardsToSwap, setCardsToSwap, gameMessage, setGameMessage, gameState, setGameState, cards, setCards, hasSwappedCards, setHasSwappedCards }}>
        {children}
    </GameContext.Provider>
  )
}