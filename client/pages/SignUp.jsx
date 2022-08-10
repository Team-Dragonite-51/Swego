import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function handleSignup(event) {
        event.preventDefault();
        const body = { username, password };
        console.log("SIGNUP:", body);
        fetch('http://localhost:3000/auth/signup', {
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
            if (data === 'signup-successful') {
                console.log(data);
                navigate('/');
            } else {
                window.alert("The input is invalid, or the username already exists")
            }
        }).catch((error) => console.log(error));
    }


    return(
        <div id='signup'>
            <p className='start-title' align="center">Sign Up</p>
            <div className='login-input-cont'>
                <input type="text" placeholder="Username" name="username" onChange={event => setUsername(event.target.value)} className="login-input" value={username}/>
                <input type="password" placeholder="Password" name="password" onChange={event => setPassword(event.target.value)} className="login-input" value={password}/>
            </div>
            <div className='login-btn-cont'>
                <button onClick={handleSignup} className="signup-btn">Signup</button>
            </div>
        </div>
    )

}

export default SignUp;
