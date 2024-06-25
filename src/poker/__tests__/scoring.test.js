import { getScore } from "../scoring/scoring";
import { royalFlush, straightFlush, fourOfAKind, flush, fullHouse, straight, threeOfAKind, twoPairs, pair, highCard } from "../testHands";

test("socring tests", () => {
  expect(getScore(royalFlush)).toBe(1);
  expect(getScore(straightFlush)).toBe(2);
  expect(getScore(fourOfAKind)).toBe(3);
  expect(getScore(fullHouse)).toBe(4);
  expect(getScore(flush)).toBe(5);
  expect(getScore(straight)).toBe(6);
  expect(getScore(threeOfAKind)).toBe(7);
  expect(getScore(twoPairs)).toBe(8);
  expect(getScore(pair)).toBe(9);
  expect(getScore(highCard)).toBe(90)
})