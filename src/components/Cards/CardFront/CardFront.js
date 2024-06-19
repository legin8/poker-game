import "./CardFront.css";
import pic from "./card image.jpg";
import { useState } from "react";
import { useGameContext } from "../../../poker/Context";

export const CardFront = ({number, suit}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { cardsToSwap, setCardsToSwap } = useGameContext();

  const clickHandler = () => {
    const card = {number, suit};

    if (cardsToSwap.length < 3 && !isSelected) {
      setIsSelected(true);
      setCardsToSwap((v) => [...v, card]);
    }
    if (isSelected) {
      setIsSelected(false);
      const index = cardsToSwap.findIndex((c) => {
        return card.number === c.number && card.suit === c.suit;
      });
      cardsToSwap.splice(index, 1);
    }
  }

  return (
    <div className={`cardBoarder ${isSelected ? "selected": ""}`} onClick={() => clickHandler()}>
      <div className={`cardNnSTop ${suit} NnS`}>
        <p>{number}</p>
        <p>{suit}</p>
      </div>
      <div className="picDiv">
        <img src={pic} className="cardPic" />
      </div>
      <div className={`cardNnSBottom ${suit} NnS`}>
        <p>{number}</p>
        <p>{suit}</p>
      </div>
    </div>
  )
}