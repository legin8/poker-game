import { LookForPlayersButton } from "../ControlButtons/LookForPlayersButton/LookForPlayersButton";
import { AuthContext } from "../../poker/UserAuthContext";
import { render, screen } from "@testing-library/react";

jest.mock("../../poker/firebase");
jest.mock("react-router-dom");

const docID = "asdhofhiufwreqwrteqhiop";
const userID = "sssssssssssssssssssssssssss";

test("look for players button", () => {
  render(
    <AuthContext.Provider value={{userID: userID, setGameDocID: jest.fn()}}>
      <LookForPlayersButton docID={docID} />
    </AuthContext.Provider>,
  );

  expect(screen.getByTestId("lookForPlayers")).toHaveTextContent("Look For Players");
});
