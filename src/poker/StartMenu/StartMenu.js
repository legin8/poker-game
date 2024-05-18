import "./StartMenu.css"

export const StartMenu = ({ setter, objMaker }) => {
  return (
    <div className="GameTypeButtons">
      <button className="startMenuButton" onClick={() => setter(objMaker("singlePlayer"))}>Single Player</button>
      <button className="startMenuButton">Online</button>
    </div>
  )
}