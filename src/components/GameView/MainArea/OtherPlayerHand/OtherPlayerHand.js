import { OtherPlayerCard } from "../../../OtherPlayerCard/OtherPlayerCard.js";

export const OtherPlayerHand = ({ side }) => {
    return (
        <div>
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
            <OtherPlayerCard side={side} />
        </div>
    )
}