import { useState } from "react";
import "./App.css";
import { StartMenu } from "./poker/StartMenu/StartMenu.js";
import { SinglePlayer } from "./poker/SinglePlayer/SinglePlayer.js";
import { Online } from "./poker/Online/Online.js";
import { PokerContext } from "./poker/Context.js";

const gameStates = {
  startMenu: false,
  singlePlayer: false,
  online: false,
};

export const App = () => {
  const gameStateSetter = (key) => {
    return {
      ...gameStates,
      [key]: true,
    }
  }

  const [gamePlayState, setGamePlayState] = useState(gameStateSetter("startMenu"));

  
  return (
    <PokerContext>
      {gamePlayState.startMenu && <StartMenu setter={setGamePlayState} objMaker={gameStateSetter} />}
      {gamePlayState.singlePlayer && <SinglePlayer />}
      {gamePlayState.online && <Online />}
    </PokerContext>
  )
}
