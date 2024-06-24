import { HIGH_RANKS } from "../../utils/constants";

const royalFlushScore = 1;
const straightFlushScore = 2;
const flushScore = 5;

// Returns true if all cards are the same suit.
export const isSameSuits = (cards) => {
  let isSameSuits = true;
  const firstSuit = cards[0].suit;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].suit !== firstSuit) {
      isSameSuits = false;
      break;
    }
  }

  return isSameSuits;
};

const royalFlush = (cards) => {
  let isRoyalFlush = true;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].number !== HIGH_RANKS.royalFlush[i]) {
      isRoyalFlush = false;
      break;
    }
  }

  return isRoyalFlush;
};

const straightFlush = (cards) => {
  let counter = 0;

  for (let i = 1; i < cards.length; i++) {
    counter = counter + (cards[i - 1].number - cards[i].number);
  }

  return counter === 4;
};

export const flush = (cards) => {
  if (royalFlush(cards)) {
    return royalFlushScore;
  }
  if (straightFlush(cards)) {
    return straightFlushScore;
  }

  return flushScore;
};
