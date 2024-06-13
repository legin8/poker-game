import { useEffect } from "react";
import { subPlayingGame } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import { STATE_OF_PLAY } from "../../../utils/constants";

export const PlayerHand = () => {
  const {currentGameDocID, userID} = useGameContext();
  const stateOfPlay = STATE_OF_PLAY.drawCards;

  const callback = (gameData) => {
    gameData = gameData.data();
    console.log(gameData.turn);
    console.log(gameData.players.indexOf(userID));
    console.log(gameData.turn === gameData.players.indexOf(userID));

    if (gameData.turn === gameData.players.indexOf(userID)) {
      if (stateOfPlay === STATE_OF_PLAY.drawCards) {
        console.log("start of draw cards");
        // add code to remove used cards here.
        // add code to get cards here.
        // add code to update cardsUsed in db here.
        // add code to change turn here.
      }

      if (stateOfPlay === STATE_OF_PLAY.swapCards) {
        console.log("start of swap Cards");
        // add code to tell user what to do.
      }

      if (stateOfPlay === STATE_OF_PLAY.scoreCards) {
        console.log("start of score cards");
        // add code to tell user who won.
      }
    }
  }

  useEffect(() => {
    return subPlayingGame(currentGameDocID, callback);
  }, []);
  return (
    <div>
      <p>cards will go here</p>
    </div>
  )
}