import { NavBar } from "../../components/NavBar/NavBar";
import "./HomePage.css";
import { HomeContent } from "./Content/HomeContent";

export const HomePage = () => {
    return (
        <div className="homePage">
            <NavBar />
            <HomeContent />
        </div>
    )
}