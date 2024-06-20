import { useGameContext } from "../../../poker/Context";
import { updateGameDoc } from "../../../poker/firebase";
import { STATE_OF_PLAY } from "../../../utils/constants";
import { getCards, removeCards } from "../../../utils/deckFunctions";
import "./GameControls.css";
import { arrayUnion } from "firebase/firestore";

export const GameControls = () => {
    const { gameMessage, gameState, cards, setCards, cardsToSwap, deck, currentGameDocID, hasSwappedCards, setHasSwappedCards } = useGameContext();

    const swapHandler = () => {
        console.log("clicked");
        removeCards(cards, cardsToSwap);
        const newCards = getCards(deck, cardsToSwap.length);
        setCards((d) => [ ...d, ...newCards]);
        
        try {
            console.log("update start");
            setHasSwappedCards(true);
            updateGameDoc(currentGameDocID, {
                usedCards: arrayUnion(...newCards),
            });
            console.log("update end");
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="gameControls">
            <p>{gameMessage ? gameMessage: "Loading"}</p>
            {gameState === STATE_OF_PLAY.swapCards && <button onClick={() => swapHandler()}>Swap</button>}
        </div>
    )
}