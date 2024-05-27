import { CardFront } from "../../Cards/CardFront/CardFront";
import "./PlayerHand.css";

export const PlayerHand = ({ playerCards }) => {
  return (
    <div className="playerHand">
      {playerCards.map((c, i) => (
      <CardFront number={c.number} suit={c.suit} key={i} />
      ))}
    </div>
  )
}