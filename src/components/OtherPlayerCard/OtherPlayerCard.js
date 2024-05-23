import pic from "./back of card.jpg";
import "./OtherPlayerCard.css";

export const OtherPlayerCard = ({side}) => {
    return (
        <img className={`otherCard ${side}`} src={pic} />
    )
}