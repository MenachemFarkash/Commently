import { createContext, useState } from "react";
import axios from "axios";
import App from "../App";
export const CommentsContext = createContext();

const ContextProvider = () => {
    const [display, setDisplay] = useState("main");
    const [comments, setComments] = useState([]);

    const getComments = async function () {
        const comments = await axios.get("http://localhost:4000/api/comments");
        console.log(comments.data);
        setComments(comments.data);
    };

    const addComment = async function (e, commentBody) {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const comment = await axios.post("http://localhost:4000/api/comments", {
            body: commentBody,
            token: token,
        });
        getComments();
    };

    const login = async function (e, loginInformation) {
        e.preventDefault();

        const login = await axios.post("http://localhost:4000/api/login", {
            email: loginInformation.email,
            password: loginInformation.password,
        });
        localStorage.setItem("token", login.data);
    };
    const register = async function (e, registerInformation) {
        e.preventDefault();

        const login = await axios.post("http://localhost:4000/api/users", {
            name: registerInformation.name,
            email: registerInformation.email,
            password: registerInformation.password,
        });
        localStorage.setItem("token", login.data);
    };

    return (
        <CommentsContext.Provider
            value={{ addComment, login, display, setDisplay, comments, setComments, getComments, register }}
        >
            <App />
        </CommentsContext.Provider>
    );
};

export default ContextProvider;
