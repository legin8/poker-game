import { useGameContext } from "../../../poker/Context";
import { useEffect, useState } from "react";
import { getPokerGames, subGames } from "../../../poker/firebase";
import "./UserGameList.css";

export const UserGameList = () => {
  const {userID} = useGameContext();
  const [userGameList, setUserGameList] = useState([]);

  const sortPokerGameData = (listData) => {
    listData = listData.docs.map((d) => d.data());
    listData = listData.filter((d) => d.owner === userID);
    listData.length === 0 ? setUserGameList([{gameName: "No Games made yet"}]) : setUserGameList(listData);
  }

  const getUserGames = async () => {
    try {
      let listData = await getPokerGames();
      sortPokerGameData(listData);
    } catch {
      setUserGameList(failedToGetList());
    }
  }

  const failedToGetList = () => {
    return [{gameName: "Couldn't load, Check internet."}];
  }

  const sub = () => {
    try {
      subGames(sortPokerGameData);
    } catch {
      setUserGameList(failedToGetList());
    }
  }

  const listOfGames = userGameList.map((i, k) => <p key={k}>{i.gameName}</p>)

  useEffect(() => {
    getUserGames();
    return () => sub();
  }, []);

  return (
    <div>
      {userGameList.length > 0 ? listOfGames: <p>Loading</p>}
    </div>
  )
}