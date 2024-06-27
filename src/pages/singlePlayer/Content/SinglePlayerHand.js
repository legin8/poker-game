import { CardFront } from "../../../components/CardFront/CardFront";
import "./SinglePlayerHand.css";

export const SinglePlayerHand = ({ cards, cardsToSwap, setCardsToSwap }) => {
  return (
    <div className="playerHand">
      {cards.map((card, k) => {
        return (
          <CardFront
            key={k}
            number={card.number}
            suit={card.suit}
            cardsToSwap={cardsToSwap}
            setCardsToSwap={setCardsToSwap}
          />
        );
      })}
    </div>
  );
};
