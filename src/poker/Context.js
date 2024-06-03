import { createContext, useState, useContext, useEffect } from "react";
import { newDeck } from "../utils/deckMaker";
import { PLAY_STATES } from "../utils/constants";
import { authStateChecker } from "./firebase";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

const gameStates = {
    startMenu: false,
    singlePlayer: false,
    online: false,
  };

export const PokerContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [userID, setUserID] = useState("");





  useEffect(() => {
    authStateChecker((user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID(null);
      }
    });
  }, []);





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
        <GameContext.Provider value={{ userID, isLoggedIn, setIsLoggedIn, contentError, setContentError,                         deck, setDeck, gamePlayState, setGamePlayState, gameStateSetter, playingState, setPlayingState, usersCards, setUsersCards }}>
            {children}
        </GameContext.Provider>
    )
}