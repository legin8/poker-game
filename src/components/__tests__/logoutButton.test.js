import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../poker/UserAuthContext";
import { LogoutButton } from "../ControlButtons/LogoutButton/LogoutButton";

jest.mock("../../poker/firebase");

test("logout button", () => {
  render(
    <AuthContext.Provider value={{setUserID: jest.fn()}}>
      <LogoutButton />
    </AuthContext.Provider>,
  );

  const myThing = screen.getByTestId("logout");
  expect(myThing).toHaveValue("Log out");
});
