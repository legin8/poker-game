import { useState } from "react";
import { createPokerGame } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";

export const AddGameContent = () => {
  const [gameName, setGameName] = useState("");
  const [message, setMessage] = useState(null);
  const {userID} = useGameContext();

  const addGameHandler = async () => {
    try {
      await createPokerGame(userID, {
        gameName,
        owner: userID,
      });
      setMessage(null);
    } catch(e) {
      setMessage("Something went wrong.");
    }
  }

  return (
    <div>
      <label>Add Game</label>
      <input type="text" onChange={(v) => setGameName(v.target.value)} />
      <input type="button" value={"Submit"} onClick={() => addGameHandler()} />
      {message && <p>{message}</p>}
    </div>
  )
}