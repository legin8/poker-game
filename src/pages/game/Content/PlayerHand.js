import { CardFront } from "../../../components/Cards/CardFront/CardFront";

export const PlayerHand = ({cards}) => {
  return (
    <div>
      {cards.map((card, k) => {
        return <CardFront key={k} number={card.number} suit={card.suit} />
      })}
    </div>
  )
}