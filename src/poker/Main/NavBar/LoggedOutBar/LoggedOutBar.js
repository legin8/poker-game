import "./LoggedOutBar.css";
import { anonSignInAccount } from "../../../firebase";
import { useGameContext } from "../../../Context";
import { useState } from "react";

export const LoggedOutBar = () => {
    const {setContentError, userID} = useGameContext();
    const [loggingIn, setLoggingIn] = useState(false);

    const anonSignIn = async () => {
        try {
            setLoggingIn(() => true)
            anonSignInAccount();
            setContentError(() => false);
            
        } catch {
            setContentError(() => true);
        } finally {
            setLoggingIn(() => false);
        }
    }

    return (
        <div className="loggedOutBar">
            <input type="button" value={"Anon Login"} className="authButton" onClick={() => anonSignIn()} disabled={loggingIn} />
        </div>
    )
}