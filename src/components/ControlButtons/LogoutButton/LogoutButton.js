import "./LogoutButton.css";
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
      data-testid={"logout"}
      type="button"
      value={"Log out"}
      className="logoutButton"
      onClick={() => logoutHandler()}
    />
  );
};
