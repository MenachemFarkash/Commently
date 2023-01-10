import { useContext, useState } from "react";
import { CommentsContext } from "../Helpers/Context";

const Register = () => {
    const { register } = useContext(CommentsContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="registerFormCard">
            <h1>Register</h1>
            <form className="registerForm" onSubmit={(e) => register(e, { email, password, name })}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton">Register</button>
            </form>
        </div>
    );
};

export default Register;
