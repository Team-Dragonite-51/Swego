import React from 'react';

export default function App() {
    function getReq(){
        fetch ('http://localhost:3000/test')
         .then (res=> res.json())
         .then (res => console.log(res))
    }
    return(
        <div>
            <h1>It Worked!</h1>
            <button onClick={getReq}>ClickMe</button>
        </div>
    )
}