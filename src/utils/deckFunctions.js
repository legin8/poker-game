// Takes cards out of the deck and returns the cards.
export const getCards = (deck, amount) => {
  let hand = [];

  for (let i = 0; i < amount; i++) {
    const randIndex = Math.floor(Math.random() * deck.length);
    const cardObj = deck.splice(randIndex, 1);
    hand.push(...cardObj);
  }

  return hand;
}

// Removes the given cards from the deck, returns the deck without the cards.
export const removeCards = (cards, cardsToRemove) => {
  for (let i = 0; i < cardsToRemove.length; i++) {
    cards.splice(cards.findIndex((c) => {
      return c.number === cardsToRemove[i].number && c.suit === cardsToRemove[i].suit;
    }), 1);
  }

  return cards;
}

export const sortHand = (cards) => {
  return cards.sort((a, b) => {
    if (a.number === 1 && b.number === 1) {
      return 0
    }
    if (b.number === 1) {
      return 1
    }
    if (a.number === 1) {
      return -1
    }
    return b.number - a.number
  });
}