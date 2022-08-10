import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ( { nextQuestion, setNextQuestion } ) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function handleSignup(event) {
        event.preventDefault();
        const body = { username, password };
        console.log("SIGNUP:", body);
        fetch('/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: (JSON.stringify(body))
        // }).then(data => data.json())
        // .then(data => {
        //     if (data === 11) {
        //         //
        //         // navigate('/start')
        //     }
        //     console.log(data);
        });
    }


    return(
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" onChange={event => setUsername(event.target.value)} value={username}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={event => setPassword(event.target.value)} value={password}/>
                </label>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignup}>Signup</button>
            </form>
        </div>
    )

}

export default SignUp;
