import "./LogoutButton.css";
import { useGameContext } from "../../../poker/Context";
import { userLogout } from "../../../poker/firebase";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const LogoutButton = () => {
  const { setUserID } = useAuthContext();
  const logoutHandler = () => {
    try {
      userLogout();
    } catch {
      setUserID(null);
    }
  };
  return (
    <input
      type="button"
      value={"Log out"}
      className="logoutButton"
      onClick={() => logoutHandler()}
    />
  );
};
