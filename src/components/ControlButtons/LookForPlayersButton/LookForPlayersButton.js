import { useState } from "react";
import { addPlayer, startGame } from "../../../poker/firebase";
import "./LookForPlayersButton.css";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../../poker/Context";

export const LookForPlayersButton = ({ docID }) => {
  const [buttonTitle, setButtonTitle] = useState("Look For Players");
  const navigate = useNavigate();
  const {userID, setCurrentGameDocID} = useGameContext();
  const startButtonHandler = () => {
    try {
      startGame(docID);
      addPlayer(docID, userID);
      console.log(userID);
      setCurrentGameDocID(docID);
      navigate("/lobby");
    } catch(e) {
      setButtonTitle("Try, Again");
      console.log(e);
    }
  }

  return <button className="startButton" onClick={() => startButtonHandler()}>{buttonTitle}</button>
}