import { useGameContext } from "./Context";
import { Navigate } from "react-router-dom";

export const RootRedirect = () => {
    const { userID } = useGameContext();
    
    return (
        <>
            {userID ? (<Navigate to={"/home"} />): (<Navigate to={"/login"} />)}
        </>
    )
}