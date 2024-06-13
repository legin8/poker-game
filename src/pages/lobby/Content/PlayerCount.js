import { useEffect, useState } from "react";
import { useGameContext } from "../../../poker/Context";
import { subPlayerCount, setIsLookingForPlayers, setTurn } from "../../../poker/firebase";
import { useNavigate } from "react-router-dom";

export const PlayerCount = () => {
    const [playersInLobby, setPlayersInLobby] = useState("Loading");
    const { currentGameDocID, userID, setTurnNum } = useGameContext();
    const [ currentOwner, setCurrentOwner ] = useState(null);
    const navigate = useNavigate();

    const callback = (playerCount) => {
        try {
            playerCount = playerCount.data();
            setCurrentOwner(playerCount.owner);
            setPlayersInLobby(playerCount.players.length);
        } catch {
            setPlayersInLobby("Failed to find players.");
        } finally {
            if (!playerCount.isLookingForPlayers) {
                if (currentOwner === userID) setTurn(currentGameDocID, 0);

                setTurnNum(playerCount.players.indexOf(userID));
                navigate("/game");
            }
        }
    }

    const sub = () => {
        try {
            subPlayerCount(currentGameDocID, callback);
        } catch(e) {
            navigate("/");
        }
    }

    const startButtonHandler = () => {
        try {
            setIsLookingForPlayers(currentGameDocID, false);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        return sub();
    }, [])

    return (
        <div>
            <p>{playersInLobby}</p>
            {(currentOwner === userID) && playersInLobby > 1 ? <button onClick={() => startButtonHandler()}>Start Game</button>: null}
        </div>
    )
}