import { NavBar } from "./NavBar/NavBar";
import { MainContent } from "./MainContent/MainContent";

export const Main = () => {
    return (
        <div className="mainPage">
            <NavBar />
            <MainContent />
        </div>
    )
}