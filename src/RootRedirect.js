import { useEffect } from "react"
import { useGameContext } from "./poker/Context";
import { useNavigate } from "react-router-dom";

export const RootRedirect = () => {
    const navigate = useNavigate();
    const { userID } = useGameContext();
    useEffect(() => {
        if (!userID) {
            navigate("/login");
        } else {
            navigate("/home");
        }
    });
    return (
        <p>redirecting...</p>
    )
}