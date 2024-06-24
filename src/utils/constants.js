// The amount of cards that a player can have at a time.
export const HAND_SIZE = 5;

// Max amount of cards that can be in a suit.
export const MAX_CARDS = 13

// All the different suits.
export const SUITS = {
  hearts: "H",
  dimonds: "D",
  spades: "S",
  clubs: "C",
}

export const ROOT_PATH = "games";

export const STATE_OF_PLAY = {
  drawCards: "drawCards",
  swapCards: "swapCards",
  scoreCards: "scoreCards",
  gameOver: "gameOver",
}

export const HIGH_RANKS = {
  royalFlush: [1, 13, 12, 11, 10],
}