import { useState } from "react";
import { updateGameDoc } from "../../../poker/firebase";
import { useGameContext } from "../../../poker/Context";
import { useNavigate } from "react-router-dom";
import { arrayUnion } from "firebase/firestore";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const JoinButton = ({ docID }) => {
    const [joinButtonText, setJoinButtonText] = useState("Join");
    const { userID } = useAuthContext();
    const { setCurrentGameDocID } = useGameContext();
    const navigate = useNavigate();

    const joinHandler = () => {
        try {
            updateGameDoc(docID, {
                players: arrayUnion(userID),
            })

            setCurrentGameDocID(docID);
            navigate("/lobby");
        } catch {
            setJoinButtonText("Try again");
        }
    }
    
    return <button onClick={() => joinHandler()}>{joinButtonText}</button>
}