import { HAND_SIZE } from "./constants";

// Takes cards out of the deck and returns the cards.
export const getFiveCards = (deck) => {
  let hand = [];

  for (let i = 0; i < HAND_SIZE; i++) {
    const randIndex = Math.floor(Math.random() * deck.length);
    const cardObj = deck.splice(randIndex, 1);
    hand.push(...cardObj);
  }

  return hand;
}

// Removes the given cards from the deck, returns the deck without the cards.
export const removeCardsFromDeck = (deck, cardsToRemove) => {
  for (let i = 0; i < cardsToRemove.length; i++) {
    deck.splice(deck.findIndex((c) => {
      return c.number === cardsToRemove[i].number && c.suit === cardsToRemove[i].suit;
    }), 1);
  }

  return deck;
}