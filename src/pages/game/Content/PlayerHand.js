import { CardFront } from "../../../components/CardFront/CardFront";
import "./PlayerHand.css";
import { useGameContext } from "../../../poker/Context";

export const PlayerHand = () => {
  const { cards, cardsToSwap } = useGameContext();
  return (
    <div className="playerHand">
      {cards.map((card, k) => {
        return (
          <CardFront
            key={k}
            number={card.number}
            suit={card.suit}
            cardsToSwap={cardsToSwap}
          />
        );
      })}
    </div>
  );
};
