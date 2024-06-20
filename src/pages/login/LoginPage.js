import { useAuthContext } from "../../poker/UserAuthContext";
import { useEffect, useState } from "react";
import { anonSignIn } from "../../poker/firebase";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
    const { userID } = useAuthContext();
    const [loggingIn, setLoggingIn] = useState(false);
    const navigate = useNavigate();
    
    const anonSignInHandler = () => {
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