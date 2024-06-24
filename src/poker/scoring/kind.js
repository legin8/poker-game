const fourOfAKindScore = 3;
const fullHouseScore = 4;
const threeOfAKindScore = 7;
const twoPairScore = 8;
const pairScore = 9;

// Returns true if there are any of the same number.
export const hasSameNumber = (cards) => {
  let isSameNumber = false;
  for (let i = 0; i < cards.length - 1; i++) {
    if (cards[i].number === cards[i + 1].number) {
      isSameNumber = true;
      break;
    }
  }

  return isSameNumber;
};

const fourOfAKind = (cards) => {
  return (
    cards[0].number === cards[3].number || cards[1].number === cards[4].number
  );
};

const fullHouse = (cards) => {
  const isThreeOfKind =
    cards[0].number === cards[2].number || cards[2].number === cards[4].number;
  const isTwoOfKind =
    cards[0].number === cards[1].number && cards[3].number === cards[4].number;
  return isThreeOfKind && isTwoOfKind;
};

const threeOfAKind = (cards) => {
  return (
    cards[0].number === cards[2].number ||
    cards[1].number === cards[3].number ||
    cards[2].number === cards[4].number
  );
};

const twoPair = (cards) => {
  return (
    (cards[0].number === cards[1].number &&
      cards[2].number === cards[3].number) ||
    (cards[1].number === cards[2].number &&
      cards[3].number === cards[4].number) ||
    (cards[0].number === cards[1].number && cards[3].number === cards[4].number)
  );
};

export const kinds = (cards) => {
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
};
