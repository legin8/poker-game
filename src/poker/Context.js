import { createContext, useState, useContext } from "react";
import { newDeck } from "../utils/deck";

export const GameContext = createContext(null);

export const useGameContext = () => useContext(GameContext);

export const PokerContext = ({ children }) => {
    const [deck, setDeck] = useState(newDeck());

    return (
        <GameContext.Provider value={{ deck, setDeck }}>
            {children}
        </GameContext.Provider>
    )
}