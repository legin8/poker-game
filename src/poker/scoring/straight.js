// Starting from the second card, we save value of counter plus the second card - the value of the first card.
// If the number are all in sequence, the counter will equal 4 at the end.
export const straight = (cards) => {
  let counter = 0;

  for (let i = 1; i < cards.length; i++) {
    counter = counter + (cards[i - 1].number - cards[i].number);
  }

  return counter === 4;
};
