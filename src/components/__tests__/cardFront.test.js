import { render, screen } from "@testing-library/react";
import { CardFront } from "../CardFront/CardFront";
import { GameContext } from "../../poker/Context";

const number = 10;
const suit = "D";

jest.mock("../../poker/firebase");
jest.mock("../../poker/UserAuthContext");

test("CardFront", () => {
    render(
    <GameContext.Provider value={{cardsToSwap: []}}>
        <CardFront number={number} suit={suit} />
    </GameContext.Provider>);

    expect(screen.getByTestId(`cardID-${suit}${number}`));
    expect(screen.getByTestId(`cardNumber-${number}`));
    expect(screen.getByTestId(`cardSuit-${suit}`));
});