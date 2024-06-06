import { useNavigate } from "react-router-dom";
import { userLogout } from "../../poker/firebase";
import { ControlButton } from "../ControlButton/ControlButton";
import "./NavBar.css";
import { useEffect } from "react";
import { useGameContext } from "../../poker/Context";

export const NavBar = () => {
    const {userID, setUserID} = useGameContext();
    const navigate = useNavigate();
    const logoutHandler = () => {
        try {
            userLogout();
        } catch {
            setUserID(null);
        }
    }

    useEffect(() => {
        if (!userID) navigate("/login");
    }, [userID]);
    
    return (
        <div className="navBar">
            <p>Thing 1</p>
            <p>Thing 2</p>
            <ControlButton handler={logoutHandler} title={"Log out"} />
        </div>
    )
}