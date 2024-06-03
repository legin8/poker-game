import { NotLoggedIn } from "./NotLoggedIn/NotLoggedIn";
import "./MainContent.css";

export const MainContent = () => {
    return (
        <div className="mainContent">
            <NotLoggedIn />
        </div>
    )
}