import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom';

function Login () {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    // const users = [{username: "ash", password: "ash"}];

    // const handleLogin = (e) => {
    //     e.preventDefault();
    // }
    return (
        <div className="login-page">
             <label>Username:</label>
            <input type="email"></input>

            <label>Password:</label>
            <input type="password"></input>
            <button onClick={Login}>Login</button>

            <footer id="login-footer">Don't have an account?<input type="checkbox"></input>
            Forgot password?<input type="checkbox"></input></footer>
        </div>
    )
}

export default Login;