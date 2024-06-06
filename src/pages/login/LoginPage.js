import { useGameContext } from "../../poker/Context";
import { useEffect, useState } from "react";
import { anonSignIn } from "../../poker/firebase";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
    const {userID} = useGameContext();
    const [loggingIn, setLoggingIn] = useState(false);
    const navigate = useNavigate();
    console.log(userID);
    const anonSignInHandler = async () => {
        try {
            setLoggingIn(true)
            anonSignIn();
            
        } catch {
            setLoggingIn(false);
        }
    }

    useEffect(() => {
        if (userID) navigate("/home");
    }, [userID])

    return (
        <div className="loginPage">
            <input type="button" value={loggingIn ? "Logging in": "Anon Login"} className="anonLogin" onClick={() => anonSignInHandler()} disabled={loggingIn} />
        </div>
    )
}