import { OtherPlayerHand } from "./OtherPlayerHand/OtherPlayerHand.js";
import "./MainArea.css";
import { playType as pt } from "../../utils/constants.js";
import { Controls } from "./Controls/Controls.js";
import { useGameContext } from "../../poker/Context.js";

const sides = {
    left: "left",
    top: "top",
    right: "right",
}

export const MainArea = ({ playType }) => {
    const { playingState } = useGameContext();
    return (
    <>
        {playType === pt.singlePlayer &&
            <div className="mainArea">
                {playingState.isPlaying && <OtherPlayerHand side={sides.left} screen={"screenLeft"} />}
                <div className="cTop">
                {playingState.isPlaying && <OtherPlayerHand side={sides.top} screen={"screenTop"} />}
                    <Controls />
                </div>
                {playingState.isPlaying && <OtherPlayerHand side={sides.right} screen={"screenRight"} />}
            </div>
        }
        {playType === pt.online &&
            <p>Online</p>
        }
    </>
    )
}