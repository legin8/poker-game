import { useState, useEffect } from "react";
import { subGamesToJoin } from "../../../poker/firebase";
import { JoinButton } from "./JoinButton";

export const GameList = () => {
  const [gameList, setGameList] = useState([{isLoading: true}]);

  const loading = gameList.isLoading ? <p>Loading</p>: <p>No active games found.</p>;
  const list = gameList.length > 0 ? (
    <ol>
      {gameList.map((i, k) => {
        return (
          <li key={k}>
            <p>{i.gameName}</p>
            <JoinButton docID={i.docID} />
          </li>
        )
      })}
    </ol>
  ): <p>No Games to play yet.</p>;

  const makegameList = (gameListData) => {
    gameListData = gameListData.docs.map((i) => {
      return {
        ...i.data(),
        docID: i.id,
      }
    });
    
    setGameList(gameListData);
  }

  const sub = () => {
    subGamesToJoin(makegameList);
  }

  useEffect(() => {
    return sub();
  }, []);

  return (
    <div>
      <p>Join Game</p>
      {gameList.length > 0 ? list: loading}
    </div>
  )
}