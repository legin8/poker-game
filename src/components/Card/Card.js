import "./Card.css"
import pic from "./card image.jpg"

export const Card = ({number, suit}) => {
  return (
    <div className="cardBoarder">
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