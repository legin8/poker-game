import "./LogoutButton.css";
import { useGameContext } from "../../poker/Context";
import { userLogout } from "../../poker/firebase";

export const LogoutButton = () => {
  const { setUserID } = useGameContext();
  const logoutHandler = () => {
    try {
        userLogout();
    } catch {
        setUserID(null);
    }
  }
  return <input type="button" value={"Log out"} className="logoutButton" onClick={() => logoutHandler()} />
}