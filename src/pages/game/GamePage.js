import { PlayerHand } from "./Content/PlayerHand";
import { GameControls } from "./Content/GameControls";
import "./GamePage.css";
import { PokerContext } from "../../poker/Context";

export const GamePage = () => {
  return (
    <PokerContext>
      <div className="gamePage">
        <p className="title">Game page</p>
        <GameControls />
        <PlayerHand />
      </div>
    </PokerContext>
  );
};
