import "./StartMenu.css";
import { useGameContext } from "../Context";

export const StartMenu = () => {
  const { setGamePlayState, gameStateSetter } = useGameContext();
  return (
    <div className="GameTypeButtons">
      <button className="startMenuButton" onClick={() => setGamePlayState(gameStateSetter("singlePlayer"))}>Single Player</button>
      <button className="startMenuButton">Online</button>
    </div>
  )
}