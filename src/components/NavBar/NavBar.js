import { Link, useNavigate } from "react-router-dom";
import { LogoutButton } from "../ControlButtons/LogoutButton/LogoutButton";
import "./NavBar.css";
import { useEffect } from "react";
import { useGameContext } from "../../poker/Context";

export const NavBar = () => {
    const {userID} = useGameContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userID) navigate("/login");
    }, [userID]);
    
    return (
        <div className="navBar">
            <Link to={"/home"} className="linkButton">Home</Link>
            <Link to={"/addgame"} className="linkButton">Add Game</Link>
            <p>Join game</p>
            <LogoutButton />
        </div>
    )
}