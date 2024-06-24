import { createBrowserRouter } from "react-router-dom";
import { RootRedirect } from "../poker/RootRedirect";
import { LoginPage } from "../pages/login/LoginPage";
import { HomePage } from "../pages/home/HomePage";
import { AddGamePage } from "../pages/addGame/AddGamePage";
import { JoinGamePage } from "../pages/joinGame/JoinGamePage";
import { LobbyPage } from "../pages/lobby/LobbyPage";
import { GamePage } from "../pages/game/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/addgame",
    element: <AddGamePage />,
  },
  {
    path: "/joingame",
    element: <JoinGamePage />,
  },
  {
    path: "/lobby",
    element: <LobbyPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);
