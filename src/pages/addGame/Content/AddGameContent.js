import { useState } from "react";

export const AddGameContent = () => {
  const [gameName, setGameName] = useState();
  const addGameHandler = () => {
    console.log(gameName);
  }

  return (
    <div>
      <label>Add Game</label>
      <input type="text" onChange={(v) => setGameName(v.target.value)} />
      <input type="button" value={"Submit"} onClick={() => addGameHandler()} />
    </div>
  )
}