import { isSameSuits, flush } from "./flush";
import { highCard } from "./highCard";
import { hasSameNumber, kinds } from "./kind";
import { straight } from "./straight";

const strightScore = 6;

// The smallest number is the higher score.
// Cards are always sorted before they come here, biggest value to smallest.
// 2 being smallest and 1 (ACE) being highest value, with 13 (KING) second highest.
// Ranking info from https://www.cardplayer.com/rules-of-poker/hand-rankings
export const getScore = (cards) => {
  if (isSameSuits(cards)) {
    return flush(cards);
  }
  if (hasSameNumber(cards)) {
    return kinds(cards);
  }
  if (straight(cards)) {
    console.log(strightScore);
    return strightScore;
  }

  return highCard(cards[0]);
}