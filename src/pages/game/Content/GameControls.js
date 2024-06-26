import { useGameContext } from "../../../poker/Context";
import "./GameControls.css";

export const GameControls = () => {
  const { gameMessage, isSwapTurn, swapHandler } = useGameContext();

  return (
    <div className="gameControls">
      {gameMessage}
      {isSwapTurn && <button onClick={() => swapHandler()}>Swap</button>}
    </div>
  );
};
