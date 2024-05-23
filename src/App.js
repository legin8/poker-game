import "./App.css";
import { StartMenu } from "./poker/StartMenu/StartMenu.js";
import { SinglePlayer } from "./poker/SinglePlayer/SinglePlayer.js";
import { Online } from "./poker/Online/Online.js";
import { useGameContext } from "./poker/Context.js";

export const App = () => {
  const {gamePlayState} = useGameContext();
 
  return (
    <>
      {gamePlayState.startMenu && <StartMenu />}
      {gamePlayState.singlePlayer && <SinglePlayer />}
      {gamePlayState.online && <Online />}
    </>
  )
}
