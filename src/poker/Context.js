import { createContext, useState, useContext } from "react";
import { newDeck } from "../utils/deckMaker";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

const gameStates = {
    startMenu: false,
    singlePlayer: false,
    online: false,
  };

export const PokerContext = ({ children }) => {
    const [deck, setDeck] = useState(newDeck());
    const gameStateSetter = (key) => {
      // if (key === "startMenu") setDeck(newDeck());
        return {
          ...gameStates,
          [key]: true,
        }
      }
    const [gamePlayState, setGamePlayState] = useState(gameStateSetter("startMenu"));
    

    return (
        <GameContext.Provider value={{ deck, setDeck, gamePlayState, setGamePlayState, gameStateSetter }}>
            {children}
        </GameContext.Provider>
    )
}