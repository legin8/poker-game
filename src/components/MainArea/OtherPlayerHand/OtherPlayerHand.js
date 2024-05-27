import { OtherPlayerCard } from "../../Cards/CardBack/CardBack.js";
import "./OtherPlayerHand.css";

export const OtherPlayerHand = ({ side, screen }) => {
    return (
        <div className={screen}>
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
        </div>
    )
}