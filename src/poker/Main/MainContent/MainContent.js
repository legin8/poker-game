import { NotLoggedIn } from "./NotLoggedIn/NotLoggedIn";
import "./MainContent.css";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { useGameContext } from "../../Context";

export const MainContent = () => {
    const {contentError, userID} = useGameContext();

    const login = !contentError ? <NotLoggedIn />: <ErrorPage />
    return (
        <div className="mainContent">
            {console.log(userID)}
            {!userID ? login: <p>You are logged in.</p>}
        </div>
    )
}