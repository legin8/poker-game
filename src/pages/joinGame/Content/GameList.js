import { useState, useEffect } from "react";
import { subGamesToJoin } from "../../../poker/firebase";

export const GameList = () => {
  const [gameList, setGameList] = useState([]);

  const loading = <p>Loading</p>;
  const list = gameList.length > 0 ? (
    <ol>
      {gameList.map((i, k) => <li key={k}>{i.gameName}</li>)}
    </ol>
  ): <p>No Games to play yet.</p>;

  const makegameList = (gameListData) => {
    gameListData = gameListData.docs.map((i) => {
      return {
        ...i.data(),
        id: i.id,
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