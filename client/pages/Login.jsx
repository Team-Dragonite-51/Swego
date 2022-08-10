import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import SignUp from './SignUp.jsx';

const Login = ( { nextQuestion, setNextQuestion }) => {

    const [username, setUsername] = useState('');
    const [inputPassword, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        const body = { username, inputPassword };
        console.log("LOGIN:", body);
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((data) => {
            console.log('res:', data);
            return data.json();
        })
        .then((data) => {
            console.log('entered last part')
            if (data === 11) {
                console.log(data);
                navigate('/start');
            } else {
                window.alert("The input is invalid")
            }
        }).catch((error) => console.log(error));
    }

    return(
        <div id='login'>
            <p className='start-title' align="center">Sign in</p>
            <form>
                <div className='login-input-cont'>
                    <input type="text" name="username" placeholder="Username" className="login-input" onChange={event => setUsername(event.target.value)} value={username}/>
                    <input type="password" name="inputPassword" placeholder="Password" className="login-input" onChange={event => setPassword(event.target.value)} value={inputPassword}/>
                </div>
                <div className='login-btn-cont'>
                    <button onClick={handleLogin} className='login-btn'>Login</button>
                    <Link to='/signup'><button className='login-btn'>Signup</button></Link>
                </div>
            </form>
        </div>
    )
};

export default Login;