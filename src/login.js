import React, { useState } from 'react';
import './login.css';


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
        props.onLogin();

    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button className='login' type="button" onClick={handleLogin}>
                Login
                </button>
            </form>
        </div>
    );
};


export default Login;