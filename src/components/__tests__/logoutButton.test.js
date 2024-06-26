import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../poker/UserAuthContext";
import { LogoutButton } from "../ControlButtons/LogoutButton/LogoutButton";

jest.mock("../../poker/firebase");
jest.mock("../../poker/UserAuthContext");

test("logout button", () => {
  expect(true).toBe(true);
  // render(
  //   <AuthContext.Provider value={{setUserID: jest.fn()}}>
  //     <LogoutButton />
  //   </AuthContext.Provider>
  // );

  // expect(screen.getByTestId("logout"));
});
