import { useState } from "react";
import { updateGameDoc } from "../../../poker/firebase";
import "./LookForPlayersButton.css";
import { useNavigate } from "react-router-dom";
import { arrayUnion } from "firebase/firestore";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const LookForPlayersButton = ({ docID }) => {
  const [buttonTitle, setButtonTitle] = useState("Look For Players");
  const navigate = useNavigate();
  const { userID, setGameDocID } = useAuthContext();

  const startButtonHandler = () => {
    try {
      updateGameDoc(docID, {
        isLookingForPlayers: true,
        players: arrayUnion(userID),
      });

      setGameDocID(docID);
      navigate("/lobby");
    } catch {
      setButtonTitle("Try, Again");
    }
  };

  return (
    <button className="startButton" onClick={() => startButtonHandler()}>
      {buttonTitle}
    </button>
  );
};
