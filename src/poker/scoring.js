import { HIGH_RANKS } from "../utils/constants";

const royalFlushScore = 1;
const straightFlushScore = 2;
const flushScore = 5;

const isSameSuits = (cards) => {
  const firstSuit = cards[0].suit;
  cards.forEach(element => {
    if (element.suit !== firstSuit) {
      return false;
    }
  });
  return true;
}

const isRoyalFlush = (cards) => {
  cards.forEach((element, i) => {
    if (element.number !== HIGH_RANKS.royalFlush[i]) {
      return 0;
    }
  });
  return royalFlushScore;
}

const isStraightFlush = (cards) => {
  cards.forEach((element, i) => {
    if (i < cards.length - 1) {
      if (element.number !== cards[i + 1].number) {
        return 0;
      }
    }
  });
  return straightFlushScore;
}

const flush = (cards) => {
  if (isRoyalFlush(cards)) {
    return royalFlushScore;
  }
  if (isStraightFlush(cards)) {
    return straightFlushScore;
  }
  return flushScore;
}

export const getScore = (cards) => {
  if (isSameSuits(cards)) {
    console.log(flush);
    return;
  } 
}