import { useState } from "react";
import "./App.css";
import { StartMenu } from "./poker/StartMenu/StartMenu.js";
import { SignlePlayer } from "./poker/SinglePlayer/SinglePlayer.js";
import { Online } from "./poker/Online/Online.js";

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
    <>
      {gamePlayState.startMenu && <StartMenu setter={setGamePlayState} objMaker={gameStateSetter} />}
      {gamePlayState.singlePlayer && <SignlePlayer />}
      {gamePlayState.online && <Online />}
    </>
  )
}
