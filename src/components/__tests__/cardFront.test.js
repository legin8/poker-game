import { render, screen } from "@testing-library/react";
import { CardFront } from "../CardFront/CardFront";

const number = 10;
const suit = "D";

jest.mock("../../poker/firebase");

test("CardFront", () => {
  render(<CardFront number={number} suit={suit} cardsToSwap={[]} />);

  expect(screen.getByTestId(`cardID-${suit}${number}`));
  expect(screen.getByTestId(`cardNumber-${number}`));
  expect(screen.getByTestId(`cardSuit-${suit}`));
  expect(screen.getByTestId(`cardID-${suit}${number}`)).toBeInTheDocument();
});
