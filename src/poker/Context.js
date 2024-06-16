import { createContext, useState, useContext, useEffect } from "react";
import { authStateChecker } from "./firebase";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

export const PokerContext = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [currentGameDocID, setCurrentGameDocID] = useState(null);
  const [deck, setDeck] = useState(null);
  const [playersCards, setPlayersCards] = useState([]);

  useEffect(() => {
    authStateChecker((user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID(null);
      }
    });
  }, []);        

  return (
    <GameContext.Provider value={{ userID, setUserID, currentGameDocID, setCurrentGameDocID, deck, setDeck, playersCards, setPlayersCards }}>
        {children}
    </GameContext.Provider>
  )
}