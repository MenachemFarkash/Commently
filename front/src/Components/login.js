import { useContext, useState } from "react";
import { CommentsContext } from "../Helpers/Context";
const Login = () => {
    const { login } = useContext(CommentsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="formCard">
            <h1>Login</h1>
            <form className="loginForm" onSubmit={(e) => login(e, { email, password })}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton">Login</button>
            </form>
        </div>
    );
};
export default Login;
