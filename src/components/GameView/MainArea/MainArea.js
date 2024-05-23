import { OtherPlayerHand } from "./OtherPlayerHand/OtherPlayerHand.js";

const sides = {
    left: "left",
    top: "top",
    right: "right",
}

export const MainArea = ({ playType }) => {
    return (
        <div>
            <OtherPlayerHand side={sides.left} />
        </div>
    )
}