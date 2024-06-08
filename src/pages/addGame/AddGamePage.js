import { NavBar } from "../../components/NavBar/NavBar";
import "./AddGamePage.css";
import { AddGameContent } from "./Content/AddGameContent";
import { UserGameList } from "./Content/UserGameList";

export const AddGamePage = () => {
  return (
    <div>
      <NavBar />
      <AddGameContent />
      <UserGameList />
    </div>
  )
}