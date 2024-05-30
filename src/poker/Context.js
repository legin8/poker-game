import { createContext, useState, useContext } from "react";
import { newDeck } from "../utils/deckMaker";
import { PLAY_STATES } from "../utils/constants";

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
        return {
          ...gameStates,
          [key]: true,
        }
      }

    const [gamePlayState, setGamePlayState] = useState(gameStateSetter("startMenu"));
    const [playingState, setPlayingState] = useState(PLAY_STATES);
    
    

    return (
        <GameContext.Provider value={{ deck, setDeck, gamePlayState, setGamePlayState, gameStateSetter, playingState, setPlayingState }}>
            {children}
        </GameContext.Provider>
    )
}