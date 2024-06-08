import { useGameContext } from "../../../poker/Context";
import { useEffect, useState } from "react";
import { getPokerGames } from "../../../poker/firebase";

export const UserGameList = () => {
  const {userID} = useGameContext();
  const [userGameList, setUserGameList] = useState([]);

  const getUserGames = async () => {
    try {
      let listData = await getPokerGames();
      listData = listData.docs.map((d) => d.data());
      console.log(listData);
      setUserGameList(listData);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserGames();
  }, []);

  const listOfGames = userGameList.map((i, k) => {
    return (
      <p key={k}>{i.gameName}</p>
    )
  })

  return (
    <div>
      {userGameList.length > 0 ? listOfGames: <p>No content</p>}
    </div>
  )
}