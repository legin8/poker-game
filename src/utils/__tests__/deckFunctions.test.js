import { getCards, removeCards, sortHand } from "../deckFunctions";
import { newDeck } from "../deckMaker.js";

const unSortedHand = [
  {
    number: 8,
    suit: "D",
  },
  {
    number: 3,
    suit: "H",
  },
  {
    number: 11,
    suit: "C",
  },
  {
    number: 1,
    suit: "DS",
  },
  {
    number: 7,
    suit: "D",
  },
];

test("deck function test, util", () => {
  const deck = newDeck();
  const testCards = getCards(deck, 5);
  expect(testCards.length).toBe(5);
  expect(deck.length).toBe(47);

  const secondDeck = newDeck();
  expect(removeCards(secondDeck, testCards).length).toBe(47);

  expect(unSortedHand[0].number).toBe(8);
  expect(sortHand(unSortedHand)[0].number).toBe(1);
});
