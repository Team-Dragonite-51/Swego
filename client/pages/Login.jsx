import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import SignUp from './SignUp.jsx';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        const body = { username, password };
        console.log("LOGIN:", body);
        fetch('/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: (JSON.stringify(body))
        }).then(data => data.json())
        .then(data => {
            if (data === 11) {
                
                navigate('/start')
            }
            console.log(data);
        })
    }

    return(
        <div id='login'>
            <p className='start-title' align="center">Sign in</p>
            <form>
                <div className='login-input-cont'>
                    <input type="text" name="username" placeholder="Username" className="login-input" onChange={event => setUsername(event.target.value)} value={username}/>
                    <input type="password" name="password" placeholder="Password" className="login-input" onChange={event => setPassword(event.target.value)} value={password}/>
                </div>
                <div className='login-btn-cont'>
                    <button onClick={handleLogin} className='login-btn'>Login</button>
                    <Link to={SignUp}><button className='login-btn'>Signup</button></Link>
                </div>
            </form>
        </div>
    )
};

export default Login;