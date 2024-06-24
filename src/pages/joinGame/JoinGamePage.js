import "./JoinGamePage.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { GameList } from "./Content/GameList";

export const JoinGamePage = () => {
  return (
    <div className="joinGamePage">
      <NavBar />
      <GameList />
    </div>
  );
};
