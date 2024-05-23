import { useGameContext } from "../../poker/Context";

export const QuitButton = () => {
    const { setGamePlayState, gameStateSetter } = useGameContext();
    return (
        <>
            <button onClick={() => setGamePlayState(gameStateSetter("startMenu"))}>Quit</button>
        </>
    )
}