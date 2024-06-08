import { createBrowserRouter } from "react-router-dom";
import { RootRedirect } from "../poker/RootRedirect";
import { LoginPage } from "../pages/login/LoginPage";
import { HomePage } from "../pages/home/HomePage";
import { AddGamePage } from "../pages/addGame/AddGamePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRedirect />
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/addgame",
        element: <AddGamePage />
    }
])