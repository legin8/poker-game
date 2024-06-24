import { PlayerCount } from "./Content/PlayerCount";
import "./LobbyPage.css";
import { NavBar } from "../../components/NavBar/NavBar.js";

export const LobbyPage = () => {
  return (
    <div className="lobbyPage">
      <NavBar />
      <p className="lobbyHeading">Lobby Page</p>
      <PlayerCount />
    </div>
  );
};
