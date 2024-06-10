import { useGameContext } from "../../../poker/Context";
import { useEffect, useState } from "react";
import { subGames } from "../../../poker/firebase";
import { StartGameButton } from "../../../components/ControlButtons/StartGameButton/StartGameButton";
import "./UserGameList.css";

export const UserGameList = () => {
  const {userID} = useGameContext();
  const [userGameList, setUserGameList] = useState([]);

  const handlePokerListData = (listData) => {
    listData = listData.docs.map((d) => {
      return {
        ...d.data(),
        id: d.id,
      }
    });
    
    listData.length === 0 ? setUserGameList([{gameName: "No Games made yet"}]) : setUserGameList(listData);
  }

  const failedToGetList = () => {
    return [{gameName: "Couldn't load, Check internet."}];
  }

  const sub = () => {
    try {
      subGames(userID, handlePokerListData);
    } catch {
      setUserGameList(failedToGetList());
    }
  }

  const listOfGames = (
    <ol className="gameListOuter">
      {userGameList.map((i, k) => {
        return (
          <li key={k} className="gameListItem">
            <p className="glistname">{i.gameName}</p>
            <StartGameButton docID={i.id} />
          </li>
        )
      })}
    </ol>
  );

  useEffect(() => {
    return () => sub();
  }, []);

  return (
    <>
      {userGameList.length > 0 ? listOfGames: <li>Loading...</li>}
    </>
  )
}