import { useNavigate } from "react-router-dom";
import { updateGameDoc } from "../../../poker/firebase";
import { useAuthContext } from "../../../poker/UserAuthContext";

export const GameOverButton = () => {
  const { gameDocID } = useAuthContext();
  const navigate = useNavigate();
  const gameOverHandler = async () => {
    updateGameDoc(gameDocID, {
      players: [],
    });
    navigate("/home");
  };
  return <button onClick={() => gameOverHandler()}>Home</button>;
};
