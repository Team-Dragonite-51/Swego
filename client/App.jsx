import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Login from './pages/Login.jsx';
import Start from './pages/Start.jsx';
import MultipleChoice from './pages/MultipleChoice.jsx';
import Algo from './pages/Algo.jsx';
import OptOut from './pages/OptOut.jsx';
import GameOver from './pages/GameOver.jsx';

function App() {
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(0);
    const [question, setQuestion] = useState('');

    return(
        <div>
            APP Page
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/start' element={<Start question={question} setQuestion={setQuestion}/>}></Route>
                <Route path='/question-mc' element={<MultipleChoice score={score} setScore={setScore} stage={stage} setStage={setStage} question={question} setQuestion={setQuestion}/>}></Route>
                <Route path='/question-a' element={<Algo score={score} setScore={setScore} stage={stage} setStage={setStage} question={question} setQuestion={setQuestion}/>}></Route>
                <Route path='/opt-out' element={<OptOut score={score} setScore={setScore} stage={stage} setStage={setStage} question={question} setQuestion={setQuestion}/>}></Route>
                <Route path='/game-over' element={<GameOver score={score} setScore={setScore} stage={stage} setStage={setStage}/>}></Route>
            </Routes>
        </div>
    )
}

export default App;

{/* <Link to='/login'><button id='btn4'>Sign Up / Login</button></Link> */}

    // function getReq(){
    //     fetch ('http://localhost:3000/test')
    //      .then (res=> res.json())
    //      .then (res => console.log(res))
    // }