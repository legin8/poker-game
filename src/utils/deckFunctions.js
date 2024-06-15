import { HAND_SIZE } from "./constants";

// Returns an array of the cards taken out of the deck
export const getFiveCards = (deck) => {
  let hand = [];

  for (let i = 0; i < HAND_SIZE; i++) {
    const randIndex = Math.floor(Math.random() * deck.length);
    const cardObj = deck.splice(randIndex, 1);
    hand.push(...cardObj);
  }

  return hand;
}

export const removeCardsFromDeck = (deck, cardsToRemove) => {
  for (let i = 0; i < cardsToRemove.length; i++) {
    deck.splice(deck.indexOf(cardsToRemove[i]), 1);
  }

  return deck;
}