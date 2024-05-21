const MAX_CARDS = 13
const SUITS = {
  hearts: "H",
  dimonds: "D",
  spades: "S",
  clubs: "C",
}

// Makes the cards for a given suit.
const cardsBySuits = (suitValue) => {
  let cards = [];
  for (let i = 1; i <= MAX_CARDS; i++) {
    cards.push({number: i, suit: suitValue })
  }
  return cards;
}

// Makes a unshuffled deck.
const makeDeck = () => {
  const spades = cardsBySuits(SUITS.spades);
  const clubs = cardsBySuits(SUITS.clubs);
  const hearts = cardsBySuits(SUITS.hearts);
  const dimonds = cardsBySuits(SUITS.dimonds);
  return [...spades, ...clubs, ...hearts, ...dimonds];
}

const shuffleDeck = (deck) => {
  let newDeck = [];

  while (deck.length > 0) {
    const randIndex = Math.floor(Math.random() * deck.length);
    const cardObj = deck.splice(randIndex, 1);
    newDeck.push(...cardObj);
  }
  console.log(newDeck);
  return newDeck;
}

// Returns a new shuffled deck.
export const newDeck = () => {
  const deck = makeDeck();
  return shuffleDeck(deck);
}