import "./LoggedInBar.css";
import { LogoutButton } from "./LogoutButton/LogoutButton";

export const LoggedInBar = () => {
    return (
        <div className="loggedInBar">
            <div className="newGameButton">Make New Game</div>
            <LogoutButton />
        </div>
    )
}