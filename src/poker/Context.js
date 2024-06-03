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
  const [isLoggedIn, setIsLoggedIn] = useState(false);













    const [deck, setDeck] = useState(newDeck());
    const gameStateSetter = (key) => {
        return {
          ...gameStates,
          [key]: true,
        }
      }

    const [gamePlayState, setGamePlayState] = useState(gameStateSetter("startMenu"));
    const [playingState, setPlayingState] = useState(PLAY_STATES);
    const [usersCards, setUsersCards] = useState([]);
    
    

    return (
        <GameContext.Provider value={{ isLoggedIn, setIsLoggedIn,                          deck, setDeck, gamePlayState, setGamePlayState, gameStateSetter, playingState, setPlayingState, usersCards, setUsersCards }}>
            {children}
        </GameContext.Provider>
    )
}