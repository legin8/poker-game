import { GameControls } from "../game/Content/GameControls";
import { GameContext } from "../../poker/Context";
import { render, screen } from "@testing-library/react";

test("Game controls", () => {
  expect(true).toBe(true);
  render(
    <GameContext.Provider
      value={{
        gameMessage: "loading",
        isSwapTurn: true,
        swapHandler: jest.fn(),
      }}
    >
      <GameControls />
    </GameContext.Provider>,
  );

  expect(screen.getByTestId("gcButton")).toBeInTheDocument();
});
