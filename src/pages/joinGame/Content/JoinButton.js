import { useState } from "react";
import { addPlayer } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import { useNavigate } from "react-router-dom";

export const JoinButton = ({ docID }) => {
    const [joinButtonText, setJoinButtonText] = useState("Join");
    const {userID, setCurrentGameDocID, currentGameDocID} = useGameContext();
    const navigate = useNavigate();

    const joinHandler = () => {
        try {
            addPlayer(docID, userID);
            setCurrentGameDocID(docID);
            navigate("/lobby");
        } catch(e) {
            console.log(e);
        }
    }
    
    return <button onClick={() => joinHandler()}>{joinButtonText}</button>
}