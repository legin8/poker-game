import {
  HAND_SIZE,
  MAX_CARDS,
  SUITS,
  ROOT_PATH,
  STATE_OF_PLAY,
  HIGH_RANKS,
} from "../constants";

const royalFlushTest = [1, 13, 12, 11, 10];

test("constant tests", () => {
  expect(HAND_SIZE).toBe(5);
  expect(MAX_CARDS).toBe(13);

  expect(SUITS.clubs).toBe("C");
  expect(SUITS.spades).toBe("S");
  expect(SUITS.hearts).toBe("H");
  expect(SUITS.dimonds).toBe("D");

  expect(ROOT_PATH).toBe("games");
  expect(STATE_OF_PLAY.drawCards).toBe("drawCards");
  expect(STATE_OF_PLAY.swapCards).toBe("swapCards");
  expect(STATE_OF_PLAY.gameOver).toBe("gameOver");

  expect(HIGH_RANKS.royalFlush[0]).toBe(royalFlushTest[0]);
  expect(HIGH_RANKS.royalFlush[1]).toBe(royalFlushTest[1]);
  expect(HIGH_RANKS.royalFlush[2]).toBe(royalFlushTest[2]);
  expect(HIGH_RANKS.royalFlush[3]).toBe(royalFlushTest[3]);
  expect(HIGH_RANKS.royalFlush[4]).toBe(royalFlushTest[4]);
});
