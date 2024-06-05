import "./LogoutButton.css";
import { userLogout } from "../../../../firebase";

export const LogoutButton = () => {
  const logoutHandler = () => {
    userLogout();
  }
  return <input type="button" value="logout" className="logoutButton" onClick={() => logoutHandler()} />
}