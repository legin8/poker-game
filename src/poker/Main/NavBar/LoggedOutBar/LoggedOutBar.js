import "./LoggedOutBar.css";

export const LoggedOutBar = () => {
    return (
        <div className="loggedOutBar">
            <input type="button" value={"Login"} className="authButton" />
            <input type="button" value={"Register"} className="authButton" />
        </div>
    )
}