import { HIGH_RANKS } from "../utils/constants";

const royalFlushScore = 1;
const straightFlushScore = 2;
const fourOfAKindScore = 3;
const fullHouseScore = 4;
const flushScore = 5;
const strightScore = 6;
const threeOfAKindScore = 7;
const twoPairScore = 8;
const pairScore = 9;
const highCardScore = 10;


const isSameSuits = (cards) => {
  const firstSuit = cards[0].suit;
  cards.forEach(element => {
    if (element.suit !== firstSuit) {
      return false;
    }
  });
  return true;
}

const royalFlush = (cards) => {
  cards.forEach((element, i) => {
    if (element.number !== HIGH_RANKS.royalFlush[i]) {
      return false;
    }
  });
  return true;
}

const straightFlush = (cards) => {
  cards.forEach((element, i) => {
    if (i < cards.length - 1) {
      if (element.number !== cards[i + 1].number) {
        return false;
      }
    }
  });
  return true;
}

const flush = (cards) => {
  if (royalFlush(cards)) {
    return royalFlushScore;
  }
  if (straightFlush(cards)) {
    return straightFlushScore;
  }
  return flushScore;
}

const hasSameNumber = (cards) => {
  cards.forEach((element, i) => {
    if (element.number === cards[i + 1].number) {
      return true;
    }
  });
  return false;
}

const fourOfAKind = (cards) => {
  let counter = 0;
  cards.forEach((element, i) => {
    const nextCardCheck = element.number === cards[i + 1].number;
    if (nextCardCheck) {
      counter++;
    }
    if (i > 0 && counter === 0 && !nextCardCheck) {
      return false;
    }
    return true;
  })
}

const fullHouse = (cards) => {
  const isThreeOfKind = cards[0].number === cards[2].number || cards[2].number === cards[4].number;
  const isTwoOfKind = cards[0].number === cards[1].number && cards[3].number === cards[4].number;
  return isThreeOfKind === isTwoOfKind;
}

const threeOfAKind = (cards) => {
  return cards[0].number === cards[2].number || cards[1].number === cards[3].number || cards[2].number === cards[4].number;

}

const twoPair = (cards) => {
  return (cards[0].number === cards[1] && cards[2].number === cards[3]) ||
  (cards[1].number === cards[2] && cards[3].number === cards[4]) ||
  (cards[0].number === cards[1] && cards[3].number === cards[4]);
}

const kinds = (cards) => {
  if (fourOfAKind(cards)) {
    return fourOfAKindScore;
  }
  if (fullHouse(cards)) {
    return fullHouseScore;
  }
  if (threeOfAKind(cards)) {
    return threeOfAKindScore;
  }
  if (twoPair(cards)) {
    return twoPairScore;
  }
  return pairScore;
}

const straight = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    if ((i === 0 && cards[i].number === 1) || (i + 1 < cards.length && cards[i].number === cards[i + 1].number + 1)) {
      continue;
    }
    return false;
  }
  return true;
}

export const getScore = (cards) => {
  if (isSameSuits(cards)) {
    const result = flush(cards);
    console.log(result);
    return result;
  }
  if (hasSameNumber(cards)) {
    const result = kinds(cards);
    console.log(result);
    return result;
  }
  if (straight(cards)) {
    console.log(strightScore);
    return strightScore;
  }

  return cards[0].number + highCardScore;
}