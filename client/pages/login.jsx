import React from 'react';
import { useNavigate } from 'react-router-dom';
import aiWedPic from '../images/AI-wed-background.png'; // Import image directly

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <div className="login-page" style={{ backgroundImage: `url(${aiWedPic})`, opacity: 0.7, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <span className="login-container">
                <label>Username:</label>
                <input type="email" id="email" name="username" />
                <br />

                <label className="password-login">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={handleLogin}>Login</button>
            </span>

            <footer id="login-footer">
                Don't have an account?<input type="checkbox" />
                Forgot password?<input type="checkbox" />
            </footer>
        </div>
    );
}

export default Login;
