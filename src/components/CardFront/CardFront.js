import "./CardFront.css";
import pic from "./card image.jpg";
import { useState } from "react";
import { useGameContext } from "../../poker/Context";

export const CardFront = ({ number, suit }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { cardsToSwap } = useGameContext();
  let cardNumber = number;

  if (number === 11) cardNumber = "J";
  if (number === 12) cardNumber = "Q";
  if (number === 13) cardNumber = "K";

  const clickHandler = () => {
    const card = { number, suit };

    // runs if you can add a card.
    if (cardsToSwap.length < 3 && !isSelected) {
      setIsSelected(true);
      cardsToSwap.push(card);
    }

    // runs if you unselect a card.
    if (isSelected) {
      setIsSelected(false);

      const index = cardsToSwap.findIndex((c) => {
        return card.number === c.number && card.suit === c.suit;
      });

      cardsToSwap.splice(index, 1);
    }
  };

  return (
    <div
      className={`cardBoarder ${isSelected ? "selected" : ""}`}
      onClick={() => clickHandler()}
      data-testid={`cardID-${suit}${number}`}
    >
      <div className={`cardNnSTop ${suit} NnS`}>
        <p data-testid={`cardNumber-${number}`}>{cardNumber}</p>
        <p data-testid={`cardSuit-${suit}`}>{suit}</p>
      </div>
      <div className="picDiv">
        <img src={pic} className="cardPic" />
      </div>
      <div className={`cardNnSBottom ${suit} NnS`}>
        <p>{cardNumber}</p>
        <p>{suit}</p>
      </div>
    </div>
  );
};
