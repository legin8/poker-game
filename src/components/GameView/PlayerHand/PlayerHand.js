import { Card } from "../../Card/Card";
import { useGameContext } from "../../../poker/Context";
import "./PlayerHand.css"

const HAND_SIZE = 5;

export const PlayerHand = () => {
  const { deck, setDeck } = useGameContext();
  
  const getPlayerHand = () => {
    let originalDeck = deck;
    let hand = [];

    for (let i = 0; i < HAND_SIZE; i++) {
      const randIndex = Math.floor(Math.random() * originalDeck.length);
      const cardObj = originalDeck.splice(randIndex, 1);
      hand.push(...cardObj);
    }
    console.log(hand);
    setDeck(originalDeck);
    return hand;
  }

  const playerHand = getPlayerHand();

  return (
    <div className="playerHand">
      {playerHand.map((c) => (
      <Card number={c.number} suit={c.suit} />
      ))}
    </div>
  )
}