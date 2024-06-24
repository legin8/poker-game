const highCardScore = 100;

// If the number is 1 we change it to 14.
// Then we take 100 and - the card number, This makes the higher number smaller.
export const highCard = (card) => {
  let cardNumber = card.number;
  if (card.number === 1) {
    cardNumber = 14;
  }
  return highCardScore - cardNumber;
}