import { OtherPlayerHand } from "./OtherPlayerHand/OtherPlayerHand.js";
import "./MainArea.css";

const sides = {
    left: "left",
    top: "top",
    right: "right",
}

export const MainArea = ({ playType }) => {
    return (
        <div className="mainArea">
            <div className="otherHand">
                <OtherPlayerHand side={sides.left} screen={"screenLeft"} />
            </div>
            <div className="otherHand">
                <OtherPlayerHand side={sides.top} screen={"screenTop"} />
            </div>
            <div className="otherHand">
                <OtherPlayerHand side={sides.right} screen={"screenRight"} />
            </div>
        </div>
    )
}