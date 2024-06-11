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
            console.log("start");
            console.log(docID);
            console.log(userID);
            addPlayer(docID, userID);
            setCurrentGameDocID(docID);
            console.log("end");
            console.log(currentGameDocID);
            navigate("/lobby");
        } catch(e) {
            console.log(e);
        }
        console.log(currentGameDocID);
    }
    
    return <button onClick={() => joinHandler()}>{joinButtonText}</button>
}