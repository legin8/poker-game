import { useState } from "react";
import { createPokerGame } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import "./AddGameContent.css";

export const AddGameContent = () => {
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
    <form className="addGameForm">
      <label>New Game Name</label>
      <input type="text" placeholder="My new game" onChange={(v) => gameName = v.target.value} />
      <input type="button" value={"AddGame"} className="addGameButton" onClick={() => addGameHandler()} />
      {message && <p>{message}</p>}
    </form>
  )
}