import { useGameContext } from "../../../poker/Context";
import { useEffect, useState } from "react";
import { subGames } from "../../../poker/firebase";
import { LookForPlayersButton } from "../../../components/ControlButtons/LookForPlayersButton/LookForPlayersButton.js";
import "./UserGameList.css";

export const UserGameList = () => {
  const {userID} = useGameContext();
  const [userGameList, setUserGameList] = useState([{isLoading: true}]);

  const handlePokerListData = (listData) => {
    listData = listData.docs.map((d) => {
      return {
        ...d.data(),
        docId: d.id,
      }
    });
    
    listData.length === 0 ? setUserGameList([]) : setUserGameList(listData);
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
            <LookForPlayersButton docID={i.docId} />
          </li>
        )
      })}
    </ol>
  );

  const emptyList = userGameList.isLoading ? <p>Loading...</p>: <p>No Games added yet.</p>;

  useEffect(() => {
    return () => sub();
  }, []);

  return (
    <>
      {userGameList.length > 0 ? listOfGames: emptyList}
    </>
  )
}