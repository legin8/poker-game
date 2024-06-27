import { useState } from "react";
import { createPokerGame } from "../../../poker/firebase";
import "./AddGameContent.css";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const AddGameContent = () => {
  let gameName = "";
  const [message, setMessage] = useState(null);
  const { userID } = useAuthContext();

  const addGameHandler = async () => {
    try {
      createPokerGame({
        gameName,
        owner: userID,
        isLookingForPlayers: false,
      });
      setMessage(null);
    } catch {
      setMessage("Something went wrong.");
    }
  };

  return (
    <form className="addGameForm">
      <label>New Game Name</label>
      <input
        type="text"
        placeholder="My new game"
        onChange={(v) => (gameName = v.target.value)}
        data-testid={"addgamecontentText"}
      />
      <input
        type="button"
        value={"Add Game"}
        className="addGameButton"
        onClick={() => addGameHandler()}
      />
      {message && <p>{message}</p>}
    </form>
  );
};
