import "./NavBar.css";
import { useGameContext } from "../../Context";
import { LoggedInBar } from "./LoggedInBar/LoggedInBar";
import { LoggedOutBar } from "./LoggedOutBar/LoggedOutBar";

export const NavBar = () => {
    const { isLoggedIn } = useGameContext();
    return (
        <div className="navBar">
            {isLoggedIn ? <LoggedInBar />: <LoggedOutBar />}
        </div>
    )
}