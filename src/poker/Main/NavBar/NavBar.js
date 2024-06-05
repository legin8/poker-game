import "./NavBar.css";
import { useGameContext } from "../../Context";
import { LoggedInBar } from "./LoggedInBar/LoggedInBar";
import { LoggedOutBar } from "./LoggedOutBar/LoggedOutBar";

export const NavBar = () => {
    const { isLoggedIn, userID } = useGameContext();
    return (
        <div className="navBar">
            {console.log(isLoggedIn)}
            {userID ? <LoggedInBar />: <LoggedOutBar />}
        </div>
    )
}