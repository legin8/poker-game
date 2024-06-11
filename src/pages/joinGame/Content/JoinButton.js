import { useState } from "react";
import { addPlayer } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";

export const JoinButton = ({ docID }) => {
    const [joinButtonText, setJoinButtonText] = useState("Join");
    const {userID} = useGameContext();

    const joinHandler = () => {
        try {
            console.log("start");
            console.log(docID);
            console.log(userID);
            addPlayer(docID, userID);
            console.log("end");
        } catch(e) {
            console.log(e);
        }
    }
    
    return <button onClick={() => joinHandler()}>{joinButtonText}</button>
}