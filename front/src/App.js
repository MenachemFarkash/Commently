import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/login";
import { useEffect, useContext } from "react";
import Comments from "./Components/comments";
import Main from "./Components/main";
import { CommentsContext } from "./Helpers/Context";
import Register from "./Components/register";

function App() {
    const { display, setDisplay } = useContext(CommentsContext);
    return (
        <>
            <nav>
                <div className="header">
                    <h1>Commently</h1>
                </div>
                <div className="navbarButtons">
                    <button className="navbarButton" onClick={() => setDisplay("login")}>
                        Log in
                    </button>
                    <button className="navbarButton" onClick={() => setDisplay("signup")}>
                        Sign up
                    </button>
                    <button className="navbarButton" onClick={() => setDisplay("comments")}>
                        Comments
                    </button>
                </div>
            </nav>
            <div className="mainBody">
                {display === "main" ? (
                    <Main />
                ) : display === "login" ? (
                    <Login />
                ) : display === "comments" ? (
                    <Comments />
                ) : display === "signup" ? (
                    <Register />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default App;
