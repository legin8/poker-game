import { useState } from "react";
import { createPokerGame } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";

export const AddGameContent = () => {
  // const [gameName, setGameName] = useState("");
  let gameName = "";
  const [message, setMessage] = useState(null);
  const {userID} = useGameContext();

  const addGameHandler = async () => {
    try {
      console.log(gameName);
      await createPokerGame({
        gameName,
        owner: userID,
      });
      setMessage(null);
    } catch {
      setMessage("Something went wrong.");
    }
  }

  return (
    <div>
      <label>Add Game</label>
      <input type="text" onChange={(v) => gameName = v.target.value} />
      <input type="button" value={"Submit"} onClick={() => addGameHandler()} />
      {message && <p>{message}</p>}
    </div>
  )
}