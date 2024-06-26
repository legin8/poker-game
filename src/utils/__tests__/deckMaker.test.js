import { newDeck } from "../deckMaker";

test("deck maker test, utility fuction", () => {
  const deck = newDeck();
  expect(deck.length).toBe(52);
  expect(deck[0].number).toBeTruthy();
  expect(deck[0].suit).toBeTruthy();
});
