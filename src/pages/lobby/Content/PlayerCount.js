import { useEffect, useState } from "react";
import { useGameContext } from "../../../poker/Context";
import { subPlayerCount } from "../../../poker/firebase";
import { useNavigate } from "react-router-dom";

export const PlayerCount = () => {
    const [playersInLobby, setPlayersInLobby] = useState("Loading");
    const { currentGameDocID, userID } = useGameContext();
    const [ currentOwner, setCurrentOwner ] = useState(null);
    const navigate = useNavigate();

    const callback = (playerCount) => {
        try {
            console.log(playerCount);
            playerCount = playerCount.data();
            console.log(playerCount);
            setCurrentOwner(playerCount.owner);
            setPlayersInLobby(playerCount.players.length);
        } catch(e) {
            console.log(e);
            setPlayersInLobby("Failed to find players.");
        }
    }

    const sub = () => {
        try {
            subPlayerCount(currentGameDocID, callback);
        } catch(e) {
            navigate("/");
        }
    }

    useEffect(() => {
        return sub();
    }, [])

    return (
        <div>
            <p>{playersInLobby}</p>
            {(currentOwner === userID) && playersInLobby > 1 ? <button>Start Game</button>: null}
            {console.log(currentGameDocID)}
            {console.log(userID)}
        </div>
    )
}