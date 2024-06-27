import { useState } from "react";
import { updateGameDoc } from "../../../poker/firebase";
import "./LookForPlayersButton.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const LookForPlayersButton = ({ docID }) => {
  const [buttonTitle, setButtonTitle] = useState("Look For Players");
  const navigate = useNavigate();
  const { userID, setGameDocID } = useAuthContext();

  const startButtonHandler = () => {
    try {
      updateGameDoc(docID, {
        isLookingForPlayers: true,
        players: [userID],
        scores: [],
        usedCards: [],
      });

      setGameDocID(docID);
      navigate("/lobby");
    } catch {
      setButtonTitle("Try, Again");
    }
  };

  return (
    <button
      className="startButton"
      onClick={() => startButtonHandler()}
      data-testid={"lookForPlayers"}
    >
      {buttonTitle}
    </button>
  );
};
