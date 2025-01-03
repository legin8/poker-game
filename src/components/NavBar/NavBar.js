import { Link, useNavigate } from "react-router-dom";
import { LogoutButton } from "../ControlButtons/LogoutButton/LogoutButton";
import "./NavBar.css";
import { useEffect } from "react";
import { useAuthContext } from "../../poker/UserAuthContext";

export const NavBar = () => {
  const { userID } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userID) navigate("/login");
  }, [userID]);

  return (
    <div className="navBar">
      <Link to={"/home"} className="linkButton">
        Home
      </Link>
      <Link to={"/addgame"} className="linkButton">
        Add Game
      </Link>
      <Link to={"/joingame"} className="linkButton">
        Join Game
      </Link>
      <Link to={"/singleplayer"} className="linkButton">
        Single Player
      </Link>
      <LogoutButton />
    </div>
  );
};
