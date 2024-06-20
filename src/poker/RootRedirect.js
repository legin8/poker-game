import { Navigate } from "react-router-dom";
import { useAuthContext } from "./UserAuthContext";

export const RootRedirect = () => {
    const { userID } = useAuthContext();
    
    return (
        <>
            {userID ? (<Navigate to={"/home"} />): (<Navigate to={"/login"} />)}
        </>
    )
}