import { HAND_SIZE } from "./constants";

// Returns an array of 2 things.
// 1. The cards taken out of the deck.
// 2. The original deck without the 5 cards.
export const getFiveCards = (originalDeck) => {
    let hand = [];

    for (let i = 0; i < HAND_SIZE; i++) {
      const randIndex = Math.floor(Math.random() * originalDeck.length);
      const cardObj = originalDeck.splice(randIndex, 1);
      hand.push(...cardObj);
    }

    return [hand, originalDeck];
}

