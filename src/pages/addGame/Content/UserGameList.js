import { useGameContext } from "../../../poker/Context";
import { useEffect, useState } from "react";
import { subGames } from "../../../poker/firebase";
import "./UserGameList.css";

export const UserGameList = () => {
  const {userID} = useGameContext();
  const [userGameList, setUserGameList] = useState([]);

  const sortPokerGameData = (listData) => {
    listData = listData.docs.map((d) => d.data());
    listData.length === 0 ? setUserGameList([{gameName: "No Games made yet"}]) : setUserGameList(listData);
  }

  const failedToGetList = () => {
    return [{gameName: "Couldn't load, Check internet."}];
  }

  const sub = () => {
    try {
      subGames(userID, sortPokerGameData);
    } catch {
      setUserGameList(failedToGetList());
    }
  }

  const listOfGames = userGameList.map((i, k) => {
    return (
      <div>
        <p key={k}>{i.gameName}</p>
        <button>Start</button>
      </div>
    )
  })

  useEffect(() => {
    return () => sub();
  }, []);

  return (
    <div>
      {userGameList.length > 0 ? listOfGames: <p>Loading...</p>}
    </div>
  )
}