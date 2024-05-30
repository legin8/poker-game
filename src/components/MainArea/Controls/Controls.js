import "./Controls.css";
import { useGameContext } from "../../../poker/Context";
import { useState } from "react";

export const Controls = () => {
    const { playingState, setPlayingState } = useGameContext();
    const [buttonText, setButtonText] = useState("Start");
    const [showButton, setShowButton] = useState(true);
    const startGame = () => {
        setPlayingState((v) => {
            return {
                ...v,
                isPlaying: true,
            }
        })
        setShowButton((v) => !v);
    }

    
    return (
        <div className="controls">
            <div>
                {showButton && <button className={`controlButton`} onClick={() => startGame()} >{buttonText}</button>}
            </div>
        </div>
    )
}