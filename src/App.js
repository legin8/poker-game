import "./App.css";
// import { Main } from "./poker/Main/Main.js";
import { AuthUserContext } from "./poker/UserAuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { PokerContext } from "./poker/Context";

export const App = () => {
  return (
    <AuthUserContext>
      <RouterProvider router={router} />
    </AuthUserContext>
  );
};
