import { useEffect, useState } from "react";
import { useGameContext } from "../../../poker/Context";
import { subPlayerCount, updateGameDoc } from "../../../poker/firebase";
import { useNavigate } from "react-router-dom";
import { newDeck } from "../../../utils/deckMaker";
import { STATE_OF_PLAY } from "../../../utils/constants";

export const PlayerCount = () => {
    const [playersInLobby, setPlayersInLobby] = useState("Loading");
    const { currentGameDocID, userID, setDeck } = useGameContext();
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
                if (currentOwner === userID) {
                    updateGameDoc(currentGameDocID, {turn: 0})
                }

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
            updateGameDoc(currentGameDocID, {
                phase: STATE_OF_PLAY.drawCards,
                isLookingForPlayers: false,
            })
            setDeck(newDeck())
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