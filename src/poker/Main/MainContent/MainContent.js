import { NotLoggedIn } from "./NotLoggedIn/NotLoggedIn";
import "./MainContent.css";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { useGameContext } from "../../Context";

export const MainContent = () => {
    const {contentError} = useGameContext();
    return (
        <div className="mainContent">
            {!contentError && <NotLoggedIn />}
            {contentError && <ErrorPage />}
        </div>
    )
}