import "./SinglePlayer.css";
import { GameView } from "../../components/GameView/GameView.js";
import { QuitButton } from "../../components/QuitButton/QuitButton.js";
import { useEffect } from "react";
import { useGameContext } from "../Context.js";
import { newDeck } from "../../utils/deck.js";

export const SinglePlayer = () => {
  const { setDeck } = useGameContext();
  useEffect(() => {
    return () => setDeck(newDeck);
  }, []);

  return (
    <div className="singleP">
      <QuitButton />
      <p>Words for Deacon, Go into the Light</p>
      <GameView />
    </div>
  )
}