import { AddGameContent } from "../addGame/Content/AddGameContent";
import { AuthContext } from "../../poker/UserAuthContext";
import { fireEvent, render, screen } from "@testing-library/react";
// data-testid={"navbarHome"}

jest.mock("../../poker/firebase");

test("add game content", () => {
  render(
    <AuthContext.Provider value={{ userID: "sdfsfdafsda" }}>
      <AddGameContent />
    </AuthContext.Provider>,
  );
  const textInput = screen.getByTestId("addgamecontentText");
  expect(textInput).toHaveValue("");
  fireEvent.change(textInput, { target: { value: "testing" } });
  expect(textInput).toHaveValue("testing");
});
