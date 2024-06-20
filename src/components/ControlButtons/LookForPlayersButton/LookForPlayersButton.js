import { useState } from "react";
import { updateGameDoc } from "../../../poker/firebase";
import "./LookForPlayersButton.css";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../../poker/Context";
import { arrayUnion } from "firebase/firestore";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const LookForPlayersButton = ({ docID }) => {
  const [buttonTitle, setButtonTitle] = useState("Look For Players");
  const navigate = useNavigate();
  const { userID } = useAuthContext();
  const { setCurrentGameDocID } = useGameContext();
  const startButtonHandler = () => {
    try {
      updateGameDoc(docID, {
        isLookingForPlayers: true,
        players: arrayUnion(userID),
      })
      
      setCurrentGameDocID(docID);
      navigate("/lobby");
    } catch {
      setButtonTitle("Try, Again");
    }
  }

  return <button className="startButton" onClick={() => startButtonHandler()}>{buttonTitle}</button>
}