import "./LoggedInBar.css";
import { ControlButton } from "../../../../components/ControlButton/ControlButton";
import { userLogout } from "../../../firebase";

export const LoggedInBar = () => {
    const logoutHandler = () => {
        userLogout();
      }

    return (
        <div className="loggedInBar">
            <div className="newGameButton">Make New Game</div>
            <ControlButton handler={logoutHandler} title={"Log out"} />
        </div>
    )
}