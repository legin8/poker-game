import "./LoggedOutBar.css";
import { anonSignInAccount } from "../../../firebase";
import { useGameContext } from "../../../Context";
import { useState } from "react";

export const LoggedOutBar = () => {
    const {setContentError} = useGameContext();
    const [anonLoggingIn, setAnonLoggingIn] = useState(false);
    const anonSignIn = async () => {
        try {
            setAnonLoggingIn(() => true)
            anonSignInAccount();
            setContentError(() => false);
            
        } catch {
            setContentError(() => true);
        } finally {
            setAnonLoggingIn(() => false);
        }
    }

    return (
        <div className="loggedOutBar">
            <input type="button" value={"Anon Login"} className="authButton" onClick={() => anonSignIn()} disabled={anonLoggingIn} />
        </div>
    )
}