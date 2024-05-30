import { useGameContext } from "../../poker/Context";
import { PLAY_STATES } from "../../utils/constants";

export const QuitButton = () => {
    const { setGamePlayState, gameStateSetter, setPlayingState } = useGameContext();
    const quitHandler = () => {
        setGamePlayState(gameStateSetter("startMenu"));
        setPlayingState(PLAY_STATES);
    }

    return (
        <>
            <button onClick={() => quitHandler()}>Quit</button>
        </>
    )
}