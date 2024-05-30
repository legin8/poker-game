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
            <OtherPlayerHand side={sides.left} screen={"screenLeft"} />
            <div className="cTop">
                <OtherPlayerHand side={sides.top} screen={"screenTop"} />
            </div>
            <OtherPlayerHand side={sides.right} screen={"screenRight"} />
        </div>
    )
}