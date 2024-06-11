import { useEffect, useState } from "react"

export const PlayerCount = () => {
    const [playersInLobby, setPlayersInLobby] = useState("Loading");

    const getPlayerCount = () => {
        console.log("start");
    }

    useEffect(() => {
        getPlayerCount()
    }, [])

    return (
        <div>
            <p>{playersInLobby}</p>
        </div>
    )
}