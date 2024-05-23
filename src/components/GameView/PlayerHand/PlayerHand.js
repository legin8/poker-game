import { Card } from "../../Card/Card";
import { useGameContext } from "../../../poker/Context";
import "./PlayerHand.css"
import { HAND_SIZE } from "../../../utils/constants";

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
    
    setDeck(originalDeck);
    return hand;
  }

  const playerHand = getPlayerHand();

  return (
    <div className="playerHand">
      {playerHand.map((c, i) => (
      <Card number={c.number} suit={c.suit} key={i} />
      ))}
    </div>
  )
}