import { createBrowserRouter } from "react-router-dom";
import { RootRedirect } from "../RootRedirect";
import { LoginPage } from "../pages/login/LoginPage";
import { HomePage } from "../pages/home/HomePage";

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
    }
])